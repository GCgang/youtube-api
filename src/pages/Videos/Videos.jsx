import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchHotTrendVideos } from "../../utils/api";
import VideoCard from "../../components/VideoCard/VideoCard";
export default function Home() {
  const { keyword } = useParams();
  const { isLoading, data } = useQuery({
    queryKey: ["videos", keyword],
    queryFn: fetchHotTrendVideos,
  });
  const videos = data?.items;
  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </>
  );
}
