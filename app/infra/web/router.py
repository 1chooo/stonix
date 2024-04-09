import gradio as gr
from fastapi import FastAPI

from app.adapters.controllers.callback_controller import callback_routes
from app.adapters.controllers.log_controller import logs_routes
from app.views.dashboard import build_playground


def setup_routers(app: FastAPI) -> None:
    gr.mount_gradio_app(app, build_playground(), path="/playground")

    app.include_router(callback_routes)
    app.include_router(logs_routes)
