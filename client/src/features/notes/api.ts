import apiRequest from '../../utils/apiClient';

export const getNotes = () => {
  return apiRequest({
    method: 'GET',
    url: '/notes',
  });
};
