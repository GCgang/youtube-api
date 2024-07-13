import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { FakeYoutube } from "../../api/fakeYoutube";
import { Youtube } from "../../api/youtube";
import VideoCard from "../../components/VideoCard/VideoCard";
export default function Home() {
  const { keyword } = useParams();
  // const youtube = new FakeYoutube();
  const youtube = new Youtube();

  const {
    isLoading,
    error,
    data: videos,
  } = useQuery({
    queryKey: ["videos", keyword],
    queryFn: () => youtube.search(keyword),
  });
  console.log(videos);

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
