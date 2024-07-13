import axios from "axios";
export class FakeYoutube {
  constructor() {}

  async search(keyword) {
    return keyword ? this.#ListByKeyword() : this.#HotTrend();
  }

  async #ListByKeyword() {
    const response = await axios.get("/mockData/search.json");
    console.log(response.data);
    return response.data.items;
  }

  async #HotTrend() {
    const response = await axios.get("/mockData/hotTrend.json");
    console.log(response.data);
    return response.data.items;
  }
}
