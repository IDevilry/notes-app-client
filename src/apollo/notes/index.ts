import { gql } from "@apollo/client";

export const GET_NOTES = gql`
  query Notes {
    notes {
      id
      title
      content
      createdAt
      updatedAt
      author {
        username
      }
    }
  }
`;

export const GET_NOTE_BY_ID = gql`
  query Note($noteId: ID) {
    note(id: $noteId) {
      id
      title
      content
      addedToFavoriteTimes
      createdAt
      updatedAt
    }
  }
`;

export const NEW_NOTE = gql`
  mutation NewNote($content: String!, $title: String!) {
    newNote(content: $content, title: $title) {
      id
      title
      content
      createdAt
    }
  }
`;

export const UPDATE_NOTE = gql`
  mutation UpdateNote($updateNoteId: ID!, $content: String!, $title: String!) {
    updateNote(id: $updateNoteId, content: $content, title: $title) {
      id
      title
      content
      createdAt
      updatedAt
    }
  }
`;

export const DELETE_NOTE = gql`
  mutation DeleteNote($deleteNoteId: ID!) {
    deleteNote(id: $deleteNoteId) {
      id
    }
  }
`;
