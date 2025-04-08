export const environment = {
  production: false,
  apiUrl: 'http://fedora:8080'
};

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: `${environment.apiUrl}/login`,
    REGISTER: `${environment.apiUrl}/register`
  },
  // Puedes añadir más secciones para otros módulos
  // USER: { ... },
  // PRODUCTS: { ... },
};
