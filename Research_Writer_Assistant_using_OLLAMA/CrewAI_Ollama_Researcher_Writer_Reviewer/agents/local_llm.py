"""Shared local Ollama model for all CrewAI agents."""
import os
from dotenv import load_dotenv
from crewai import LLM

load_dotenv()
local_llm = LLM(
    model=os.getenv("OLLAMA_MODEL", "llama3.2"),
    base_url=os.getenv("OLLAMA_BASE_URL", "http://localhost:11434/v1"),
    api_key=os.getenv("OLLAMA_API_KEY", "ollama"),
    custom_openai=True,
    temperature=0.2,
)
