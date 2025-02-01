import { characters }          from '$lib/db'
import type { Character }      from '$lib/types'
import { error }               from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = ({ params }) => {
  const id = parseInt(params.id)
  const character: Character | undefined = characters.find((c) => c.id === id)

  if (!character) {
    error(404, {
      message: 'Not found',
    })
  }

  return { character }
}
