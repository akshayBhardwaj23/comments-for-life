import { createContext, useContext, useEffect, useState } from "react";
import { mockUsers, mockPosts, type Post, type User } from "../data";

interface ContextType {
  user: User | null;
  signIn: (email: string, password: string) => User | null;
  signOut: () => void;
  signUp: (email: string, password: string, repeatPassword: string) => boolean;
  isAuthenticated: boolean;
  posts: Post[];
  addPost: (content: string) => void;
}

const AuthContext = createContext<ContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    const storedPosts = localStorage.getItem("posts");
    if (storedPosts) {
      const parsed = JSON.parse(storedPosts);
      const postsWithDates: Post[] = parsed.map((p: any) => ({
        ...p,
        timestamp: new Date(p.timestamp),
      }));
      setPosts(postsWithDates);
    } else {
      setPosts(mockPosts);
    }
  }, []);

  const signIn = (email: string, password: string) => {
    const foundUser: User | undefined = mockUsers.find(
      (user) => user.email === email && user.password === password
    );
    if (foundUser) {
      localStorage.setItem("user", JSON.stringify(foundUser));
      setUser(foundUser);
      return foundUser;
    }
    return null;
  };

  const signUp = (
    email: string,
    password: string,
    repeatPassword: string
  ): boolean => {
    if (password !== repeatPassword) {
      return false;
    }

    const existingUser = mockUsers.find((u) => u.email === email);
    if (existingUser) {
      return false;
    }

    const newUser: User = {
      id: Date.now().toString(),
      email,
      password,
      name: email.split("@")[0],
    };

    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
    return true;
  };

  const signOut = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  const addPost = (content: string) => {
    if (!user) return;
    const newPost: Post = {
      id: Date.now().toString(),
      author: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
      content,
      timestamp: new Date(),
      reactions: { likes: 0, comments: 0, shares: 0 },
    };
    const updated = [newPost, ...posts];
    setPosts(updated);
    localStorage.setItem("posts", JSON.stringify(updated));
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        signOut,
        signUp,
        isAuthenticated: !!user,
        posts,
        addPost,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default AuthContext;
