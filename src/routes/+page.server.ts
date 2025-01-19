import type { PageServerLoad } from './$types'
import { getCharacters } from '$lib/db'

export const load: PageServerLoad = async () => {
  const characters = await getCharacters()

  return { characters }
}
