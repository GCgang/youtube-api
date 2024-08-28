import axios from 'axios';
export default class YoutubeClient {
  constructor() {
    this.httpClient = axios.create({
      baseURL: process.env.REACT_APP_YOUTUBE_BASE_URL,
      params: {
        key: process.env.REACT_APP_YOUTUBE_API_KEY,
      },
    });
  }

  async search(params) {
    return this.httpClient.get('search', params);
  }
  async videos(params) {
    return this.httpClient.get('videos', params);
  }
  async channels(params) {
    return this.httpClient.get('channels', params);
  }
  async playlist(params) {
    return this.httpClient.get('playlists', params);
  }
  async comments(params) {
    return this.httpClient.get('commentThreads', params);
  }
}
