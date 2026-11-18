from pathlib import Path
from datetime import datetime
from dotenv import load_dotenv
from crew import build_crew

BASE_DIR = Path(__file__).resolve().parent
load_dotenv(BASE_DIR / ".env")

def main():
    print("\\n=== CrewAI Researcher–Writer–Reviewer (Ollama local) ===")
    topic = input("Research topic [Explainable AI methods for clinical decision support]: ").strip()
    topic = topic or "Explainable AI methods for clinical decision support"
    audience = input("Target audience [Undergraduate Students]: ").strip() or "Undergraduate Students"
    raw = input("Target word count [1000]: ").strip()
    try:
        word_count = int(raw) if raw else 1000
        if word_count < 100: raise ValueError
    except ValueError:
        print("Enter a whole number of at least 100."); return
    result = build_crew(topic, audience, word_count).kickoff()
    out = BASE_DIR / "output"
    out.mkdir(exist_ok=True)
    path = out / f"research_report_{datetime.now():%Y%m%d_%H%M%S}.md"
    path.write_text(str(result), encoding="utf-8")
    print(f"\\nRevised report saved to: {path}")

if __name__ == "__main__":
    main()
