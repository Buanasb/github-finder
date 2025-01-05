import React, { useState } from "react";

interface SearchProps {
  searchUser: ((text: string) => Promise<void>) | undefined;
  clearUsers: (() => void) | undefined;
  showClear: number | boolean;
  showAlert: ((msg: string, type: string) => void) | undefined;
}

const Search: React.FC<SearchProps> = ({
  searchUser,
  clearUsers,
  showClear,
  showAlert,
}) => {
  const [text, setText] = useState<string>("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text.length) {
      showAlert && showAlert("Please Input Something!", "light");
    } else {
      searchUser && searchUser(text);
      setText("");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search Users..."
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {showClear && (
        <button className="btn btn-light btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
