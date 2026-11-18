from crewai import Task

def create_review_task(agent, writing_task):
    return Task(
        description="Review and improve the draft's grammar, flow, structure, terminology, and readability. Check claims against the research notes. Remove fabricated references and retain [source needed] markers. Return the complete revised report plus a brief reviewer checklist.",
        expected_output="Complete revised academic report in Markdown followed by a short reviewer checklist.",
        agent=agent, context=[writing_task]
    )
