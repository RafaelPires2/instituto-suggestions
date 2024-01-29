import { gql } from "@apollo/client";

export const AddSuggestionsMutation = gql`
  mutation addSuggestionsMutation($object: playlist_insert_input!) {
    insert_playlist_one(object: $object) {
      author
      created_at
      id
      image
      link
      name
      suggested_by
      updated_at
    }
  }
`;
