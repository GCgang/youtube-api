import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import VideoCard from "../../components/VideoCard/VideoCard";
import { useYoutubeApi } from "../../context/YoutubeApiContext";
export default function Home() {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery({
    queryKey: ["videos", keyword],
    queryFn: () => {
      return youtube.search(keyword);
    },
  });

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error...</div>}
      <ul>
        {videos?.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </ul>
    </>
  );
}
