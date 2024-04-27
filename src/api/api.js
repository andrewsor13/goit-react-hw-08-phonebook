import axios from 'axios';

const BASE_URL = 'https://651fa0d3906e276284c344e2.mockapi.io/api/';

const api = axios.create({
  baseURL: BASE_URL,
});

const resourceApi = resource => {
  return {
    getAll: () => api.get(`/${resource}`),
    get: id => api.get(`/${resource}/${id}`),
    create: data => api.post(`/${resource}`, data),
    update: (id, data) => api.put(`/${resource}/${id}`, data),
    delete: id => api.delete(`/${resource}/${id}`),
  };
};

const contactsApi = resourceApi('contacts');
export { contactsApi };
