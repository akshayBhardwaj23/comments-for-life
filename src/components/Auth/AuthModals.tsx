import { useEffect, useState } from "react";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";

const AuthModals = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  useEffect(() => {
    const openLogin = () => {
      setShowSignup(false);
      setIsOpen(true);
    };
    const openSignup = () => {
      setShowSignup(true);
      setIsOpen(true);
    };

    window.addEventListener("auth:open-login", openLogin);
    window.addEventListener("auth:open-signup", openSignup);
    return () => {
      window.removeEventListener("auth:open-login", openLogin);
      window.removeEventListener("auth:open-signup", openSignup);
    };
  }, []);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={() => setIsOpen(false)}
    >
      <div className="rounded-xl" onClick={(e) => e.stopPropagation()}>
        <div className="mx-4 my-6">
          {showSignup ? (
            <SignupModal
              onSuccess={() => setIsOpen(false)}
              onSwitchToSignin={() => setShowSignup(false)}
            />
          ) : (
            <LoginModal
              onSuccess={() => setIsOpen(false)}
              onSwitchToSignup={() => setShowSignup(true)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthModals;
