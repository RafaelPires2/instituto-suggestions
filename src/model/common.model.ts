/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApolloError } from "@apollo/client";
import React from "react";

export interface BaseParamsUseCase<T = any> {
  onCompleted?: (response?: T) => void;
  onError?: (error: ApolloError) => void;
}

export interface BaseQueryUseCase<T> {
  data?: T;
  loading: boolean;
  error?: ApolloError;
}

export interface BaseMutationUseCase<T> {
  mutation?: (variables: T) => void;
  loading: boolean;
  error?: ApolloError;
}

export type BaseHomeItem<T> = React.FC<{ item: T; handleItemTap: () => void }>;
