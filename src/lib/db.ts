import { MongoClient } from 'mongodb'

const DATABASE = 'HomePage'
const COLLECTION = 'Characters'

const uri =
  `mongodb://${import.meta.env.VITE_MONGO_USER}:${import.meta.env.VITE_MONGO_PW}@localhost:27017/`
const client = new MongoClient(uri)

async function addCharacter(character: Character) {
  try {
    await client.connect()

    const db = client.db(DATABASE)
    const coll = db.collection(COLLECTION)

    await coll.insertOne(character)
  } finally {
    await client.close()
  }
}
