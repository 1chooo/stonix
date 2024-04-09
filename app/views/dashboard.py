from typing import Any

import gradio as gr


def build_playground(
    *args: Any, **kwargs: Any,) -> gr.Blocks:

    demo = gr.Blocks(
        title='Trade Tracker ™️',
    )

    with demo:
        header = gr.HTML(
            "<h1 align=center>Trade Tracker ™️</h1>"
        )

    return demo
