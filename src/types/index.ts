export interface User {
  id: string;
  username: string;
  email: string;
  password: string;
}

export interface UserState {
  id: string;
  username: string;
  email: string;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  authorId: string;
  authorName: string;
  createdAt: string;
  comments: Comment[];
}

export interface Comment {
  id: string;
  content: string;
  authorId: string;
  authorName: string;
  createdAt: string;
}

export interface AuthState {
  user: UserState | null;
  isAuthenticated: boolean;
} 