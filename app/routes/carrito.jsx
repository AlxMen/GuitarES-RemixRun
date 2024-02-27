import { useOutletContext } from "@remix-run/react";
import styles from "~/styles/carrito.css";

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

export function meta() {
  return [
    {
      title: 'GuitarLA - Carrito',
      description: 'Venta de guitarras, musica, blog...'
    }
  ]
}

function Carrito() {

  const {carrito} = useOutletContext()
  console.log(carrito);
  return (
    <main className="contenedor">
      <h1 className="heading">Carrito de Compras</h1>
      <div className="contenido">
        <div className="carrito">
          <h2>Articulos</h2>
          {/* {carrito.length === 0 ? 'carrito Vacio' : (
            carrito.map(producto => (
              <div key={producto.id}>
                <div>

                </div>
                <div>
                  <p className="nombre">{producto.nombre}</p>
                </div>
              </div>
            ))
          )} */}
        </div>
        <aside className="resumen">
          <h3>Resumen del Pedido</h3>
          <p>Total a Pagar: $</p>
        </aside>
      </div>
    </main>
  );
}

export default Carrito;
