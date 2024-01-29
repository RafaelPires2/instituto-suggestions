import { Mutation_Root } from "../data/schema/graphql";

import { useMutation } from "../core/graphql-mutation.hook";
import { BaseParamsUseCase } from "../model/common.model";
import { DeletePlayList } from "../data/graphql/mutation/delete-suggestion-mutation";

export const useDeletePlaylist = (
  params: BaseParamsUseCase<Mutation_Root> = {}
) => {
  const { onCompleted, onError } = params;
  const [mutation, { loading, error }] = useMutation(DeletePlayList, {
    onCompleted,
    onError,
  });

  return { mutation, loading, error };
};
