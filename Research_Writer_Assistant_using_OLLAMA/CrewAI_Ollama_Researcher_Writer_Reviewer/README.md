# CrewAI Researcher–Writer–Reviewer with Ollama

This sequential three-agent project uses a locally hosted model through Ollama. It does **not** require an OpenAI API key, OpenAI billing, or API credits.

## Requirements
- Windows 10/11, VS Code, Python supported by your CrewAI release
- Ollama for Windows
- Adequate disk space and RAM/VRAM for the chosen model

## 1. Install and test Ollama
Download from https://ollama.com/download, install and launch it. In PowerShell:

```powershell
ollama pull llama3.2
ollama run llama3.2
```
Enter a test prompt, then type `/bye`. Check the downloaded model with `ollama list`. Ollama normally serves locally at `http://localhost:11434`.

## 2. Open the project
Extract the ZIP and open the folder containing `main.py` and `requirements.txt` in VS Code. Open Terminal → New Terminal.

## 3. Create environment and install packages
```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install --upgrade pip
pip install -r requirements.txt
```
If activation is blocked:
```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
.\.venv\Scripts\Activate.ps1
```

## 4. Configure local model
Copy `.env.example` to `.env` in the project root:
```ini
OLLAMA_BASE_URL=http://localhost:11434/v1
OLLAMA_MODEL=llama3.2
OLLAMA_API_KEY=ollama
```
`ollama` is a placeholder for the OpenAI-compatible client, not an OpenAI credential. The shared LLM configuration is in `agents/local_llm.py` and is passed to all three agents.

## 5. Run
Ensure Ollama is running and the virtual environment is active:
```powershell
python main.py
```
Enter topic, audience, and word count. Defaults are Explainable AI methods for clinical decision support, Undergraduate Students, and 1000 words. The final revised Markdown report is saved in `output/`.

## Agent workflow
1. Researcher: structured background notes, concepts, limitations, and verification flags.
2. Writer: academic report based on the notes.
3. Reviewer: revises the complete report and flags unsupported statements.
CrewAI executes the tasks sequentially using `Process.sequential`.

## Troubleshooting
- Connection refused: launch Ollama; try `ollama list`; verify `http://localhost:11434`.
- Model missing: run `ollama pull llama3.2`; match the `.env` model name.
- Slow/out of memory: close other applications or use a smaller model. Hardware and model size determine speed and feasibility.
- CrewAI rejects `custom_openai`: CrewAI APIs evolve. Upgrade packages in the active venv and consult current CrewAI LLM documentation for the installed version's Ollama-compatible setup.
- No OpenAI credits: this project calls Ollama locally, not OpenAI.

## Academic integrity
Local models can still produce errors, incomplete literature coverage, and fabricated details. Verify technical claims, citations, statistics, and references against primary papers and authoritative sources before submission. The prompts instruct agents not to invent references or results.

## Structure
`agents/` contains three agents and shared local LLM setup; `tasks/` contains their tasks; `crew.py` orchestrates them; `main.py` is the entry point; `output/` stores reports.
