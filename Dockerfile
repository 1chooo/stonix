FROM python:3.11-slim-buster

COPY ./requirements.txt /app/

WORKDIR /app

RUN pip install -r requirements.txt

COPY . /app

EXPOSE 8080

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8080"]