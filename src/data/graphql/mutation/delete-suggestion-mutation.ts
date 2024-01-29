import { gql } from "@apollo/client";

export const DeletePlayList = gql`
  mutation deleteMutation($id: uuid!) {
    delete_playlist_by_pk(id: $id) {
      id
    }
  }
`;
