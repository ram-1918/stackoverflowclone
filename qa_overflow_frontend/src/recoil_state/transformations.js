// Selectors are the transformations of state
// Selectors can be used for filters or statistic calculations, in simple terms, transformations

import { selector } from "recoil";
import { questions } from "./state";

export const FilterQuestions = selector({
    key: "FilterQuestions",
    get: ({get}) => {
        const filteredQuestions = get(questions);
        return filteredQuestions;
    }
})