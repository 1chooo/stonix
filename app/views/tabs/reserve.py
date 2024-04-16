import gradio as gr

def init_reserve():

    with gr.Tab("Reverse") as reserve_tab:

        gr.Markdown(
            "# Reverse Tab",)
        
    return reserve_tab