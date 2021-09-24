import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const Search = ({ onKeyDown, onChange, value, onClickSearch }) => {
  return (
    <>
      <div className="focus:outline-none -ml-40 bg-gray-300 px-3 py-2 rounded-full flex flex-row justify-center items-center space-x-2">
        <button className='focus:outline-none' onClick={onClickSearch}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
        <input
          className="bg-gray-300 focus:outline-none w-36"
          type="text"
          placeholder="Search"
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={value}
        />
      </div>
    </>
  );
};

export default Search;
