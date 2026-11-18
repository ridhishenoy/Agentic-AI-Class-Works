# CrewAI Researcher–Writer–Reviewer Lab

A beginner-friendly VS Code project demonstrating a sequential, three-agent academic writing workflow.

## Workflow

1. **Researcher Agent** prepares a structured research brief.
2. **Writer Agent** turns the brief into an academic report.
3. **Reviewer Agent** critiques and revises the report.

The tasks run in `Process.sequential` order. The Writer receives the Researcher task output through `context=[research_task]`; the Reviewer receives the Writer output through `context=[writing_task]`.

## Requirements

- Python 3.10+ (Python 3.11 recommended)
- Visual Studio Code and the Microsoft Python extension
- Internet access
- An OpenAI API key with API access and available billing/credits

A ChatGPT subscription does not automatically include OpenAI API usage or credits. See the OpenAI API platform for account and billing details.

## Setup (Windows PowerShell)

```powershell
py -3.11 -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install --upgrade pip
pip install -r requirements.txt
Copy-Item .env.example .env
```

Open `.env` and replace the placeholder with your own API key.

If PowerShell blocks activation, use Command Prompt:

```bat
.venv\Scripts\activate.bat
```

## Setup (macOS/Linux)

```bash
python3 -m venv .venv
source .venv/bin/activate
python -m pip install --upgrade pip
pip install -r requirements.txt
cp .env.example .env
```

Edit `.env` and add your key.

## Run

```bash
python main.py
```

Enter a research topic, target audience, and approximate word count. The outputs are written to `output/`:

- `research_findings.md`
- `draft_report.md`
- `final_report_<topic>_<timestamp>.md`

The two intermediate files are written when CrewAI returns task outputs as expected. The final result is saved from the crew result.

## Important research-integrity limitation

This starter project uses an LLM to generate a research brief from its learned knowledge and the prompt context. It does **not** connect to Google Scholar, Scopus, Crossref, PubMed, or a live web search service. Therefore:

- Do not treat generated references, factual claims, or research gaps as verified literature.
- Independently search and verify sources in trusted scholarly databases.
- Check author names, title, venue, year, DOI, dataset details, and numerical findings.
- Use the system as a drafting and review assistant, not as a substitute for scholarly research or supervisor review.

## API key safety

- Keep the real key only in `.env`.
- Never paste it into source code, screenshots, reports, or public repositories.
- Do not upload `.env` when submitting the lab.
- If a key is exposed, revoke it and create a replacement in the API platform.

## Troubleshooting

| Symptom | What to check |
|---|---|
| `ModuleNotFoundError` | Activate the virtual environment and run `pip install -r requirements.txt`. |
| Authentication error | Check that `.env` exists, the key is correct, and there are no extra quotation marks or spaces. |
| Quota or billing error | Check API billing, credits, and usage limits in the API platform. |
| Model not found / unsupported model | Confirm the model identifier available to your API account and update `OPENAI_MODEL`. |
| Network or timeout error | Check internet access and retry after a short interval. |
| PowerShell activation blocked | Use Command Prompt activation or the appropriate execution-policy guidance from your institution. |

## Suggested student exercises

1. Change the topic to explainable AI in healthcare and compare the research brief with the final report.
2. Add a requirement to the Researcher prompt to identify common datasets, evaluation metrics, and methodological limitations. Verify every named dataset and paper independently.
3. Modify the Writer task to include a problem statement, objectives, and research questions.
4. Add a reviewer criterion for reproducibility and ethical considerations.
5. Design a fourth **Reference Verification** stage. It must use a real bibliographic source/API and must never invent missing metadata.

## Lab submission

Submit the source code (without `.env`), the generated Markdown outputs, screenshots of successful execution, and a short reflection describing one useful contribution and one limitation of each agent.
