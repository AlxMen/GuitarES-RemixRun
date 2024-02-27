import imagen from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'

export function meta() {
  
  return [
    {
      title: "GuitarLa - Sobre Nosotros",
      description: "Venta de guitarras, blog de música",
    },
  ];
}


export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'preload',
      href: imagen,
      as: 'image'
    }
  ]
}

function Nosotros() {

  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>

      <div className="contenido">
        <img src={imagen} alt="imagen sobre nosotros" />

        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
            quibusdam adipisci, voluptas architecto at nostrum aliquam? Quia
            nulla ducimus sunt commodi voluptatem? Doloribus voluptates, sunt
            omnis debitis harum quas consequatur.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos corporis illo magni sapiente, perferendis voluptatem facilis nam reprehenderit voluptates ab perspiciatis natus accusantium similique. Omnis dicta nemo fugiat nulla illum.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Nosotros;
