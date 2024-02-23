export async function getGuitarras() {
  const respuesta = await fetch(`${process.env.API_URL}/Guitarras?populate=imagen`)
  return await respuesta.json()
}