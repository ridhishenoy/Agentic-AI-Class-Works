# ==============================================================================
# Enhanced Engineering Branch Guidance System (CLI & Web Integrated)
# ==============================================================================

import os
import sys

def main():
    print("=" * 65)
    print("       🎓 ENGINEERING BRANCH GUIDANCE SYSTEM (2026 EDITION)       ")
    print("=" * 65)
    print("Welcome! I will help you discover the ideal engineering stream")
    print("aligned with your natural interests, favorite subjects, and career goals.\n")
    print("💡 Note: A rich web interface is also available in this folder (index.html)!\n")

    name = input("What is your name? ").strip()
    if not name:
        name = "Future Engineer"

    print(f"\nNice to meet you, {name}!")

    print("\n--- Step 1: Academic Strengths ---")
    subjects = input(
        "Which subjects do you enjoy most?\n"
        "(Maths, Physics, Computer Science, Biology, Chemistry, Drawing/Design, Space, etc.): "
    ).lower()

    print("\n--- Step 2: Passions & Curiosity ---")
    interests = input(
        "What excites you most when building or solving?\n"
        "(coding, AI, microchips, machines, cars, robotics, buildings, genetics, clean energy, space): "
    ).lower()

    print("\n--- Step 3: Work Style Preference ---")
    work_style = input(
        "What type of daily work environment do you prefer?\n"
        "(desk/remote computer work, R&D lab, workshop/factory, field/construction): "
    ).lower()

    all_answers = f"{subjects} {interests} {work_style}"

    # Evaluated branch recommendations with detailed profiles
    scored_branches = []

    # 1. Computer Science & Engineering
    if any(word in all_answers for word in ["coding", "computer", "app", "web", "software", "programming", "cs"]):
        scored_branches.append((
            "Computer Science & Engineering (CSE)",
            "High",
            "Software architecture, full-stack development, algorithms, cloud systems.",
            "₹9 - 25+ LPA ($85k - $140k)",
            "Google, Microsoft, Amazon, Meta"
        ))

    # 2. AI & Data Science
    if any(word in all_answers for word in ["ai", "data", "machine learning", "intelligent", "maths", "math"]):
        scored_branches.append((
            "Artificial Intelligence & Data Science",
            "High",
            "Machine learning algorithms, neural networks, predictive big data models.",
            "₹10 - 28+ LPA ($95k - $155k)",
            "NVIDIA, OpenAI, Google DeepMind, Palantir"
        ))

    # 3. Cybersecurity & Cloud
    if any(word in all_answers for word in ["security", "cyber", "hacking", "network", "cloud"]):
        scored_branches.append((
            "Cybersecurity & Cloud Defense",
            "High",
            "Ethical hacking, cryptography, infrastructure defense, secure systems.",
            "₹9 - 26+ LPA ($90k - $145k)",
            "CrowdStrike, Palo Alto Networks, Cisco, Cloudflare"
        ))

    # 4. Electronics & Communication (ECE)
    if any(word in all_answers for word in ["electronics", "circuit", "chip", "semiconductor", "microcontroller", "hardware"]):
        scored_branches.append((
            "Electronics & Communication Engineering (ECE)",
            "High",
            "VLSI semiconductor design, embedded microcontrollers, 5G/6G wireless networks.",
            "₹8 - 22+ LPA ($80k - $130k)",
            "Intel, Qualcomm, Texas Instruments, Apple"
        ))

    # 5. Robotics & Automation
    if any(word in all_answers for word in ["robot", "robotics", "automation", "sensor"]):
        scored_branches.append((
            "Robotics & Automation Engineering",
            "High",
            "Actuators, computer vision, kinematic control systems, autonomous agents.",
            "₹8.5 - 24+ LPA ($90k - $140k)",
            "Boston Dynamics, Tesla Autopilot, ABB, FANUC"
        ))

    # 6. Mechanical Engineering
    if any(word in all_answers for word in ["machine", "vehicle", "engine", "car", "repair", "mechanical", "factory", "workshop"]):
        scored_branches.append((
            "Mechanical & Mechatronics Engineering",
            "Moderate to High",
            "Thermodynamics, automotive powertrains, CAD/FEA simulation, materials.",
            "₹6 - 16+ LPA ($70k - $110k)",
            "Tesla, Tata Motors, Boeing, General Electric, Bosch"
        ))

    # 7. Aerospace Engineering
    if any(word in all_answers for word in ["space", "rocket", "plane", "aerospace", "aviation", "satellite", "flight"]):
        scored_branches.append((
            "Aerospace & Aeronautical Engineering",
            "High (Specialized)",
            "Supersonic aerodynamics, rocket propulsion, orbital flight mechanics.",
            "₹7 - 20+ LPA ($85k - $135k)",
            "ISRO, SpaceX, Boeing, Airbus, NASA"
        ))

    # 8. Civil & Infrastructure Engineering
    if any(word in all_answers for word in ["building", "construction", "bridge", "city", "field", "civil", "structure"]):
        scored_branches.append((
            "Civil & Environmental Engineering",
            "Stable Core",
            "Smart cities, structural mechanics, green architecture, mega-infrastructure.",
            "₹5.5 - 14+ LPA ($65k - $105k)",
            "L&T Construction, AECOM, Bechtel, Tata Projects"
        ))

    # 9. Biotechnology & Biomedical
    if any(word in all_answers for word in ["biology", "medicine", "health", "biotech", "genetics", "medical"]):
        scored_branches.append((
            "Biotechnology & Biomedical Engineering",
            "High Research",
            "Genomics, bioprocessing, medical diagnostic sensors, prosthetics.",
            "₹6 - 18+ LPA ($75k - $120k)",
            "Biocon, Pfizer, Medtronic, Illumina"
        ))

    # 10. Chemical Engineering
    if any(word in all_answers for word in ["chemistry", "chemical", "battery", "energy", "pharma"]):
        scored_branches.append((
            "Chemical & Sustainable Materials Engineering",
            "Stable Core",
            "Industrial chemical synthesis, EV battery materials, clean fuels, polymers.",
            "₹6.5 - 17+ LPA ($72k - $115k)",
            "Dow Chemical, Reliance Industries, Shell, BASF"
        ))

    # 11. Design & Industrial Engineering
    if any(word in all_answers for word in ["drawing", "design", "creative", "product", "art", "aesthetic"]):
        scored_branches.append((
            "Industrial Design & Product Engineering",
            "Creative Tech",
            "Ergonomics, aesthetic 3D CAD modeling, consumer gadget design.",
            "₹6.5 - 18+ LPA ($75k - $125k)",
            "Apple, Dyson, Logitech, Philips Design"
        ))

    # Fallbacks if no matches found
    if not scored_branches:
        scored_branches = [
            ("Computer Science & Engineering (CSE)", "High", "Versatile software engineering and technical problem solving.", "₹9 - 25+ LPA", "Google, Amazon, Microsoft"),
            ("Mechanical Engineering", "Stable Core", "Broad foundational engineering across machinery, energy, and robotics.", "₹6 - 16+ LPA", "Bosch, Tata Motors, GE"),
            ("Electronics & Communication (ECE)", "High", "Bridge between computer software and semiconductor hardware.", "₹8 - 22+ LPA", "Intel, Qualcomm, Apple")
        ]

    print("\n" + "=" * 65)
    print(f"✨ {name.upper()}'S TOP RECOMMENDED ENGINEERING DISCIPLINES ✨")
    print("=" * 65)

    for rank, (branch_name, demand, focus, salary, recruiters) in enumerate(scored_branches[:3], start=1):
        print(f"\n#{rank}. {branch_name}")
        print(f"   • Industry Outlook : {demand}")
        print(f"   • Core Focus       : {focus}")
        print(f"   • Avg Starting Pay : {salary}")
        print(f"   • Key Recruiters   : {recruiters}")

    print("\n" + "-" * 65)
    print("📌 Counselor Note: Choose your branch based on your intrinsic curiosity")
    print("   and strengths, not just temporary herd trends.")
    print("🌐 Open 'index.html' in your browser for the full interactive visual suite,")
    print("   AI Counselor Chat, and Side-by-Side Branch Comparator!")
    print("=" * 65 + "\n")

if __name__ == "__main__":
    main()
