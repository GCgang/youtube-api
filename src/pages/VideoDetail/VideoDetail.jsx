import { useLocation } from "react-router-dom";
import ChannelPlayList from "../../components/ChannelPlayList/ChannelPlayList";

export default function VideoDetail() {
  const {
    state: { video },
  } = useLocation();
  const { title, channelId, channelTitle, description } = video.snippet;
  console.log(video);
  return (
    <>
      <article>
        <section>
          <iframe
            id="player"
            type="text/html"
            width="640"
            height="390"
            src={`http://www.youtube.com/embed/${video.id}`}
            style={{ border: "none" }}
          ></iframe>
          <h3>{title}</h3>
          <h4>{channelTitle}</h4>
          <p>{description}</p>
        </section>
        <section>
          <ChannelPlayList channelId={channelId} />
        </section>
      </article>
    </>
  );
}
