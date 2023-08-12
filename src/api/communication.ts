import axios from 'axios';

export class Api {
  static async getProfile(url: string) {
    try {
      const response = await axios.get(url);
      if (!response || !response.data) {
        throw new Error('Erro ao buscar informações do usuário.');
      }

      return response?.data;
    } catch (error) {
      console.log('Error', error);
      return {};
    }
  }
}

