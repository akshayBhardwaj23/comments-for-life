import Comment from "./Comment";
import { useAuth } from "../../Context/AuthContext";

interface CommentsFeedProps {
  onUnauthenticatedAction?: () => void;
}

const CommentsFeed = ({ onUnauthenticatedAction }: CommentsFeedProps) => {
  const { posts } = useAuth();
  return (
    <div>
      {posts.map((post) => (
        <Comment
          key={post.id}
          {...post}
          onUnauthenticatedAction={onUnauthenticatedAction}
        />
      ))}
    </div>
  );
};

export default CommentsFeed;
