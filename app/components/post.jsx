import { Link } from "@remix-run/react";
import { formatearFecha } from "~/utils/helpers"

function Post({ post }) {

  const { Titulo, cotenido, imagen, url, publishedAt } = post;
  
  const cot = cotenido.map(cot => {
    return cot.children[0].text; 
  })
  
  return (
    <article className="post">
      <img
        className="imagen"
        src={imagen.data.attributes.formats.small.url}
        alt={`Imagen blog ${Titulo}`}
      />
      <div className="contenido">
        <h3>{Titulo}</h3>
        <p className="fecha">{ formatearFecha(publishedAt) }</p>
        <p className="resumen">{cot.toString()}</p>
        <Link className="enlace" to={`/post/${url}`}>Leer Publicacion</Link>
      </div>
    </article>
  );
}

export default Post