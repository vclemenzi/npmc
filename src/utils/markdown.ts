import hljs from "highlight.js";
import { Marked } from "marked";
import { markedHighlight } from "marked-highlight";

export const md = new Marked(
  markedHighlight({
    langPrefix: "hljs language-",
    highlight(code, lang) {
      const language = hljs.getLanguage(lang) ? lang : "plaintext";
      return hljs.highlight(code, { language }).value;
    },
  }),
);
