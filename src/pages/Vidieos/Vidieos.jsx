import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <div>Home</div>
      <Link to={`/vidieo/:id`}>video details</Link>
    </>
  );
}
