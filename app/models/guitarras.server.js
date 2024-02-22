export async function getGuitarras() {
  const respuesta = await fetch(`${process.env.API_URL}/gitarras?populate=imagen`)
  return await respuesta.json()
}