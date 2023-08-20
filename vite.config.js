import { resolve } from "path";

export default {
  base: "https://pisateli-studio.ru/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        rules: resolve(__dirname, "rules.html"),
        privacy: resolve(__dirname, "privacy.html"),
      },
    },
  },
};
