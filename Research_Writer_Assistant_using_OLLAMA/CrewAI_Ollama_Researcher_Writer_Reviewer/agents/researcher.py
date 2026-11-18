from crewai import Agent
from agents.local_llm import local_llm

def create_researcher():
    return Agent(
        role="Academic Researcher",
        goal="Prepare accurate, structured background notes for the research topic.",
        backstory="You are a careful academic researcher. Separate established knowledge from assumptions. Never invent citations, statistics, or experimental results.",
        llm=local_llm, verbose=True, allow_delegation=False
    )
