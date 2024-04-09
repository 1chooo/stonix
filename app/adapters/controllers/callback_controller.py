from fastapi import APIRouter, status
from fastapi.requests import Request
from fastapi.responses import JSONResponse
from linebot.exceptions import InvalidSignatureError

from app.adapters.handlers.linebot_handler import handler
from app.utils.event_log import save_event_to_log

callback_routes = APIRouter(tags=["callback"], prefix="/callback")

@callback_routes.post("/", status_code=status.HTTP_201_CREATED)
async def callback(request: Request) -> JSONResponse:
    signature = request.headers['X-Line-Signature']

    body = await request.body()
    body = body.decode('utf-8')

    save_event_to_log(body)

    try:
        handler.handle(body, signature)
    except InvalidSignatureError:
        return JSONResponse(
            status_code=status.HTTP_400_BAD_REQUEST,
            content={"message": "Invalid signature"})

    return JSONResponse(
        status_code=status.HTTP_201_CREATED, 
        content={"message": "OK"},)
