import re

# -------------------------------
# LIBRARY DATABASE
# -------------------------------

books = [
    {
        "id": 1,
        "title": "The Alchemist",
        "author": "Paulo Coelho",
        "genre": "Fiction",
        "available": True
    },
    {
        "id": 2,
        "title": "Atomic Habits",
        "author": "James Clear",
        "genre": "Self-help",
        "available": True
    },
    {
        "id": 3,
        "title": "The Silent Patient",
        "author": "Alex Michaelides",
        "genre": "Thriller",
        "available": False
    },
    {
        "id": 4,
        "title": "The Psychology of Money",
        "author": "Morgan Housel",
        "genre": "Finance",
        "available": True
    },
    {
        "id": 5,
        "title": "Man's Search for Meaning",
        "author": "Viktor E. Frankl",
        "genre": "Psychology",
        "available": True
    },
    {
        "id": 6,
        "title": "The Hunger Games",
        "author": "Suzanne Collins",
        "genre": "Science Fiction",
        "available": True
    },
    {
        "id": 7,
        "title": "The Fault in Our Stars",
        "author": "John Green",
        "genre": "Romance",
        "available": False
    },
    {
        "id": 8,
        "title": "Verity",
        "author": "Colleen Hoover",
        "genre": "Thriller",
        "available": True
    },
    {
        "id": 9,
        "title": "The Courage to Be Disliked",
        "author": "Ichiro Kishimi and Fumitake Koga",
        "genre": "Psychology",
        "available": True
    },
    {
        "id": 10,
        "title": "The God Equation",
        "author": "Michio Kaku",
        "genre": "Science",
        "available": True
    },
    {
        "id": 11,
        "title": "The Palace of Illusions",
        "author": "Chitra Banerjee Divakaruni",
        "genre": "Mythology",
        "available": False
    },
    {
        "id": 12,
        "title": "The Hunger Games: Catching Fire",
        "author": "Suzanne Collins",
        "genre": "Science Fiction",
        "available": True
    }
]


# -------------------------------
# HELPER FUNCTIONS
# -------------------------------

def show_all_books():
    print("\n📚 Books in our library:\n")

    for book in books:
        status = "Available" if book["available"] else "Borrowed"

        print(
            f'{book["id"]}. {book["title"]} - '
            f'{book["author"]} | {book["genre"]} | {status}'
        )


def search_book(book_name):
    book_name = book_name.lower()

    for book in books:
        if book_name in book["title"].lower():
            return book

    return None


def search_author(author_name):
    author_name = author_name.lower()

    results = []

    for book in books:
        if author_name in book["author"].lower():
            results.append(book)

    return results


def search_genre(genre):
    genre = genre.lower()

    results = []

    for book in books:
        if genre in book["genre"].lower():
            results.append(book)

    return results


def show_book(book):
    status = "Available ✅" if book["available"] else "Currently borrowed ❌"

    print("\n📖 Book Details")
    print("-------------------------")
    print("Title      :", book["title"])
    print("Author     :", book["author"])
    print("Genre      :", book["genre"])
    print("Availability:", status)


# -------------------------------
# CHATBOT
# -------------------------------

def chatbot(user_input):

    text = user_input.lower().strip()

    # Exit
    if text in ["exit", "quit", "bye"]:
        return "Goodbye! 📚 Have a great day!"

    # Greeting
    if any(word in text for word in ["hello", "hi", "hey"]):
        return (
            "Hello! 👋 I am your Library Assistant.\n"
            "You can ask me about books, authors, genres or availability."
        )

    # Show all books
    if (
        "all books" in text
        or "list books" in text
        or "show books" in text
        or "books do you have" in text
    ):
        show_all_books()
        return ""

    # Availability question
    if "available" in text:

        # Try to find a book mentioned in the question
        for book in books:

            if book["title"].lower() in text:

                if book["available"]:
                    return f'Yes! "{book["title"]}" is currently available. ✅'
                else:
                    return f'Sorry, "{book["title"]}" is currently borrowed. ❌'

        return "Please tell me the name of the book you are looking for."

    # Author search
    if "author" in text or "written by" in text:

        # Check if a book is mentioned
        for book in books:

            if book["title"].lower() in text:
                return (
                    f'"{book["title"]}" was written by '
                    f'{book["author"]}.'
                )

        return "Please mention the name of the book."

    # Genre search
    genres = [
        "fiction",
        "thriller",
        "romance",
        "psychology",
        "science",
        "finance",
        "mythology",
        "self-help",
        "science fiction"
    ]

    for genre in genres:

        if genre in text:

            results = search_genre(genre)

            if results:

                response = f"\n📚 {genre.title()} books:\n"

                for book in results:
                    status = "Available" if book["available"] else "Borrowed"

                    response += (
                        f'- {book["title"]} by {book["author"]} '
                        f'({status})\n'
                    )

                return response

    # Search for a specific book
    for book in books:

        if book["title"].lower() in text:

            show_book(book)
            return ""

    # Search using partial title
    words = text.split()

    for word in words:

        if len(word) > 3:

            for book in books:

                if word in book["title"].lower():

                    show_book(book)
                    return ""

    # Unknown question
    return (
        "I'm sorry, I didn't understand that. 🤔\n\n"
        "You can ask things like:\n"
        "• Do you have Atomic Habits?\n"
        "• Who wrote The Alchemist?\n"
        "• Show all books\n"
        "• Show me thriller books\n"
        "• Is Verity available?"
    )


# -------------------------------
# MAIN PROGRAM
# -------------------------------

print("===================================")
print("       📚 LIBRARY CHATBOT")
print("===================================")

print("\nHi! I’m your Library Assistant. Try asking: “Show all books”, “Find thriller books”, or “Is Atomic Habits available?")
print("Type 'exit' to close the chatbot.")

while True:

    user_input = input("\nYou: ")

    response = chatbot(user_input)

    if response:
        print("\nBot:", response)

    if user_input.lower().strip() in ["exit", "quit", "bye"]:
        break