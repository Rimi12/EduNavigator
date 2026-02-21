# AI EduNavigator

AI EduNavigator is an interactive, premium e-learning MVP built to help beginners understand the fundamentals of Artificial Intelligence, Generative AI, Prompt Engineering, and Agentic Workflows.

### Technology Stack
- **Framework:** Next.js 15+ (App Router, Turbopack)
- **Styling:** Tailwind CSS 4 (Custom dark-mode-first aesthetic with vivid gradients)
- **UI & Animations:** Framer Motion, Lucide React Icons, Canvas Confetti
- **State Management:** Zustand (with LocalStorage persist for course progress)
- **Content Rendering:** React Markdown

### Project Structure & Architecture

1.  **`/data/`**: Highly structured static content.
    -   `courseData.ts` exports all modules.
    -   `modules/module-01.ts` to `module-10.ts` contain the curriculum in a structured JSON format (covering Titles, Descriptions, Pain points, "When to choose", Deep Dives, Interactive Elements, and Curriculums checklists).

2.  **`/lib/progressStore.ts`**: The core global state manager using Zustand.
    -   It manages the overall progress (`completedModules` and `completedCurriculumItems`).
    -   Uses `persist` middleware to save state across sessions.

3.  **`/app/` (Next.js App Router)**:
    -   `page.tsx`: The main dashboard featuring a stylized Hero section and the grid of `ModuleCard`s.
    -   `module/[id]/page.tsx`: Dynamic route for rendering a specific module. Contains the module header, checklist, Deep Dive markdown renderer, quizzes, and confetti completion animations.
    -   `layout.tsx`: Contains the `theme-provider` (next-themes), `TopBar`, and `Sidebar`.

4.  **`/components/`**: Modular, reusable UI building blocks.
    -   `TopBar.tsx` / `Sidebar.tsx`: Navigation and global progress tracking.
    -   `ModuleCard.tsx`: Dashboard module entry with dynamic completion states.
    -   `QuizWidget.tsx`: Interactive verification quizzes.
    -   `DeepDiveSection.tsx`: Formats the markdown instructional text.
    -   `CoffeeBreakCard.tsx`: Micro-learning callouts.

### Setting up locally
```bash
npm install
npm run dev
```

The application is fully localized in Hungarian.

## Verzióelőzmények

- **v1.0.0-mvp** (Phase 1): Alapstruktúra, statikus tananyagok feldolgozása, Zustand állapotkezelés, kvízek, konfetti és reszponzív, sötét-mód barát design elkészítése.
