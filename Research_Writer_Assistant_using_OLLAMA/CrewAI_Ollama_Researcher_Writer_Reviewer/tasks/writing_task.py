from crewai import Task

def create_writing_task(agent, research_task, topic, audience, word_count):
    return Task(
        description=f"Write an academic report on {topic} for {audience}, approximately {word_count} words. Use the research notes as the factual basis. Include title, introduction, sections, discussion, limitations, conclusion, and keywords. Do not fabricate citations; use [source needed] where evidence is missing.",
        expected_output="Coherent academic report in Markdown.",
        agent=agent, context=[research_task]
    )
