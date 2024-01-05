<p align="center">
<a href=https://github.com/codescalper/diff.ai target="_blank">
<img src='/image.png' width="100%" alt="Banner" />
</a>
</p>



<p align="center">
<img src="https://img.shields.io/github/languages/code-size/codescalper/diff.ai" alt="GitHub code size in bytes" />
<img src="https://img.shields.io/github/last-commit/codescalper/diff.ai" alt="GitHub last commit" />
<img src="https://img.shields.io/github/commit-activity/m/codescalper/diff.ai" alt="GitHub commit activity month" />
<img src="https://img.shields.io/github/license/codescalper/diff.ai" alt="GitHub license" />
</p>

## 📌 Overview

diff.ai is an AI-powered tool that generates differences between two given topics in Markdown format. It also has an option to create acronyms for parameters inside the table. It's made with Next.js 14, Shadcn for UI, Vercel AI-SDK, and deployed on Vercel.

## 🔍 Table of Contents

* [📁 Project Structure](#project-structure)

* [📝 Project Summary](#project-summary)

* [💻 Stack](#stack)

* [⚙️ Setting Up](#setting-up)

* [🚀 Run Locally](#run-locally)

* [🙌 Contributors](#contributors)

* [☁️ Website](#website)


## 📁 Project Structure

```bash
├── .eslintrc.json
├── .gitignore
├── README.md
├── app
│   ├── api
│   │   └── chat
│   │       └── route.ts
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components.json
├── components
│   ├── Diff.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── theme-provider.tsx
│   └── ui
│       ├── button.tsx
│       ├── checkbox.tsx
│       ├── drawer.tsx
│       ├── input.tsx
│       ├── sonner.tsx
│       ├── toast.tsx
│       ├── toaster.tsx
│       └── use-toast.ts
├── lib
│   └── utils.ts
├── next.config.js
├── package-lock.json
├── package.json
├── postcss.config.js
├── public
│   ├── 1.png
│   ├── 2.png
│   ├── 3.png
│   ├── next.svg
│   ├── vercel.svg
│   └── vs.png
├── tailwind.config.ts
└── tsconfig.json
```

## 📝 Project Summary

- [**app**](app): Main application directory containing the core functionalities and logic.
- [**app/api**](app/api): Directory for API-related modules and services.
- [**app/api/chat**](app/api/chat): Specific directory for chat-related API functionalities which comes with vercel AI SDK.
- [**components**](components): Directory for reusable components used throughout the application.
- [**components/ui**](components/ui): Directory for UI-specific components - ShadCN UI.
- [**lib**](lib): Directory for external libraries and dependencies.
- [**public**](public): Directory for public assets such as images, fonts, and static files.

## 💻 Stack

- [next](https://nextjs.org/): React framework for building server-side rendered and static websites.
- [react](https://reactjs.org/): JavaScript library for building user interfaces.
- [react-dom](https://reactjs.org/docs/react-dom.html): Provides DOM-specific methods for React.
- [react-icons](https://react-icons.github.io/react-icons/): Collection of popular icons as React components.
- [tailwindcss](https://tailwindcss.com/): Utility-first CSS framework for quickly building custom designs.
- [typescript](https://www.typescriptlang.org/): Superset of JavaScript that adds static typing to the language.
- [eslint](https://eslint.org/): Pluggable linting utility for JavaScript and TypeScript.
- [postcss](https://postcss.org/): Tool for transforming CSS with JavaScript plugins.

## ⚙️ Setting Up

#### Your Environment Variable

- Step 1
```makefile
OPENAI_API_KEY=
```

## 🚀 Run Locally
1.Clone the diff.ai repository:
```sh
git clone https://github.com/codescalper/diff.ai
```
2.Install the dependencies with one of the package managers listed below:
```bash
npm install
```
3.Start the development mode:
```bash
npm run dev
```

## 🙌 Contributors
<a href="https://github.com/codescalper/diff.ai/graphs/contributors">
<img src="https://contrib.rocks/image?repo=codescalper/diff.ai" />
</a>

## 🌐 Website
- Website: https://diff-ai.vercel.app/


