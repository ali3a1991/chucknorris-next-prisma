'use server'
type ResponseData = {
  value : string
}
export default async function fetchRandomJoke (){
  const response = await fetch('https://api.chucknorris.io/jokes/random')
  if (response.ok) {
    const data : ResponseData = await response.json()
    return data.value
  }
}