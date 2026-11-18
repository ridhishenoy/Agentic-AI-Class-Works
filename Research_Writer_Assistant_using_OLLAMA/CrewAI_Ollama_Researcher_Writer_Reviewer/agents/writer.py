from crewai import Agent
from agents.local_llm import local_llm

def create_writer():
    return Agent(
        role="Academic Writer",
        goal="Write a clear, coherent academic report from the research notes.",
        backstory="You write natural academic English for student project reports. Avoid unsupported claims and fabricated references.",
        llm=local_llm, verbose=True, allow_delegation=False
    )
