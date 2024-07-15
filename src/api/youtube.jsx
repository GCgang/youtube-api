export default class Youtube {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async search(keyword) {
    return keyword ? this.#ListByKeyword(keyword) : this.#HotTrend();
  }

  async channelImageURL(id) {
    const response = await this.apiClient.channels({
      params: {
        part: "snippet",
        id,
      },
    });
    return response.data.items[0].snippet.thumbnails.default.url;
  }
  async searchByChannelId(channelId) {
    const response = await this.apiClient.playlist({
      params: {
        part: "snippet",
        channelId,
        maxResults: 25,
        order: "date",
        type: "video",
      },
    });
    return response.data.items;
  }

  async #ListByKeyword(keyword) {
    const response = await this.apiClient.search({
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
    const response = await this.apiClient.videos({
      params: {
        part: "snippet",
        chart: "mostPopular",
        maxResults: 25,
      },
    });
    return response.data.items;
  }
}
