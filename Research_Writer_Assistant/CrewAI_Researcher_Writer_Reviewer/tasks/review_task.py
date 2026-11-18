from crewai import Task


def create_review_task(agent: object, writing_task: Task) -> Task:
    return Task(
        description=(
            "Review the draft report about {topic}. Assess: relevance to topic; "
            "technical consistency; clarity; logical organization; completeness; "
            "academic tone; unsupported claims; and citation integrity.\n\n"
            "Correct weaknesses and return the COMPLETE revised report, not only "
            "review comments. Do not create fictional references, DOIs, author "
            "names, or results. Preserve verification notes for evidence that "
            "cannot be checked from the supplied material. Finish with a short "
            "'Reviewer notes' section listing remaining items for human checking."
        ),
        expected_output=(
            "The complete revised report in Markdown, followed by concise "
            "reviewer notes and evidence-verification items."
        ),
        agent=agent,
        context=[writing_task],
    )
