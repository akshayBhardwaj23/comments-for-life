import React from "react";
import CommentBox from "./CommentBox";
import CommentsFeed from "./CommentsFeed";
import { useAuth } from "../../Context/AuthContext";
interface CommentsSectionProps {
  onUnauthenticatedAction?: () => void;
}

const CommentsSection = ({ onUnauthenticatedAction }: CommentsSectionProps) => {
  const { isAuthenticated } = useAuth();
  const handleUnauth = () => {
    if (!isAuthenticated) onUnauthenticatedAction?.();
  };

  return (
    <div className="flex flex-col gap-4 items-center mt-20">
      <CommentBox onUnauthenticatedAction={handleUnauth} />
      <CommentsFeed onUnauthenticatedAction={handleUnauth} />
    </div>
  );
};

export default CommentsSection;
