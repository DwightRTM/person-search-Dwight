import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

const config = [
  // Define ignored files first
  {
    ignores: [
      "components/ui/*.tsx",
    ],
  },
  // Next.js 16 ships flat-config exports; include them directly.
  ...nextCoreWebVitals,
  ...nextTypescript,
  // Optionally override or add rules after
  {
    rules: {},
  },
];

export default config;
