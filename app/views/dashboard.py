from typing import Any

import gradio as gr
from app.views.tabs.calculator import init_calculator
from app.views.tabs.reserve import init_reserve


def build_playground(
    *args: Any, **kwargs: Any,) -> gr.Blocks:

    demo = gr.Blocks(
        title='Trade Tracker ™️',
    )

    with demo:
        header = gr.HTML(
            "<h1 align=center>Trade Tracker ™️</h1>"
        )

        calculator_tab = init_calculator()
        reverse_tab = init_reserve()


    return demo
