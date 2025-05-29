let carrito = [];
let total = 0;

document.getElementById("formCliente").addEventListener("submit", function (e) {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!nombre || !email) {
    alert("Por favor complete los datos correctamente.");
    return;
  }

  alert(`¡Bienvenido/a ${nombre}! Podés comenzar a comprar.`);
});

function agregarAlCarrito(libro, precio) {
  carrito.push({ libro, precio });
  actualizarCarrito();
}

function actualizarCarrito() {
  const lista = document.getElementById("listaCarrito");
  lista.innerHTML = "";
  total = 0;

  carrito.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.libro} - $${item.precio}`;
    lista.appendChild(li);
    total += item.precio;
  });

  document.getElementById("total").textContent = total;
}

function vaciarCarrito() {
  carrito = [];
  actualizarCarrito();
}
