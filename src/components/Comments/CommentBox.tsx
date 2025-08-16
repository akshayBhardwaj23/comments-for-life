import { useState } from "react";
import { useAuth } from "../../Context/AuthContext";

interface CommentBoxProps {
  onUnauthenticatedAction?: () => void;
}

const CommentBox = ({ onUnauthenticatedAction }: CommentBoxProps) => {
  const [comment, setComment] = useState<string>("");
  const { user, addPost } = useAuth();
  const showNotImplemented = () => alert("Function not implemented");
  const requireAuth = (): boolean => {
    if (!user) {
      onUnauthenticatedAction?.();
      return false;
    }
    return true;
  };

  const canPost = Boolean(user);

  const handleSend = () => {
    if (comment.trim()) {
      addPost(comment.trim());
      setComment("");
    }
  };

  return (
    <div className="w-[554px] border-gray-200 border-4 shadow-lg rounded-xl p-4">
      <div className="flex justify-between">
        <div className="flex gap-2 p-2 bg-[#00000008] rounded-xl">
          <select
            name="text-type"
            id="text-type"
            className="rounded-md focus:outline-none h-8 hover:shadow-lg transition-all duration-300"
            onChange={() => {
              if (!requireAuth()) return;
              showNotImplemented();
            }}
          >
            <option value="paragraph">Paragraph</option>
            <option value="heading1">Heading 1</option>
            <option value="heading2">Heading 2</option>
            <option value="heading3">Heading 3</option>
            <option value="heading4">Heading 4</option>
          </select>
          <button
            className="hover:bg-gray-200 rounded-md p-1 hover:translate-y-[-3px] transition-all duration-300"
            onClick={() => {
              if (!requireAuth()) return;
              showNotImplemented();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-5 w-5"
            >
              <text
                x="6"
                y="16"
                fontSize="14"
                fontWeight="700"
                fill="currentColor"
              >
                B
              </text>
            </svg>
          </button>
          <button
            className="hover:bg-gray-200 rounded-md p-1 hover:translate-y-[-3px] transition-all duration-300"
            onClick={() => {
              if (!requireAuth()) return;
              showNotImplemented();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-5 w-5"
            >
              <text
                x="9"
                y="16"
                fontSize="14"
                fontStyle="italic"
                fill="currentColor"
              >
                I
              </text>
            </svg>
          </button>
          <button
            className="hover:bg-gray-200 rounded-md p-1 hover:translate-y-[-3px] transition-all duration-300"
            onClick={() => {
              if (!requireAuth()) return;
              showNotImplemented();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-5 w-5"
            >
              <text x="6" y="14" fontSize="14" fill="currentColor">
                U
              </text>
              <line
                x1="4"
                y1="18"
                x2="20"
                y2="18"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </button>
          <div className="w-px h-full bg-gray-300 mx-2"></div>
          <button
            className="hover:bg-gray-200 rounded-md p-1 hover:translate-y-[-3px] transition-all duration-300"
            onClick={() => {
              if (!requireAuth()) return;
              showNotImplemented();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-5 w-5"
            >
              <circle cx="6" cy="7" r="1.5" fill="currentColor" />
              <line
                x1="10"
                y1="7"
                x2="20"
                y2="7"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <circle cx="6" cy="12" r="1.5" fill="currentColor" />
              <line
                x1="10"
                y1="12"
                x2="20"
                y2="12"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <circle cx="6" cy="17" r="1.5" fill="currentColor" />
              <line
                x1="10"
                y1="17"
                x2="20"
                y2="17"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </button>
          <button
            className="hover:bg-gray-200 rounded-md p-1 hover:translate-y-[-3px] transition-all duration-300"
            onClick={() => {
              if (!requireAuth()) return;
              showNotImplemented();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-5 w-5"
            >
              <text x="4" y="8" fontSize="8" fill="currentColor">
                1.
              </text>
              <line
                x1="10"
                y1="7"
                x2="20"
                y2="7"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <text x="4" y="13" fontSize="8" fill="currentColor">
                2.
              </text>
              <line
                x1="10"
                y1="12"
                x2="20"
                y2="12"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <text x="4" y="18" fontSize="8" fill="currentColor">
                3.
              </text>
              <line
                x1="10"
                y1="17"
                x2="20"
                y2="17"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </button>
          <div className="w-px h-full bg-gray-300 mx-2"></div>
          <button
            className="hover:bg-gray-200 rounded-md p-1 hover:translate-y-[-3px] transition-all duration-300"
            onClick={() => {
              if (!requireAuth()) return;
              showNotImplemented();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
              />
            </svg>
          </button>
        </div>
        <div className="flex p-2 bg-red-200 rounded-xl">
          <button
            className="hover:translate-y-[-3px] transition-all duration-300"
            onClick={() => {
              if (!requireAuth()) return;
              showNotImplemented();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-5 w-5"
            >
              <rect
                x="7"
                y="8"
                width="10"
                height="10"
                rx="1.5"
                stroke="currentColor"
                fill="none"
                strokeWidth="1.5"
              />
              <line
                x1="4"
                y1="8"
                x2="20"
                y2="8"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <rect
                x="9"
                y="4"
                width="6"
                height="3"
                rx="1"
                stroke="currentColor"
                fill="none"
                strokeWidth="1.5"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex mt-4">
        <div className="px-2">🙂</div>
        <div className="flex-1">
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            onFocus={() => {
              if (!canPost) onUnauthenticatedAction?.();
            }}
            placeholder="How are you feeling today?"
            className="w-full resize-none text-gray-700 placeholder:text-gray-400 focus:outline-none"
            rows={4}
          />
        </div>
      </div>
      <div className="flex justify-between border-t-2">
        <div className="flex gap-2 p-2  rounded-xl">
          <button
            className="hover:bg-gray-200 rounded-md p-1 hover:translate-y-[-3px] transition-all duration-300"
            onClick={() => {
              if (!requireAuth()) return;
              showNotImplemented();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-5 w-5"
            >
              <line
                x1="12"
                y1="5"
                x2="12"
                y2="19"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <line
                x1="5"
                y1="12"
                x2="19"
                y2="12"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </button>
          <button
            className="hover:bg-gray-200 rounded-md p-1 hover:translate-y-[-3px] transition-all duration-300"
            onClick={() => {
              if (!requireAuth()) return;
              showNotImplemented();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-5 w-5"
            >
              <rect
                x="10"
                y="6"
                width="4"
                height="8"
                rx="2"
                stroke="currentColor"
                fill="none"
                strokeWidth="1.5"
              />
              <path
                d="M7 12a5 5 0 0010 0"
                stroke="currentColor"
                fill="none"
                strokeWidth="1.5"
              />
              <line
                x1="12"
                y1="17"
                x2="12"
                y2="20"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </button>
          <button
            className="hover:bg-gray-200 rounded-md p-1 hover:translate-y-[-3px] transition-all duration-300"
            onClick={() => {
              if (!requireAuth()) return;
              showNotImplemented();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-5 w-5"
            >
              <rect
                x="4"
                y="7"
                width="12"
                height="10"
                rx="2"
                stroke="currentColor"
                fill="none"
                strokeWidth="1.5"
              />
              <polygon points="18,9 22,11 22,13 18,15" fill="currentColor" />
            </svg>
          </button>
        </div>
        <div className="flex p-2 text-cyan-500 rounded-xl hover:translate-y-[-3px] transition-all duration-300 hover:text-cyan-900">
          <button
            onClick={() => {
              if (!requireAuth()) return;
              handleSend();
            }}
            disabled={!canPost}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommentBox;
