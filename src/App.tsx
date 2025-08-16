import { BrowserRouter, Routes, Route } from "react-router";
import { useState } from "react";
import CommentsSection from "./components/Comments/CommentsSection";
import Header from "./components/Header/Header";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import { AuthProvider } from "./Context/AuthContext";
import LoginModal from "./components/Auth/LoginModal";
import SignupModal from "./components/Auth/SignupModal";

function App() {
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  const handleUnauthenticatedAction = () => {
    setShowSignInModal(true);
  };

  const switchToSignUp = () => {
    setShowSignInModal(false);
    setShowSignUpModal(true);
  };

  const switchToSignIn = () => {
    setShowSignUpModal(false);
    setShowSignInModal(true);
  };

  return (
    <AuthProvider>
      <BrowserRouter>
        <Header onSignInClick={() => setShowSignInModal(true)} />
        <Routes>
          <Route
            path="/"
            element={
              <CommentsSection
                onUnauthenticatedAction={handleUnauthenticatedAction}
              />
            }
          />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>

        {showSignInModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
            onClick={() => setShowSignInModal(false)}
          >
            <div className="rounded-xl" onClick={(e) => e.stopPropagation()}>
              <div className="mx-4 my-6">
                <LoginModal
                  onSuccess={() => setShowSignInModal(false)}
                  onSwitchToSignup={switchToSignUp}
                />
              </div>
            </div>
          </div>
        )}

        {showSignUpModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
            onClick={() => setShowSignUpModal(false)}
          >
            <div className="rounded-xl" onClick={(e) => e.stopPropagation()}>
              <div className="mx-4 my-6">
                <SignupModal
                  onSuccess={() => setShowSignUpModal(false)}
                  onSwitchToSignin={switchToSignIn}
                />
              </div>
            </div>
          </div>
        )}
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
