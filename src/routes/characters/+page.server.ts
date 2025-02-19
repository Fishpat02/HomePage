import { getCharacters } from '$lib/db'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async () => {
  const characters = await getCharacters()

  return { characters }
}
