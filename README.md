# Simple Pages

A reading-tracker web app where users can organize the books they are reading, keep a list of favorites and time their reading sessions.

> **Project status: 🚧 work in progress.**
> The interface for the main screens is built, but there is no backend yet: data shown in the app is hardcoded and nothing is persisted. See [Current Status](#current-status) for details.

## Table of Contents

- [Current Status](#current-status)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Routes](#routes)
- [Project Structure](#project-structure)
- [Component Reference](#component-reference)
- [Design System](#design-system)
- [Known Issues](#known-issues)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)

## Current Status

| Area                                   | Status                                                    |
| -------------------------------------- | --------------------------------------------------------- |
| Routing (login page → home page)       | ✅ Working                                                |
| Login / Sign-up layout and mode switch | ✅ Working (UI only)                                      |
| Login / Sign-up authentication         | ⏳ Not implemented. The **GO** button navigates to `/app` without validating input |
| Home page layout                       | ✅ Working                                                |
| "Add reading" flow (options → 4-step form) | ✅ Navigation between steps works; data is not saved |
| Book search                            | ⏳ Not implemented (search bar and "Search for a Book" option are visual only) |
| Clock (stopwatch / timer)              | ⏳ UI only; the timers do not run yet                     |
| Reading list and favorites             | ⏳ Hardcoded sample data (*Dom Casmurro*)                 |
| Backend / data persistence             | ⏳ Not started                                            |

## Tech Stack

| Purpose        | Technology                                                  |
| -------------- | ----------------------------------------------------------- |
| UI library     | [React](https://react.dev/) 19                              |
| Language       | [TypeScript](https://www.typescriptlang.org/)               |
| Build tool     | [Vite](https://vite.dev/)                                   |
| Styling        | [Tailwind CSS](https://tailwindcss.com/) 4 (via `@tailwindcss/vite`) |
| Routing        | [React Router](https://reactrouter.com/)                    |
| Linting        | ESLint with `typescript-eslint`, `react-hooks` and `react-refresh` plugins |
| Fonts          | Instrument Sans and Instrument Serif (Google Fonts)         |

## Prerequisites

- [Node.js](https://nodejs.org/) — a current LTS version (20.19+ or 22.12+ recommended for recent Vite releases)
- npm (bundled with Node.js)

## Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/annestefanie/Simple-Pages.git
   cd Simple-Pages
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

   Open the URL printed in the terminal (Vite's default is `http://localhost:5173`).

No environment variables are required at this stage.

## Available Scripts

| Command           | Description                                                   |
| ----------------- | ------------------------------------------------------------- |
| `npm run dev`     | Starts the Vite development server with hot reload            |
| `npm run build`   | Type-checks the project (`tsc -b`) and creates a production build in `dist/` |
| `npm run preview` | Serves the production build locally for testing               |
| `npm run lint`    | Runs ESLint on the whole project                              |

## Routes

Defined in [`src/Router.tsx`](src/Router.tsx).

| Path   | Page                                  | Description                                  |
| ------ | ------------------------------------- | -------------------------------------------- |
| `/`    | [`AuthPage`](src/pages/AuthPage.tsx)  | Log-in / sign-up screen                      |
| `/app` | [`HomePage`](src/pages/homePage.tsx)  | Main dashboard with readings and favorites   |

## Project Structure

```
Simple-Pages/
├── public/
├── src/
│   ├── assets/                # Icons and images (PNG/JPG)
│   ├── components/
│   │   ├── auth/              # AuthHeader, SocialAuth
│   │   ├── books/             # AddReadingCard, BookCard, ReadingCards,
│   │   │                      # ReadingForm, ReadingOptions, SearchBar
│   │   ├── clock/             # Clock (stopwatch / timer modal)
│   │   ├── common/            # CloseBtn, Divider, FakeNav, InputField,
│   │   │                      # SaveConfirmation, SeeAllBtn, Subtitles
│   │   └── layout/            # FlexLayout, Header
│   ├── hooks/
│   │   └── useAuthForm.tsx   # Login / sign-up mode state
│   ├── pages/
│   │   ├── AuthPage.tsx
│   │   └── homePage.tsx
│   ├── App.tsx                # Not used by the router (see Known Issues)
│   ├── Router.tsx             # Route definitions
│   ├── main.tsx               # Application entry point
│   └── index.css              # Tailwind import, fonts and theme tokens
├── index.html
├── vite.config.ts
├── eslint.config.js
├── tsconfig.json / tsconfig.app.json / tsconfig.node.json
└── package.json
```

### How the app is wired

`main.tsx` renders `Router`, which mounts either `AuthPage` or `HomePage` depending on the URL.
`HomePage` owns the open/closed state of three overlays (the clock, the "choose one" options dialog and the add-reading form) and passes callbacks down to the components that open or close them.

## Component Reference

### Pages

| Component  | Description |
| ---------- | ----------- |
| `AuthPage` | Two-column welcome screen with a login/sign-up card. Uses `useAuthForm` to toggle between modes; the extra "Confirm Password" field only appears in sign-up mode. |
| `HomePage` | Dashboard with a search bar, a **My Readings** section, a **Favorite Books** section and three overlays: `Clock`, `ReadingOptions` and `ReadingForm`. |

### Hooks

| Hook          | Returns                                              | Description |
| ------------- | ---------------------------------------------------- | ----------- |
| `useAuthForm` | `{ isLoginMode: boolean, toggleMode: () => void }`   | Holds whether the auth card is in login (`true`) or sign-up (`false`) mode. Starts in login mode. |

### Auth components

| Component    | Props                                                  | Description |
| ------------ | ------------------------------------------------------ | ----------- |
| `AuthHeader` | `isLoginMode: boolean`, `onSwitch: () => void`         | Title bar of the auth card. Shows "LOG IN" or "SIGN UP" and a swap button that calls `onSwitch`. |
| `SocialAuth` | `children: ReactNode`                                  | "Continue with Google" button. The label is passed as children. Not connected to any provider yet. |

### Book components

| Component        | Props                                                                                                | Description |
| ---------------- | ---------------------------------------------------------------------------------------------------- | ----------- |
| `ReadingCards`   | `bookCover: string`, `bookName: string`, `percentage: number`, `authorName?: string`, `time?: number` | Card for a book currently being read: cover, title, author, time spent (in hours) and a progress bar. |
| `AddReadingCard` | `openReadingOptions: () => void`                                                                     | "+" card that opens the options dialog. |
| `BookCard`       | `bookName: string`, `authorName: string`, `bookCover: string`                                         | Card for a favorite book. |
| `SearchBar`      | *none*                                                                                               | Closable search box (UI only). Keeps its own open/closed state. |
| `ReadingOptions` | `isReadingOptionsOpen: boolean`, `onClose: () => void`, `openReadingForm: () => void`                 | Modal with two choices: **Add Manually** (opens the form) and **Search for a Book** (not wired yet). |
| `ReadingForm`    | `isReadingFormOpen: boolean`, `onClose: () => void`                                                  | Modal wizard in 4 steps: (1) upload cover, (2) book info, (3) reading progress and dates, (4) optional reading details. Has **Next / Go Back / Save** controls. |

### Clock component

| Component | Props                                           | Description |
| --------- | ----------------------------------------------- | ----------- |
| `Clock`   | `isClockOpen: boolean`, `onClose: () => void`   | Modal in two stages: choose a reading, then choose **Stopwatch** or **Timer**. The displays currently show a static `00:00:00`. |

### Common components

| Component          | Props                                                                                                               | Description |
| ------------------ | ------------------------------------------------------------------------------------------------------------------- | ----------- |
| `FakeNav`          | `icon`, `text`, `isOpen`, `onClose`, `textColor?`, `color?`, `width?`, `blackIcon?`                                | Browser-style title bar used on top of cards and modals. Renders nothing when `isOpen` is `false`. |
| `CloseBtn`         | `onClick`, `blackIcon`                                                                                              | Close ("X") button with a black or white icon. |
| `InputField`       | `type: string`, `placeholder: string`, `value?: string`, `onChange?: (e) => void`                                   | Styled text input wrapper. |
| `Divider`          | *none*                                                                                                              | Thin horizontal separator. |
| `Subtitles`        | `text: string`, `sectionId: string`                                                                                 | Section heading that links to the section's anchor. |
| `SeeAllBtn`        | *none*                                                                                                              | Full-width "SEE ALL" button (no action yet). |
| `SaveAlert`        | *none*                                                                                                              | "Successfully saved" overlay (exported from `SaveConfirmation.tsx`; not displayed yet). |

### Layout components

| Component    | Props                                                                | Description |
| ------------ | -------------------------------------------------------------------- | ----------- |
| `FlexLayout` | `children: ReactNode`, `gap: string`, `bg?: string`, `padding?: string` | Flex container. `gap`, `bg` and `padding` take Tailwind classes (e.g. `gap-4`, `bg-background`, `p-10`). |
| `Header`     | `onOpenClock: () => void`                                            | Fixed top navigation bar with the app name and the **PROGRESS**, **CLOCK** and profile items. |

## Design System

Theme tokens are declared in [`src/index.css`](src/index.css) using Tailwind 4's `@theme` block, so they are available as utility classes (e.g. `bg-amber`, `text-ink`, `font-serif`).

**Brand palette**

| Token   | Hex       | Typical use                         |
| ------- | --------- | ----------------------------------- |
| `paper` | `#FFF7EB` | Page background                     |
| `ink`   | `#1A1A1A` | Text, borders, dark surfaces        |
| `amber` | `#E89A14` | Primary actions, progress bars      |
| `rose`  | `#F4A2B2` | Title bars, cards                   |
| `aqua`  | `#83D7E4` | Reading cards, secondary actions    |
| `brown` | `#5C2D13` | Secondary / muted                   |

**Semantic aliases:** `background`, `foreground`, `primary`, `secondary`, `muted` and `border`.

**Typography:** `font-serif` → Instrument Serif (titles) · `font-sans` → Instrument Sans · `font-mono` is used for labels and body text.

## Known Issues

- **Authentication is not implemented.** Clicking **GO** always navigates to `/app`, and the input fields are not connected to any state.
- **The progress bar ignores the `percentage` prop.** In `ReadingCards`, the bar width is fixed at `80%`; only the text label uses the prop.
- **Saving a book does nothing.** In `ReadingForm`, **SAVE** sets a state flag, but the `SaveAlert` component is never rendered, and form values are not stored.
- **The cover upload only logs the selected file** to the browser console.
- **`src/App.tsx` is unused.** `main.tsx` renders `Router` directly.
- Several header and card buttons (**PROGRESS**, favorite/menu icons, **SEE ALL**, **Forgot your password?**) have no behavior yet.
- File naming is inconsistent: `homePage.tsx` is lowercase while other files use PascalCase, and `SaveConfirmation.tsx` exports a component named `SaveAlert`.

## Roadmap

- [ ] Implement authentication (form state, validation, Google sign-in)
- [ ] Add a backend (REST API) and database for users, books and readings
- [ ] Replace hardcoded books with real data and persist new readings
- [ ] Make the progress bar reflect each reading's `percentage`
- [ ] Make the stopwatch and timer functional and save sessions to a reading
- [ ] Implement book search and automatic import of book details
- [ ] Add form validation and show `SaveAlert` after a successful save
- [ ] Implement the **PROGRESS** page and the **SEE ALL** views
- [ ] Add automated tests
- [ ] Improve accessibility (alt texts, keyboard navigation, focus handling in modals)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -m "Add my feature"`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Open a Pull Request

Please run `npm run lint` and `npm run build` before opening a pull request.


