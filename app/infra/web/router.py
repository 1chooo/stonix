import gradio as gr
from fastapi import FastAPI

from app.adapters.controllers.mock import mock_routes
from app.views.trade_tracker import trade_tracker


def setup_routers(app: FastAPI) -> None:
    """
    Setup routers for the application

    Args:
        - app (FastAPI): FastAPI instance

    Returns:
        - None
    """
    gr.mount_gradio_app(app, trade_tracker(), path="/")
    app.include_router(mock_routes)
