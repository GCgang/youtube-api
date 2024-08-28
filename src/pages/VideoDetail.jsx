import { useLocation } from 'react-router-dom';
import ChannelPlayList from '../components/ChannelPlayList';
import ChannelInfo from '../components/ChannelInfo';
import Comments from '../components/Comments';

export default function VideoDetail() {
  const {
    state: { video, videoId },
  } = useLocation();
  const { title, channelId, channelTitle, description } = video.snippet;
  return (
    <section className='flex flex-col lg:flex-row'>
      <article className='basis-4/6'>
        <iframe
          id='player'
          type='text/html'
          width='100%'
          height='640'
          src={`https://www.youtube.com/embed/${videoId}`}
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen
          style={{ border: 'none' }}
          title={title}
        ></iframe>
        <div className='p-8'>
          <h2 className='text-xl font-bold'>{title}</h2>
          <ChannelInfo id={channelId} name={channelTitle} />
          <pre className='whitespace-pre-wrap'>{description}</pre>
        </div>
        <div className='p-8'>
          <Comments id={videoId} />
        </div>
      </article>
      <section className='basis-2/6'>
        <ChannelPlayList channelId={channelId} />
      </section>
    </section>
  );
}
