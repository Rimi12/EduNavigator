export interface CurriculumItem {
  id: string; // e.g. "4-1"
  text: string; // Learning goal text
  subcategory?: string; // Optional subcategory
  content?: string; // Markdown formatted lesson content in Hungarian
  videoUrl?: string; // YouTube or Vimeo embed URL
}

export interface SandboxLink {
  label: string; // Button text
  url: string; // Full URL
  type: 'colab' | 'github' | 'tool'; // Link type (for icon selection)
}

export interface QuizQuestion {
  question: string; // Question text
  options: string[]; // 4 optional answers (A, B, C, D)
  correct: number; // Correct answer index (0-3)
  explanation?: string; // Explanation (optional)
}

export interface Project {
  title: string; // Project title
  description: string; // Short description
  prompt?: string; // AI prompt (optional)
}

export interface Resource {
  title: string; // Resource title
  url: string; // Link
}

export interface Challenge {
  title: string;
  goal: string;
  constraints: string;
  successKudos: string;
}

export interface Module {
  id: number;
  title: string;
  icon: string; // Lucide icon name (e.g., "Sparkles", "Workflow")
  description: string;
  tags?: string[];
  painPoints: string[];
  curriculum: CurriculumItem[];
  whenToChoose: string[];
  projects: Project[];
  resources: Resource[];
  dayInSchedule: string; // e.g., "Nap 1"
  hasPromptTester?: boolean;

  // Interactive features (optional)
  microLearning?: string; // Coffee Break content
  deepDive?: string; // Markdown formatted Deep Dive
  sandboxLinks?: SandboxLink[]; // Sandbox tools
  interactiveElement?: QuizQuestion; // Quiz
  challenge?: Challenge; // Interactive AI Grader challenge
}
