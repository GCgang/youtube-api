import { useNavigate } from 'react-router-dom';
import { formatAgo } from '../../utils/date';
export default function VideoCard({ video, type }) {
  const { title, channelTitle, publishedAt, thumbnails } = video.snippet;
  const navigate = useNavigate();
  const isList = type === 'list';
  let videoId = video.id;
  if (isList) {
    videoId = video.id.videoId;
  }
  return (
    <li
      className={isList ? 'flex gap-1 m-2' : ''}
      onClick={() =>
        navigate(`/videos/watch/${videoId}`, { state: { video, videoId } })
      }
    >
      <img
        className={isList ? 'w-60 mr-2' : 'w-full'}
        src={thumbnails.medium.url}
        alt='thumbnails'
      />
      <div>
        <p className='font-semibold my-2 line-clamp-2'>{title}</p>
        <p className='text-sm opacity-80'>{channelTitle}</p>
        <p className='text-sm opacity-80'>{formatAgo(publishedAt, 'ko')}</p>
      </div>
    </li>
  );
}
