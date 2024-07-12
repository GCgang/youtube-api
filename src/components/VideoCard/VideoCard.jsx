import { useNavigate } from "react-router-dom";
export default function VideoCard({ video }) {
  const { title, channelTitle, publishedAt, thumbnails } = video.snippet;
  const navigate = useNavigate();

  return (
    <li onClick={() => navigate(`/videos/watch/${video.id}`)}>
      <img src={thumbnails.default.url} alt="thumbnails" />
      <h3>{title}</h3>
      <p>{channelTitle}</p>
      <p>{new Date(publishedAt).toLocaleDateString()}</p>
    </li>
  );
}
