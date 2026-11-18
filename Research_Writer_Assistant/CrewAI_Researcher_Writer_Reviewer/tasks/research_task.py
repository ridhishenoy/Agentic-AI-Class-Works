from crewai import Task


def create_research_task(agent: object) -> Task:
    return Task(
        description=(
            "Prepare a research brief on the topic: {topic}. "
            "Target audience: {audience}.\n\n"
            "Cover: (1) topic overview and motivation; (2) key terms and concepts; "
            "(3) major approaches and methods; (4) applications; "
            "(5) benefits; (6) challenges and limitations; "
            "(7) current directions; and (8) plausible research gaps.\n\n"
            "Separate established knowledge from reasoned suggestions. "
            "Do not invent paper titles, authors, publication venues, DOIs, "
            "datasets, numerical results, or citations. This project does not "
            "perform live scholarly database retrieval. Explicitly flag claims "
            "and references that require independent verification."
        ),
        expected_output=(
            "A structured research brief with the requested sections, concise "
            "explanations, and a short list of evidence-verification needs."
        ),
        agent=agent,
    )
