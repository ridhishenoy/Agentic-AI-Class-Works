from crewai import Crew, Process

from agents.researcher import create_researcher
from agents.writer import create_writer
from agents.reviewer import create_reviewer
from tasks.research_task import create_research_task
from tasks.writing_task import create_writing_task
from tasks.review_task import create_review_task


def create_research_crew() -> Crew:
    researcher = create_researcher()
    writer = create_writer()
    reviewer = create_reviewer()

    research_task = create_research_task(researcher)
    writing_task = create_writing_task(writer, research_task)
    review_task = create_review_task(reviewer, writing_task)

    return Crew(
        agents=[researcher, writer, reviewer],
        tasks=[research_task, writing_task, review_task],
        process=Process.sequential,
        verbose=True,
    )
