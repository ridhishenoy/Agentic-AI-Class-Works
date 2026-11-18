import os
import re
from datetime import datetime
from pathlib import Path

from dotenv import load_dotenv
from crew import create_research_crew


def safe_filename(value: str) -> str:
    cleaned = re.sub(r"[^a-zA-Z0-9_-]+", "_", value).strip("_")
    return cleaned[:60] or "research_topic"


def main() -> None:
    load_dotenv()

    api_key = os.getenv("OPENAI_API_KEY", "").strip()
    if not api_key or api_key == "your_openai_api_key_here":
        print("Missing API key. Add OPENAI_API_KEY to your .env file.")
        return

    print("\n==============================================")
    print(" CREWAI RESEARCH ASSISTANT")
    print(" Researcher  >  Writer  >  Reviewer")
    print("==============================================\n")

    topic = input("Research topic: ").strip()
    if not topic:
        print("Please enter a topic.")
        return

    audience = input("Target audience [Postgraduate students]: ").strip()
    audience = audience or "Postgraduate students"

    word_count = input("Approximate report word count [1200]: ").strip()
    word_count = word_count or "1200"
    if not word_count.isdigit() or int(word_count) < 300:
        print("Enter a numeric word count of at least 300.")
        return

    output_dir = Path("output")
    output_dir.mkdir(exist_ok=True)

    print("\nCreating agents and tasks...")
    crew = create_research_crew()

    print("\nStarting sequential workflow. This may take several minutes.\n")
    result = crew.kickoff(
        inputs={
            "topic": topic,
            "audience": audience,
            "word_count": word_count,
        }
    )

    # CrewAI returns task outputs in the same order as the task list.
    task_outputs = getattr(result, "tasks_output", []) or []
    output_names = ["research_findings.md", "draft_report.md"]

    for index, name in enumerate(output_names):
        if index < len(task_outputs):
            raw = getattr(task_outputs[index], "raw", str(task_outputs[index]))
            (output_dir / name).write_text(raw, encoding="utf-8")

    final_text = getattr(result, "raw", str(result))
    stamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    final_path = output_dir / f"final_report_{safe_filename(topic)}_{stamp}.md"
    final_path.write_text(final_text, encoding="utf-8")

    print("\nWorkflow completed.")
    print(f"Final reviewed report: {final_path.resolve()}")
    print("Intermediate outputs, when available, are saved in the output folder.")


if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\nExecution cancelled.")
    except Exception as exc:
        print(f"\nThe workflow stopped because of an error: {exc}")
        print(
            "Check the API key, account API access and billing, model name, "
            "internet connection, and installed package versions."
        )
        raise
