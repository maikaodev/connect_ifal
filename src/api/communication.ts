import axios from 'axios'

export class Api {
  static async getProfile(username: string) {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      )
      if (!response || !response.data) {
        throw new Error('Erro ao buscar informações do usuário.')
      }

      return response?.data
    } catch (error) {
      console.log('Error', error)
      return {}
    }
  }
}
