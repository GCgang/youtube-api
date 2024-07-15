import { useLocation } from "react-router-dom";
import ChannelPlayList from "../../components/ChannelPlayList/ChannelPlayList";
import ChannelInfo from "../../components/ChannelInfo/ChannelInfo";

export default function VideoDetail() {
  const {
    state: { video },
  } = useLocation();
  const { title, channelId, channelTitle, description } = video.snippet;
  return (
    <section>
      <article>
        {video.id}
        <iframe
          id="player"
          type="text/html"
          width="100%"
          height="640"
          src={`http://www.youtube.com/embed/${video.id}`}
          style={{ border: "none" }}
        ></iframe>
        <div>
          <h2>{title}</h2>
          <ChannelInfo id={channelId} name={channelTitle} />
          <pre>{description}</pre>
        </div>
      </article>
      <section>
        <ChannelPlayList channelId={channelId} />
      </section>
    </section>
  );
}
