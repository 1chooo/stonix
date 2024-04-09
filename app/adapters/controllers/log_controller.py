import json

from fastapi import APIRouter, status

logs_routes = APIRouter(tags=["logs"], prefix="/logs")

@logs_routes.get("/event", status_code=status.HTTP_200_OK)
async def get_logs(date: str="") -> list:
    log_file_path: str = f'./logs/events.log'

    try:
        with open(log_file_path, 'r') as f:
            logs: list = f.readlines()
        if date != "":
            logs = _filter_date(date, logs)
    except FileNotFoundError:
        logs: list = []
    except Exception as e:
        logs: list = []
        print("Get logs error:", e)

    return logs


def _filter_date(date, logs):
    filtered_logs = []

    for i in range(len(logs)):
        log = json.loads(logs[i])
        log_datetime = log['datetime']

        if date == log_datetime[0:10]:
            filtered_logs.append(logs[i])

    return filtered_logs

@logs_routes.get("/users/", status_code=status.HTTP_200_OK)
async def get_logs(date: str = ""):
    log_file_path = f'./logs/users.log'

    try:
        with open(log_file_path, 'r') as f:
            logs = f.readlines()
    except FileNotFoundError:
        logs = []

    return logs

