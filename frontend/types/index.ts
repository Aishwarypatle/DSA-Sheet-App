export interface Problem {
  _id: string;
  title: string;
  topic: string;
  difficulty: "easy" | "medium" | "hard";
  youtubeLink: string;
  leetcodeLink: string;
  articleLink: string;
}

export interface User {
  token: string;
  streak?: number;
  lastActiveDate?: string;
}

export interface Progress {
  problemId: string;
}