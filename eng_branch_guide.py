# Engineering Branch Guidance Chatbot

print("Hello! 👋 Welcome to the Engineering Branch Guide.")
print("I will help you explore engineering branches based on your interests.\n")

name = input("What is your name? ")

print(f"\nNice to meet you, {name}!")

subjects = input(
    "Which subjects do you enjoy most? "
    "(Maths, Physics, Computer Science, Biology, Chemistry, Drawing, etc.): "
).lower()

interests = input(
    "What interests you most? "
    "(coding, electronics, machines, buildings, biology, design, etc.): "
).lower()

work_style = input(
    "What type of work do you prefer? "
    "(computer work, field work, research, creativity, building things, etc.): "
).lower()

all_answers = subjects + " " + interests + " " + work_style

recommendations = []

if any(word in all_answers for word in ["coding", "computer", "app", "game", "programming"]):
    recommendations.append(
        "Computer Science / IT — suitable if you enjoy coding, software, and problem-solving."
    )
    recommendations.append(
        "AI & Data Science — suitable if you like programming, maths, and intelligent technology."
    )

if any(word in all_answers for word in ["electronics", "circuit", "electrical"]):
    recommendations.append(
        "Electronics and Communication Engineering (ECE) — suitable for circuits, devices, and communication systems."
    )

if any(word in all_answers for word in ["machine", "vehicle", "repair", "mechanical"]):
    recommendations.append(
        "Mechanical Engineering — suitable for machines, vehicles, manufacturing, and design."
    )

if any(word in all_answers for word in ["building", "construction", "city", "field work", "civil"]):
    recommendations.append(
        "Civil Engineering — suitable for construction, roads, buildings, and infrastructure."
    )

if any(word in all_answers for word in ["biology", "medicine", "environment", "living"]):
    recommendations.append(
        "Biotechnology — suitable if you enjoy biology, healthcare, agriculture, or research."
    )

if any(word in all_answers for word in ["chemistry", "chemical"]):
    recommendations.append(
        "Chemical Engineering — suitable for chemistry, industrial processes, and materials."
    )

if any(word in all_answers for word in ["drawing", "design", "creative", "product"]):
    recommendations.append(
        "Design Engineering / Industrial Design — suitable if you enjoy creativity and designing products."
    )

if not recommendations:
    recommendations = [
        "Computer Science / IT — a flexible option for students who enjoy technology.",
        "Mechanical Engineering — a broad branch involving machines and product design.",
        "Civil Engineering — a practical branch focused on infrastructure and construction."
    ]

print(f"\n{name}, based on your answers, you can explore:\n")

for number, branch in enumerate(recommendations[:3], start=1):
    print(f"{number}. {branch}")

print("\nRemember: choose a branch based on your interests and strengths, not only popularity.")