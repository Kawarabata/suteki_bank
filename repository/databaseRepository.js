import firebase from '@/plugins/firebase'

export class DatabaseRepository {
  async createSuteki(params) {
    try {
      await firebase.firestore().collection('sutekis').add(params)
      return true
    } catch (error) {
      return {
        error: { message: error.message },
      }
    }
  }
}
