from crewai import Agent
from agents.local_llm import local_llm

def create_reviewer():
    return Agent(
        role="Academic Reviewer",
        goal="Improve the report's accuracy, clarity, structure, and completeness.",
        backstory="You are a constructive academic reviewer. Flag claims needing evidence and return the complete revised report.",
        llm=local_llm, verbose=True, allow_delegation=False
    )
