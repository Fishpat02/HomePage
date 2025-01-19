import { MongoClient } from 'mongodb'

const DATABASE = 'HomePage'
const COLLECTION = 'Characters'

const uri =
  `mongodb://${import.meta.env.VITE_MONGO_USER}:${import.meta.env.VITE_MONGO_PW}@localhost:27017/`
const client = new MongoClient(uri)

async function openDB() {
  await client.connect()

  const db = client.db(DATABASE)
  return db.collection(COLLECTION)
}

async function closeDB() {
  await client.close()
}

export async function getCharacterCount() {
  try {
    const coll = await openDB()

    return await coll.countDocuments()
  } finally {
    await closeDB()
  }
}

export async function addCharacters(characters: Character[]) {
  try {
    const coll = await openDB()

    await coll.insertMany(characters)
  } finally {
    await closeDB()
  }
}

export async function getCharacters() {
  try {
    const coll = await openDB()
    const cursor = coll.find({}).project<Character>({ _id: 0 })

    return (await cursor.toArray())
  } finally {
    await closeDB()
  }
}
