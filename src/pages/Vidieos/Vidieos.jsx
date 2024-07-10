import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { fetchHotTrendVidieos } from "../../utils/api";
export default function Home() {
  const { isLoading, data } = useQuery({
    queryKey: ["vidieos"],
    queryFn: fetchHotTrendVidieos,
  });
  const vidieos = data?.items;
  return (
    <>
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <ul>
          {vidieos.map((vidieo) => (
            <Link to={`/vidieo/${vidieo.id}`}>
              <li key={vidieo.id}>
                <img
                  src={vidieo.snippet.thumbnails.default.url}
                  alt="thumbnails"
                />
                <h3>{vidieo.snippet.title}</h3>
                <p>{vidieo.snippet.channelTitle}</p>
                <p>
                  {new Date(vidieo.snippet.publishedAt).toLocaleDateString()}
                </p>
              </li>
            </Link>
          ))}
        </ul>
      )}
    </>
  );
}
