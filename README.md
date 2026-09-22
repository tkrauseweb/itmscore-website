# ITMScore public project site

This repository contains the public project presentation and portfolio for ITMScore. It is separate from the protected ITMScore application and uses fictional data in its interactive demo.

## Requirements

- Node.js 24, or another supported version matching `package.json` (`>=22.13.0`)
- npm

## Local development

```bash
npm install
npm run dev
```

The development server starts at `http://localhost:3000`.

## Quality checks

```bash
npm run lint
npm run build
```

## Project structure

- `app/` contains routes, shared layout components and styling.
- `data/` contains portfolio content that can be updated without changing page layout.
- `public/` contains brand and social-preview assets.
- `.openai/hosting.json` contains the OpenAI Sites project binding.

The contact form opens the visitor's local email client. There is currently no contact API and the site does not store form submissions.
