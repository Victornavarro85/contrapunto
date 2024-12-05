export interface Source {
  id: string;
  title: string;
  authors?: string;
  year?: string;
  url?: string;
  description: string;
}

export interface Argument {
  id: string;
  content: string;
  votes: number;
  comments: Comment[];
  sources: Source[];
}

export interface Comment {
  id: string;
  content: string;
  author: string;
  timestamp: Date;
}

export interface Debate {
  id: string;
  title: string;
  description: string;
  proArguments: Argument[];
  conArguments: Argument[];
}