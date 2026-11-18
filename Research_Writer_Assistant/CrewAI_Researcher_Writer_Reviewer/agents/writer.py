import os
from crewai import Agent


def create_writer() -> Agent:
    """Create the agent that turns research findings into an academic report."""
    return Agent(
        role="Academic Research Writer",
        goal=(
            "Write a coherent, well-organized academic report using the "
            "research brief supplied by the Researcher Agent."
        ),
        backstory=(
            "You are an experienced academic writer. You value clear explanations, "
            "logical flow, technical accuracy, and transparent treatment of evidence."
        ),
        llm=os.getenv("OPENAI_MODEL", "openai/gpt-4o-mini"),
        verbose=True,
        allow_delegation=False,
    )
