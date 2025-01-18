// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface PageState {}
    // interface Platform {}
  }

  type Character = {
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
}

export {}
