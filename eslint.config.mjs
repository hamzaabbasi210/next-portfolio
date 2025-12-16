import next from "eslint-config-next";
import nextTypescript from "eslint-config-next/typescript.js";

export default [
  ...next(),
  ...nextTypescript(),
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "react-hooks/exhaustive-deps": "off",
      "@next/next/no-img-element": "off",
    },
  },
];
