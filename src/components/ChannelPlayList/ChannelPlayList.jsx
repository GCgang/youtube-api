import { useYoutubeApi } from "../../context/YoutubeApiContext";
import { useQuery } from "@tanstack/react-query";
import VideoCard from "../../components/VideoCard/VideoCard";
export default function ChannelPlayList({ channelId }) {
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery({
    queryKey: ["playlist", channelId],
    queryFn: () => {
      return youtube.searchByChannelId(channelId);
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
