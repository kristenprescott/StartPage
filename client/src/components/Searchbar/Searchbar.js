import "./Searchbar.css";
import { useState } from "react";

export default function Searchbar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleFocus = (e) => {
    e.target.placeholder = "";
  };

  const handleBlur = (e) => {
    e.target.value = "";
    e.target.placeholder = "search...";
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    e.target.value = " ";
  };

  const handleSubmit = (e) => {
    setSearchTerm(e.target.value);
    console.log("onSubmit searchTerm value: ", e.target.value);
  };

  return (
    <div className="Component Searchbar">
      <label htmlFor="google searchbar"></label>
      <input
        autoComplete="off"
        type="text"
        id="searchbar"
        placeholder="search..."
        value={searchTerm}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onSubmit={handleSubmit}
        onKeyUp={(e) => {
          e.preventDefault();

          if (e.keyCode === 13) {
            console.log("Enter key pressed/released.");

            console.log(`Searching Google for ${searchTerm} in new window.`);
            window.open(`http://www.google.com/search?q=${searchTerm}`);
          }
        }}
      />
    </div>
  );
}
