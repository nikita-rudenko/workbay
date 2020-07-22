import apiRequest from '../../utils/apiClient';
import { Note } from './types';

export const getNotes = () => {
  return apiRequest({
    method: 'GET',
    url: '/notes',
  });
};

export const createNote = (note: Note) => {
  return apiRequest({
    method: 'POST',
    url: '/notes',
    data: { ...note },
  });
};
