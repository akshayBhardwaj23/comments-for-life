export interface Post {
  id: string;
  author: Author;
  content: string;
  timestamp: Date;
  reactions: Reactions;
}

interface Author {
  id: string;
  email: string;
  name: string;
}

interface Reactions {
  likes: number;
  comments: number;
  shares: number;
}

export const mockUsers: User[] = [
  {
    id: "1",
    email: "demo@example.com",
    password: "password123",
    name: "Demo User",
  },
  { id: "2", email: "test@user.com", password: "testpass", name: "Test User" },
];

export interface User {
  id: string;
  email: string;
  password: string;
  name: string;
}

export const mockPosts: Post[] = [
  {
    id: "1",
    author: { id: "1", email: "demo@example.com", name: "Theresa Webb" },
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    timestamp: new Date("2024-01-15T10:30:00"),
    reactions: { likes: 12, comments: 2, shares: 5 },
  },
  {
    id: "2",
    author: { id: "2", email: "test@user.com", name: "John Doe" },
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    timestamp: new Date("2024-01-15T09:15:00"),
    reactions: { likes: 8, comments: 1, shares: 3 },
  },
  {
    id: "3",
    author: { id: "1", email: "demo@example.com", name: "Jane Doe" },
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    timestamp: new Date("2024-01-15T08:45:00"),
    reactions: { likes: 15, comments: 0, shares: 7 },
  },
];
