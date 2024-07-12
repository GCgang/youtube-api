import { useState, useRef } from "react";
export default function SearchHeader() {
  const [text, setText] = useState("");
  const inputRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    setText("");
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
