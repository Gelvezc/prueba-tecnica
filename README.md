# E-commerce DevStore - Prueba Técnica React

Desarrollo de una aplicación e-commerce desde cero construida con React, dando cumplimiento al 100% de los requerimientos exigidos en la prueba técnica.

## Características y Requerimientos Cumplidos
* **Enrutamiento:** Implementación de `react-router-dom` para la navegación entre el catálogo, el detalle de cada producto y la vista de resumen de compra (checkout).
* **Manejo de Estado Global:** Uso de `useContext` (`CartContext`) para gestionar el carrito de compras, permitiendo agregar ítems, eliminar productos, modificar cantidades y vaciar el carrito al finalizar la compra.
* **Interfaz de Usuario:** Diseño limpio y responsivo utilizando componentes de `react-bootstrap` e iconos de FontAwesome.
* **Simulación de API:** Implementación de un mock asíncrono con Promises para simular el consumo y la latencia de una base de datos de productos.
* **Arquitectura de Componentes:** Estructura modular basada en contenedores y componentes presentacionales (NavBar, ItemListContainer, ItemDetail, ItemQuantitySelector, Brief, Checkout, etc.).

## Tecnologías Utilizadas
* React (Hooks: `useState`, `useEffect`, `useContext`)
* Vite
* React Router Dom
* React-Bootstrap / Bootstrap
* FontAwesome (SVG Icons)
