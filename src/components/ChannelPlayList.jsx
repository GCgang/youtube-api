import { useYoutubeApi } from '../context/YoutubeApiContext';
import { useQuery } from '@tanstack/react-query';
import VideoCard from './VideoCard';
export default function ChannelPlayList({ channelId }) {
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery({
    queryKey: ['playlist', channelId],
    queryFn: () => {
      return youtube.searchByChannelId(channelId);
    },
    staleTime: 1000 * 60 * 5,
  });
  return (
    <>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error...</div>}
      <ul className='ml-2'>
        {videos?.map((video) => (
          <VideoCard key={video.id.videoId} video={video} type='list' />
        ))}
      </ul>
    </>
  );
}
