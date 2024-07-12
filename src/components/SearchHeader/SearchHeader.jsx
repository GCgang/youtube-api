import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
export default function SearchHeader() {
  const [text, setText] = useState("");
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${e.target.value}`);
    inputRef.current.focus();
  };
  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Search..."
          value={text}
          onChange={handleChange}
        />
        <button>search</button>
      </form>
    </header>
  );
}
