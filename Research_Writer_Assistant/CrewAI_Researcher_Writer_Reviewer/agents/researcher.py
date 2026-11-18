import os
from crewai import Agent


def create_researcher() -> Agent:
    """Create the agent that prepares a structured research brief."""
    return Agent(
        role="Academic Researcher",
        goal=(
            "Analyze the supplied topic and prepare a structured research "
            "brief covering concepts, applications, challenges, and research gaps."
        ),
        backstory=(
            "You are an academic researcher who carefully distinguishes "
            "established knowledge from hypotheses and avoids inventing sources."
        ),
        llm=os.getenv("OPENAI_MODEL", "openai/gpt-4o-mini"),
        verbose=True,
        allow_delegation=False,
    )
