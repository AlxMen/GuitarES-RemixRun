import { useLoaderData } from "react-router";
import { getPost } from "~/models/posts.server";
import { formatearFecha } from "~/utils/helpers";

export function meta({ data }) {
  if (!data) {
    return [
      {
        title: `Blog no encontrada`,
        descripcion: `Blog, Publicacion no encontrada`,
      },
    ];
  }

  return [
    {
      title: `GuitarLA - ${data.data[0].attributes.Titulo}`,
      descripcion: `Guitarras, Publicacion, ${data.data[0].attributes.Titulo}`,
    },
  ];
}

export async function loader({ params }) {
  const { url } = params;
  const post = await getPost(url);
  if (post.data.length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "Entrada no encontrada",
    });
  }
  return post;
}

function Post() {
  const post = useLoaderData();
  const { Titulo, cotenido, imagen, publishedAt } = post.data[0].attributes;

  const cot = cotenido.map((cot) => {
    return cot.children[0].text;
  });

  return (
    <article className="post mt-3">
      <img
        className="imagen"
        src={imagen.data.attributes.url}
        alt={`Imagen blog ${Titulo}`}
      />
      <div className="contenido">
        <h3>{Titulo}</h3>
        <p className="fecha">{formatearFecha(publishedAt)}</p>
        <p className="texto">{cot}</p>
      </div>
    </article>
  );
}

export default Post;
