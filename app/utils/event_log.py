import json
import os
from datetime import datetime

import requests
from dotenv import load_dotenv, find_dotenv
from requests.models import Response

# dotenv_path = '/config/development/.env'
# if not os.path.exists(dotenv_path):
#     dotenv_path = '/config/production/.env'
_ = load_dotenv(find_dotenv())


def _add_datetime_to_body(body: str) -> str:
    data = json.loads(body)
    current_datetime = datetime.now().isoformat()
    data['datetime'] = current_datetime
    updated_body = json.dumps(data)

    return updated_body

def save_event_to_log(body: str) -> None:
    updated_body = _add_datetime_to_body(body)

    if not os.path.exists('./logs/events.log'):
        with open('./logs/events.log', 'w') as f:
            pass

    with open('./logs/events.log', 'a') as f:
        f.write(f'{updated_body}\n')


def save_user_to_log(user_profile):
    log_file_path = f'./logs/users.log'

    # Log User Profile
    with open(log_file_path, "a") as f:
        f.write(json.dumps(vars(user_profile), sort_keys=True))
        f.write('\n')

def get_event_logs_infos(
        date       : str="",
        host_name  : str=os.environ['HOST'],
        port_number: str=os.environ['PORT'],) -> list | str:
    
    if date == "":
        response: Response = requests.get(f"http://{host_name}:{port_number}/logs/event/")
    elif date != "":
        response: Response = requests.get(f"http://{host_name}:{port_number}/logs/event?date={date}")
    else:
        date = datetime.now().strftime('%Y-%m-%d')
        response: Response = requests.get(f"http://{host_name}:{port_number}/logs/event?date={date}")

    if response.status_code == 200:
        logs_info: list = json.loads(response.text)
        return logs_info
    else:
        return "Error fetching data from URL"

def log_message_event(data: list) -> list:

    rows = []

    for i in range(len(data)):
        data_dict: dict = json.loads(data[i])
        datetime: str = data_dict['datetime'][0:10]
        destination: str = data_dict['destination']
        if data_dict['events'][0]["type"] != "message":
            continue
        event_type = data_dict['events'][0]["type"]
        event_message_type = data_dict['events'][0]["message"]["type"]
        event_message_text = data_dict['events'][0]["message"]["text"]
        event_source_type = data_dict['events'][0]["source"]["type"]

        if event_source_type == "group":
            event_group_id = data_dict['events'][0]["source"]["groupId"]
        else:
            event_group_id = ""
        event_source_user_id = data_dict['events'][0]["source"]["userId"]


        rows.append([
            datetime,
            destination, 
            event_type, 
            event_message_type, 
            event_message_text,
            event_source_type,
            event_group_id,
            event_source_user_id,
        ])

    return rows

if __name__ == "__main__":
    logs_info: list = get_event_logs_infos()

