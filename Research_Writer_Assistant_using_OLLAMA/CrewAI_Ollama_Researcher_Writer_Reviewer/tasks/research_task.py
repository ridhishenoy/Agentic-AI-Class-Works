from crewai import Task

def create_research_task(agent, topic, audience):
    return Task(
        description=f"Prepare structured research notes on: {topic}. Audience: {audience}. Cover overview, concepts, methods, relevance, benefits, limitations, ethics, and open questions. Separate facts from suggestions. Do not invent sources or numerical results.",
        expected_output="Structured research brief with headings and claims requiring external verification.",
        agent=agent
    )
