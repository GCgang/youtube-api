import { useNavigate } from 'react-router-dom';
import { formatAgo } from '../../utils/date';
export default function VideoCard({ video }) {
  const { title, channelTitle, publishedAt, thumbnails } = video.snippet;
  const navigate = useNavigate();

  return (
    <li
      onClick={() =>
        navigate(`/videos/watch/${video.id}`, { state: { video } })
      }
    >
      <img className='w-full' src={thumbnails.medium.url} alt='thumbnails' />
      <p className='font-semibold my-2 line-clamp-2'>{title}</p>
      <p className='text-sm opacity-80'>{channelTitle}</p>
      <p className='text-sm opacity-80'>{formatAgo(publishedAt)}</p>
    </li>
  );
}
