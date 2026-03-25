# React + TypeScript + Vite + shadcn/ui

This is a template for a new Vite project with React, TypeScript, and shadcn/ui.

## Adding components

To add components to your app, run the following command:

```bash
npx shadcn@latest add button
```

This will place the ui components in the `src/components` directory.

## Using components

To use the components in your app, import them as follows:

```tsx
import { Button } from "@/components/ui/button"
```

## Deploy on Vercel

This project is configured for Vercel with `vercel.json`.

1. Push this repository to GitHub.
2. In Vercel, click **Add New Project** and import the repository.
3. Set the project root to `hatch_cards`.
4. Vercel will use:
   - Build command: `npm run build`
   - Output directory: `dist`
5. Deploy.

For local Vercel preview:

```bash
npm i -g vercel
vercel login
vercel --cwd hatch_cards
```
