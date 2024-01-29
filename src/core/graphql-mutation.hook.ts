/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import {
  ApolloError,
  DocumentNode,
  OperationVariables,
  useMutation as useApolloMutation,
} from "@apollo/client";

export interface MutationResult<TData> {
  called?: boolean;
  loading: boolean;
  data: TData | null | undefined;
  error: ApolloError | undefined;
}

export interface MutationOptions<TData> {
  onCompleted?: (data: TData) => void;
  onError?: (error: ApolloError) => void;
}

export type MutationTuple<TData, TVariables> = [
  (variables: TVariables) => void,
  MutationResult<TData>
];

export function useMutation<TData = any, TVariables = OperationVariables>(
  mutation: DocumentNode,
  options: MutationOptions<TData> = {}
): MutationTuple<TData, TVariables> {
  const [apolloMutate, res] = useApolloMutation<TData, TVariables>(mutation, {
    onCompleted: options.onCompleted,
  });

  const mutate = React.useCallback(
    (variables: TVariables) => {
      apolloMutate({ variables });
    },
    [apolloMutate]
  );

  return [
    mutate,
    {
      called: res.called,
      loading: res.loading,
      data: res.data,
      error: res.error,
    },
  ];
}
