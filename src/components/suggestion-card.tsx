import * as React from "react";
import {
  SuggestionType,
  SuggestionsContext,
} from "../context/suggestions.context";
export const SuggestionCard: React.FC<
  React.PropsWithChildren<{ suggestion: SuggestionType }>
> = ({ suggestion, children }) => {
  return (
    <SuggestionsContext.Provider value={suggestion}>
      <div className="flex flex-col shadow-md px-4 py-2 rounded bg-white text-center">
        {children}
      </div>
    </SuggestionsContext.Provider>
  );
};
