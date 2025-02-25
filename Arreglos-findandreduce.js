const productos = [
  { nombre: "Laptop", precio: 1000 },
  { nombre: "Mouse", precio: 200 },
  { nombre: "Teclado", precio: 500 },
  { nombre: "Monitor", precio: 800 },
  { nombre: "Auriculares", precio: 400 }
];

const productoBuscado = productos.find(producto => producto.nombre === "Mouse");
console.log("Producto encontrado:", productoBuscado);

const totalCompra = productos.reduce((total, producto) => total + producto.precio, 0);
console.log("Total de la compra:", totalCompra);
console.log("Lista de productos:", productos);

