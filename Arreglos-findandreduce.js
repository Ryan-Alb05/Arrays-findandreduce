const productos = [
  { nombre: "Tv", precio: 1000 },
  { nombre: "Ps4", precio: 200 },
  { nombre: "Case", precio: 500 },
  { nombre: "Monitor", precio: 800 },
  { nombre: "Airpods", precio: 400 }
];

const productoBuscado = productos.find(producto => producto.nombre === "Mouse");
console.log("Producto encontrado:", productoBuscado);

const totalCompra = productos.reduce((total, producto) => total + producto.precio, 0);
console.log("Total de la compra:", totalCompra);
console.log("Lista de productos:", productos);

