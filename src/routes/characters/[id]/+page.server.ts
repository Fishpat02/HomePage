import { characters } from '$lib/db'
import { error } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ params }) => {
  const id = parseInt(params.id)
  const character = characters.find((c) => c.id === id)

  if (!character) {
    error(404, {
      message: 'Not found',
    })
  }

  return { character }
}
