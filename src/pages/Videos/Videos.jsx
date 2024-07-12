import { useQuery } from "@tanstack/react-query";
import { useParams, useNavigate } from "react-router-dom";
import { fetchHotTrendVideos } from "../../utils/api";
export default function Home() {
  const { keyword } = useParams();
  const { isLoading, data } = useQuery({
    queryKey: ["videos", keyword],
    queryFn: fetchHotTrendVideos,
  });
  const navigate = useNavigate();
  const videos = data?.items;
  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {videos.map((video) => (
            <li
              key={video.id}
              onClick={() => navigate(`/videos/watch/${video.id}`)}
            >
              <img
                src={video.snippet.thumbnails.default.url}
                alt="thumbnails"
              />
              <h3>{video.snippet.title}</h3>
              <p>{video.snippet.channelTitle}</p>
              <p>{new Date(video.snippet.publishedAt).toLocaleDateString()}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
