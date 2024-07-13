import axios from "axios";
export class FakeYoutube {
  constructor() {}

  async search(keyword) {
    return keyword ? this.#ListByKeyword() : this.#HotTrend();
  }

  async #ListByKeyword() {
    const response = await axios.get("/mockData/search.json");
    return response.data.items.map((item) => ({
      ...item,
      id: item.id.videoId,
    }));
  }

  async #HotTrend() {
    const response = await axios.get("/mockData/hotTrend.json");
    return response.data.items;
  }
}
