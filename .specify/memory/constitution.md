<!--
---
Sync Impact Report
---
Version change: 0.0.0 → 1.0.0
Modified principles:
- [PRINCIPLE_1_NAME] → I. Beginner-Centric Pedagogy
- [PRINCIPLE_2_NAME] → II. Project-Driven Learning
- [PRINCIPLE_3_NAME] → III. Comprehensive Toolchain Mastery
- [PRINCIPLE_4_NAME] → IV. Integrated VLA Systems
- [PRINCIPLE_5_NAME] → V. Modular and Extensible Design
- [PRINCIPLE_6_NAME] → VI. Capstone-Oriented Structure
Added sections:
- Development Workflow
- Quality Gates
Removed sections: None
Templates requiring updates:
- ✅ .specify/templates/plan-template.md
- ✅ .specify/templates/spec-template.md
- ✅ .specify/templates/tasks-template.md
Follow-up TODOs: None
-->
# Physical AI & Humanoid Robotics Constitution

This document outlines the core principles governing the development and content of the *Physical AI & Humanoid Robotics* technical textbook. Its purpose is to ensure the project remains focused on its mission and maintains a high standard of quality and consistency.

## Core Principles

### I. Beginner-Centric Pedagogy
All content MUST be accessible to beginners and intermediate learners. Every chapter must maintain a clear, friendly, and step-by-step tone, incorporating practical examples, diagrams, code snippets, and hands-on exercises to reinforce concepts. The primary goal is to lower the barrier to entry for humanoid robotics.

### II. Project-Driven Learning
Learning is achieved through doing. Each chapter MUST be structured around practical, project-based outcomes. Theoretical concepts shall be introduced only in service of a tangible goal, ensuring that readers are constantly building and applying their knowledge.

### III. Comprehensive Toolchain Mastery
The curriculum MUST provide robust, hands-on coverage of the entire specified robotics stack. This includes ROS 2, Gazebo, Unity, NVIDIA Isaac Sim, Isaac ROS for perception/navigation, and language models like Whisper and GPT for planning. The goal is to equip learners with proficiency in modern, industry-standard tools.

### IV. Integrated VLA Systems
The project's technical architecture MUST be designed to support the creation of integrated Vision-Language-Action (VLA) systems. This principle mandates that perception (vision), reasoning (language), and execution (action) are not treated as isolated modules but as a cohesive whole.

### V. Modular and Extensible Design
The project codebase MUST be architected for modularity and extensibility. This is a non-negotiable requirement to support future integrations, including a RAG chatbot (using OpenAI Agents, Qdrant, Neon), Urdu language translation features, and the development of reusable Claude Code subagents and agent skills.

### VI. Capstone-Oriented Structure
Every chapter, tutorial, and project MUST directly contribute to the final capstone project: guiding a student to build and program an autonomous humanoid robot capable of voice-command planning, navigation, perception, and manipulation. All preceding content serves this ultimate goal.

## Development Workflow

The project follows a Test-First approach for all code development. TDD is mandatory: tests are written first, they are confirmed to fail, and only then is the implementation code written to make the tests pass (Red-Green-Refactor). This ensures that all functionality is verifiable and robust from the start.

## Quality Gates

All contributions, including text, code, and diagrams, will be reviewed for compliance with the principles outlined in this constitution. No pull request will be merged if it violates a core principle. The review process must verify clarity, technical accuracy, and adherence to the pedagogical and architectural standards defined herein.

## Governance

This Constitution is the authoritative source of truth for the project's standards and practices; it supersedes all other guidelines. Amendments to this document require a formal proposal, review, and an explicit plan to migrate any existing content or code that may be affected. All project participants are expected to uphold these principles in their work.

**Version**: 1.0.0 | **Ratified**: 2025-12-09 | **Last Amended**: 2025-12-09