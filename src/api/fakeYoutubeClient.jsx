import axios from "axios";

export default class FakeYoutubeClient {
  async search() {
    return axios.get("/mockData/search.json");
  }
  async videos() {
    return axios.get("/mockData/hotTrend.json");
  }
  async channels(params) {
    return axios.get("/mockData/channel.json");
  }
  async playlist() {
    return axios.get("/mockData/channelPlayList.json");
  }
}
