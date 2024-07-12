import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { fetchHotTrendVideos } from "../../utils/api";
export default function Home() {
  const { isLoading, data } = useQuery({
    queryKey: ["videos"],
    queryFn: fetchHotTrendVideos,
  });
  const videos = data?.items;
  return (
    <>
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <ul>
          {videos.map((video) => (
            <Link to={`/videos/watch/${video.id}`}>
              <li key={video.id}>
                <img
                  src={video.snippet.thumbnails.default.url}
                  alt="thumbnails"
                />
                <h3>{video.snippet.title}</h3>
                <p>{video.snippet.channelTitle}</p>
                <p>
                  {new Date(video.snippet.publishedAt).toLocaleDateString()}
                </p>
              </li>
            </Link>
          ))}
        </ul>
      )}
    </>
  );
}
