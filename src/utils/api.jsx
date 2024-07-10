const BASE_URL = "https://youtube.googleapis.com/youtube/v3";
const API_KEY = "AIzaSyBXXcD6jn9in31R4COHKsrUdNr8KYX4UDE";

const getHotTrendVidieosUrl = () =>
  `${BASE_URL}search?part=snippet&maxResults=25&q=Kendrick Lamar&key=${API_KEY}`;
export async function fetchHotTrendVidieos() {
  const response = await fetch("../../mockData/HotTrendVidieo.json");
  if (!response?.ok) {
    throw new Error("Faild get");
  }
  const json = await response.json();
  return json;
}
