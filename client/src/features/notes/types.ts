export type Note = {
  _id?: string;
  title: string;
  body: string;
};

export type NotesList = Note[];

export type NotesState = {
  isUpdating: boolean;
  isLoading: boolean;
  notesList: NotesList;
  error: string | null;
};
