const products = [
  { id: '1', name: 'Libro Spring Boot & Microservicios', price: 45, category: 'libros', img: 'https://via.placeholder.com/150', stock: 10, description: 'Arquitectura hexagonal y backend.' },
  { id: '2', name: 'Teclado Mecánico Keychron', price: 120, category: 'tecnologia', img: 'https://via.placeholder.com/150', stock: 5, description: 'Ideal para desarrollo de software.' },
  { id: '3', name: 'Monitor UltraWide 34"', price: 350, category: 'tecnologia', img: 'https://via.placeholder.com/150', stock: 3, description: 'Mejora tu productividad al codificar.' }
];

export const getProducts = () => new Promise((resolve) => setTimeout(() => resolve(products), 500));
export const getProductById = (id) => new Promise((resolve) => setTimeout(() => resolve(products.find(p => p.id === id)), 500));