export type Character = {
  id: number
  name: string
  age: number
  gender: string
  species: string
  shortDescription: string
  longDescription: string
  appearance: {
    eyeColor?: string
    hairColor?: string
    skinColor?: string
    height?: number
    weight?: number
    tattoos?: string
    marks?: string
  }
}
