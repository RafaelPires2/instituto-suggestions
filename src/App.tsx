import { useQuery } from "@apollo/client";
import { DefaultSpinner } from "./components/spinner";
import { SuggestionsQueryQuery } from "./data/schema/graphql";
import { SuggestionCard } from "./components/suggestion-card";
import { SuggestionTitle } from "./components/suggestion-title";
import { SuggestionImage } from "./components/suggestion-image";
import { Button } from "./components/button";
import { CreateNewSuggestion } from "./components/create-new-suggestion";
import { Suspense } from "react";
import { suggestionsQuery } from "./data/schema/query/suggestions-query";
import { useDeletePlaylist } from "./domain/delete-playlist.use-case";

function App() {
  const { data } = useQuery<SuggestionsQueryQuery>(suggestionsQuery);
  const { mutation } = useDeletePlaylist();

  const submitDeleteMutation = (id: string) => {
    mutation({ id: id });
  };

  return (
    <div className="bg-gray-100 px-12 py-8 h-screen text-center">
      <h1 className="text-2xl">Instituto's Suggestions</h1>
      <hr />
      <CreateNewSuggestion />
      <div className="mt-8" />
      <hr />
      <div className="mt-8" />
      <div className="flex">
        <Suspense fallback={<DefaultSpinner />}>
          {data?.playlist.map((suggestion) => (
            <SuggestionCard suggestion={suggestion} key={suggestion.id}>
              <SuggestionTitle />
              <SuggestionImage />
              <div className="mt-8" />

              <Button />
              <button
                className="bg-cyan-800 px-4 py-2 rounded w-full text-white font-bold"
                onClick={() => submitDeleteMutation(suggestion.id)}
              >
                Deletar
              </button>
            </SuggestionCard>
          ))}
        </Suspense>
      </div>
    </div>
  );
}

export default App;
