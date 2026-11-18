from crewai import Task


def create_writing_task(agent: object, research_task: Task) -> Task:
    return Task(
        description=(
            "Write an academic report on {topic} for {audience}. "
            "Target length: approximately {word_count} words. Use the Researcher "
            "Agent's findings as your source material.\n\n"
            "Use these sections: Title; Abstract; 1. Introduction; "
            "2. Background and Key Concepts; 3. Major Approaches; "
            "4. Applications; 5. Benefits; 6. Challenges and Limitations; "
            "7. Future Research Directions; 8. Conclusion.\n\n"
            "Maintain a natural academic style and connect sections logically. "
            "Do not add unsupported numerical claims or fabricate references. "
            "Where evidence is missing, insert a clear note such as "
            "'Source verification required' rather than inventing a citation."
        ),
        expected_output=(
            "A complete academic report in Markdown with all requested sections."
        ),
        agent=agent,
        context=[research_task],
    )
