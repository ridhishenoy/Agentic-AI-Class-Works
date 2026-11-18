from crewai import Crew, Process
from agents.researcher import create_researcher
from agents.writer import create_writer
from agents.reviewer import create_reviewer
from tasks.research_task import create_research_task
from tasks.writing_task import create_writing_task
from tasks.review_task import create_review_task

def build_crew(topic, audience, word_count):
    researcher, writer, reviewer = create_researcher(), create_writer(), create_reviewer()
    research = create_research_task(researcher, topic, audience)
    writing = create_writing_task(writer, research, topic, audience, word_count)
    review = create_review_task(reviewer, writing)
    return Crew(agents=[researcher, writer, reviewer],
                tasks=[research, writing, review],
                process=Process.sequential, verbose=True)
