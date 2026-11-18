import os
from crewai import Agent


def create_reviewer() -> Agent:
    """Create the agent that reviews and revises the academic report."""
    return Agent(
        role="Academic Research Reviewer",
        goal=(
            "Critically review the draft and return a complete improved report "
            "with weaknesses corrected and verification needs clearly flagged."
        ),
        backstory=(
            "You are a careful academic reviewer assessing relevance, clarity, "
            "technical consistency, completeness, and responsible use of evidence."
        ),
        llm=os.getenv("OPENAI_MODEL", "openai/gpt-4o-mini"),
        verbose=True,
        allow_delegation=False,
    )
