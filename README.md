# Trade Tracker

## Getting Started

```bash
# On macOS and Linux.
curl -LsSf https://astral.sh/uv/install.sh | sh

# On Windows.
powershell -c "irm https://astral.sh/uv/install.ps1 | iex"

# With pip.
pip install uv

# With pipx.
pipx install uv

# With Homebrew.
brew install uv

# With Pacman.
pacman -S uv
```

```bash
uv venv  # Create a virtual environment at .venv.
```

```bash
# On macOS and Linux.
source .venv/bin/activate

# On Windows.
.venv\Scripts\activate
```

```bash
uv pip compile requirements.in -o requirements.txt    # Read a requirements.in file.
uv pip compile pyproject.toml -o requirements.txt     # Read a pyproject.toml file.
uv pip compile setup.py -o requirements.txt           # Read a setup.py file.
echo flask | uv pip compile - -o requirements.txt     # Read from stdin.
uv pip freeze | uv pip compile - -o requirements.txt  # Lock the current environment.
```

https://github.com/astral-sh/uv

```bash
uv pip install gradio
uv pip install "uvicorn[standard]"
uv pip install boto3
uv pip install python-dotenv
uv pip install line-bot-sdk
```

```bash
uv pip sync requirements.txt  # Install from a requirements.txt file.
```
