import Firestore from '@google-cloud/firestore'

export const fasulkeyDb = () => {
    return new Firestore()
}
