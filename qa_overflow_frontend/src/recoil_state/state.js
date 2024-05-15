import { atom } from "recoil";

export const nativeColors = atom({
  key: "nativeColors",
  default: {
    gray: {
      4: "#27374D",
      3: "#526D82",
      2: "#9DB2BF",
      1: "#DDE6ED",
    },
    teal: {
      4: "#003C43",
      3: "#135D66",
      2: "rgb(204 251 241)",
      1: "#E3FEF7",
    },
  },
});

export const activeItem = atom({
  key: "activeItem",
  default: "", // localStorage.getItem('active_item')
});

export const activeFilterItem = atom({
  key: "activeFilterItem",
  default: "newest",
});

export const currentUser = atom({
  key: "currentUser",
  default: null,
});

export const questionsData = atom({
  key: "questionsData",
  default: { count: "", next: null, previous: null, items: [] },
});

export const sample = atom({
  key: "sample",
  default: {},
});

export const currentQuestionData = atom({
  key: "currentQuestionData",
  default: {},
});

export const votesData = atom({
  key: "votesData",
  default: {},
});
