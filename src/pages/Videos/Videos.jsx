import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import VideoCard from '../../components/VideoCard/VideoCard';
import { useYoutubeApi } from '../../context/YoutubeApiContext';
export default function Home() {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery({
    queryKey: ['videos', keyword],
    queryFn: () => {
      return youtube.search(keyword);
    },
    staleTime: 1000 * 60 * 1,
  });
  return (
    <>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error...</div>}
      <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 gap-y-4'>
        {videos?.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </ul>
    </>
  );
}
