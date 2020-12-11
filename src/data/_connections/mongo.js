import mongodb from 'mongodb'

const MongoClient = mongodb.MongoClient

const url = `mongodb+srv://keyb0ard:${process.env.MONGO_PW}@topazcluster.p7xiq.mongodb.net/fasulkey?retryWrites=true&w=majority`

const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}

const client = new MongoClient(url, options)

export const makeDb = async dbName => {
    if (!client.isConnected()) {
        await client.connect()
    }
    return client.db(dbName)
}

export const fasulkeyDb = () => makeDb(`fasulkey`)
