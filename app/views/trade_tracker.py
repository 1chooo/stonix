import gradio as gr


def trade_tracker() -> gr.Blocks:

    with gr.Blocks(title="Trade Tracker") as demo:

        gr.HTML("<h1 align=center>🐻 Trade Tracker</h1>")

    return demo
