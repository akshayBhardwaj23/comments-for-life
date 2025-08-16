````markdown
# Comments Box

A minimal React + TypeScript app for composing and browsing a feed of comments. It includes basic auth (mocked), a post composer, a feed, modal-based sign in/up, local persistence, and subtle handcrafted animations.

## Features

- Sign in / Sign up via inline modals (no backend; mock users)
- Guarded interactions: unauthenticated clicks open the sign-in modal
- Composer with toolbar actions (currently show “not implemented”)
- Comments feed with persisted posts (localStorage)
- Inline SVG icon buttons (no icon package)
- Subtle entrance/hover animations (CSS + Tailwind)

## Tech Stack

- React 19, TypeScript, Vite, React Router
- Tailwind CSS
- LocalStorage for persistence

## Project Structure

```text
src/
  Context/
    AuthContext.tsx        # Central auth + posts state (mocked)
  components/
    Auth/
      Login.tsx            # Full-page sign-in
      Signup.tsx           # Full-page sign-up
      LoginModal.tsx       # Sign-in modal (card only)
      SignupModal.tsx      # Sign-up modal (card only)
    Comments/
      CommentBox.tsx       # Composer with toolbar + Send
      Comment.tsx          # Single feed card
      CommentsFeed.tsx     # Feed list
      CommentsSection.tsx  # Section wrapper; wires auth guard props
    Header/
      Header.tsx           # Top bar; opens sign-in modal via prop
  App.tsx                  # Routes + app-level modal state
  data.ts                  # Mock users/posts types and seeds
  index.css                # Tailwind + custom animations/utilities
```
````

## How It Works

- State
  - `AuthContext` exposes:
    - `user`, `isAuthenticated`, `signIn`, `signOut`, `signUp`
    - `posts`, `addPost(content)`
  - Posts are seeded from `mockPosts` and persisted to localStorage.
- Modals
  - App-level state in `App.tsx` controls `LoginModal`/`SignupModal`.
  - `Header` receives `onSignInClick` to open sign-in modal.
  - `CommentsSection` receives `onUnauthenticatedAction` from `App` and forwards it to children; components call it before privileged actions.
- Composer
  - `CommentBox` requires auth for toolbar, delete, attachments, and send.
  - Inline SVG icons replace text for a clean UI.
- Animations
  - `animate-fade-lift` for subtle card entrance; hover transforms live on the inner card to avoid conflicts.
  - Icon micro-interactions via Tailwind transitions.

## Getting Started

```bash
npm install
npm run dev
npm run build
npm run preview
npm run lint
```

## Notable Files

- `src/Context/AuthContext.tsx`: mock auth + posts; localStorage hydration/serialization
- `src/components/Auth/*Modal.tsx`: modal cards (click outside closes them)
- `src/components/Comments/CommentBox.tsx`: auth guard + inline SVG icons

## Animations

Add in `src/index.css`:

```css
@keyframes fade-lift {
  from {
    opacity: 0;
    transform: translateY(6px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
.animate-fade-lift {
  animation: fade-lift var(--fade-lift-duration, 0.36s) ease-out both;
}
@media (prefers-reduced-motion: reduce) {
  .animate-fade-lift {
    animation: none;
  }
}
```

Usage:

- Wrap any card with `<div className="animate-fade-lift">...</div>`
- Adjust duration per element: `style={{ ['--fade-lift-duration' as any]: '.5s' }}`

## Future Enhancements

- Replace mock auth with API; secure sessions/tokens
- Rich text editor for posts; toolbar actions (bold/italic/underline/lists)
- Reactions, replies, edit/delete with optimistic updates
- Pagination/virtualization for large feeds
- Image/audio/video uploads and preview
- Role-based features and rate limiting
- Testing: unit (Vitest), component (Testing Library), e2e (Playwright)
- Accessibility pass and i18n
- Dark mode and theming

## TypeScript Notes

- Strong types on context and posts; localStorage parsing converts string dates back to `Date`
- Consider serializing dates as ISO strings and rehydrating to `Date` (already done in context)
- Prefer `crypto.randomUUID()` for ids when available

```

- The README covers what the app does, structure, current functionality, how state and modals are wired, how to run, the animation utility, and future work.
```
