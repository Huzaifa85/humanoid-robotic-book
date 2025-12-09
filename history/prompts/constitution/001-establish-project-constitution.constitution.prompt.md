---
id: 001
title: Establish Project Constitution for Humanoid Robotics Book
stage: constitution
date: 2025-12-09
surface: agent
model: gemini
feature: none
branch: master
user: Marhaba
command: /sp.constitution This book, titled *Physical AI & Humanoid Robotics*, will serve as an AI-native technical textbook designed for beginners to intermediate learners. The mission of the book is to teach embodied intelligence through practical, project-driven chapters covering: Foundations of Physical AI, ROS 2 fundamentals (nodes, topics, services, URDF), Gazebo & Unity digital twin simulation, NVIDIA Isaac Sim and Isaac ROS for perception and navigation, and Vision-Language-Action systems including Whisper and GPT-based planning. The book should maintain a clear, friendly, step-by-step tone with examples, diagrams, code snippets, and exercises in every chapter. A final capstone will guide students to build an autonomous humanoid robot capable of voice-command planning, navigation, perception, and manipulation. The project must support integration of a RAG chatbot (OpenAI Agents, Qdrant, Neon) and allow room for personalization, Urdu translation features, and reusable Claude Code subagents and agent skills.
labels: ["constitution", "project-setup"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - .specify/memory/constitution.md
 - .specify/templates/plan-template.md
 - .specify/templates/tasks-template.md
tests:
 - none
---

## Prompt

/sp.constitution This book, titled *Physical AI & Humanoid Robotics*, will serve as an AI-native technical textbook designed for beginners to intermediate learners. The mission of the book is to teach embodied intelligence through practical, project-driven chapters covering: Foundations of Physical AI, ROS 2 fundamentals (nodes, topics, services, URDF), Gazebo & Unity digital twin simulation, NVIDIA Isaac Sim and Isaac ROS for perception and navigation, and Vision-Language-Action systems including Whisper and GPT-based planning. The book should maintain a clear, friendly, step-by-step tone with examples, diagrams, code snippets, and exercises in every chapter. A final capstone will guide students to build an autonomous humanoid robot capable of voice-command planning, navigation, perception, and manipulation. The project must support integration of a RAG chatbot (OpenAI Agents, Qdrant, Neon) and allow room for personalization, Urdu translation features, and reusable Claude Code subagents and agent skills.

## Response snapshot

The constitution has been created at `.specify/memory/constitution.md` (Version 1.0.0).

## Outcome

- ✅ Impact: Established the foundational principles for the project, ensuring alignment on goals and development practices. Propagated these principles to key project templates.
- 🧪 Tests: No tests were run.
- 📁 Files: Created the constitution and updated two templates to reflect the new principles.
- 🔁 Next prompts: User may proceed with creating a feature specification (`/sp.specify`) or planning (`/sp.plan`).
- 🧠 Reflection: The process of deriving principles from the user's mission statement and propagating them to templates was successful. The templating system ensures consistency.

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): null
- Next experiment (if applicable): none
