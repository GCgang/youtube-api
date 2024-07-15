export default class Youtube {
  constructor(apiClient) {
    this.apiClient = apiClient;
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
