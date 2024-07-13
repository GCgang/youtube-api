import axios from "axios";
export class Youtube {
  constructor() {
    this.apiClient = axios.create({
      baseURL: process.env.REACT_APP_YOUTUBE_BASE_URL,
      params: {
        key: process.env.REACT_APP_YOUTUBE_API_KEY,
      },
    });
  }
  async search(keyword) {
    return keyword ? this.#ListByKeyword(keyword) : this.#HotTrend();
  }

  async #ListByKeyword(keyword) {
    const response = await this.apiClient.get("search", {
      params: {
        part: "snippet",
        maxResults: 25,
        q: keyword,
      },
    });
    return response.data.items.map((item) => ({
      ...item,
      id: item.id.videoId,
    }));
  }
  async #HotTrend() {
    const response = await this.apiClient.get("videos", {
      params: {
        part: "snippet",
        chart: "mostPopular",
        maxResults: 25,
      },
    });
    return response.data.items;
  }
}
