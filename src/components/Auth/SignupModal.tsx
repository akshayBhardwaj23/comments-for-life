import { useState } from "react";
import { useAuth } from "../../Context/AuthContext";

interface SignupModalProps {
  onSuccess?: () => void;
  onSwitchToSignin?: () => void;
}

const SignupModal = ({ onSuccess, onSwitchToSignin }: SignupModalProps) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repeatpassword, setRepeatpassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { signUp } = useAuth();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (password !== repeatpassword) {
      setError("Passwords do not match");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setIsLoading(true);
    const success = signUp(email, password, repeatpassword);
    if (success) {
      onSuccess?.();
    } else {
      setError("Account already exists or invalid data");
    }
    setIsLoading(false);
  };

  return (
    <div className="bg-[#EBEBEB] rounded-3xl w-[500px]">
      <div className="bg-white shadow-lg m-2 rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
        <div className="flex flex-col gap-2 items-center mb-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">
            Create an accoun to continue
          </h1>
          <p className="text-gray-400 text-sm">
            Create an account to access all the features on this app
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6 w-full">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email or username
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email or username"
              className="bg-[#EBEBEB] w-full rounded-lg hover:outline-none focus:outline-none p-2"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="bg-[#EBEBEB] w-full rounded-lg hover:outline-none focus:outline-none p-2"
              required
            />
          </div>
          <div>
            <label
              htmlFor="repeatpassword"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Repeat Password
            </label>
            <input
              type="password"
              id="repeatpassword"
              value={repeatpassword}
              onChange={(e) => setRepeatpassword(e.target.value)}
              placeholder="Enter your password again"
              className="bg-[#EBEBEB] w-full rounded-lg hover:outline-none focus:outline-none p-2"
              required
            />
          </div>

          {error && (
            <div className="text-red-600 text-sm text-center bg-red-50 p-3 rounded-lg">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#5057EA] text-white p-2 rounded-lg"
          >
            {isLoading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>
      </div>
      <div className="px-8 pb-6 text-center">
        <p className="text-gray-600">
          Already have an account?{" "}
          <button
            type="button"
            onClick={onSwitchToSignin}
            className="text-indigo-500 hover:text-indigo-600 font-medium"
          >
            Sign In
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignupModal;
