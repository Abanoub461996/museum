import { InputText } from "primereact/inputtext";
import { SearchBarWrapper } from "./SearchBar.styles";
import { TbWorldSearch } from "react-icons/tb";
import { useState } from "react";

const SearchBar = ({ submitSearch }) => {
  const [value, setValue] = useState<string>("");

  return (
    <SearchBarWrapper>
      <div className="search__element">
        <InputText
          id="username"
          value={value}
          placeholder="EX: Vincent van Gogh"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setValue(e.target.value)
          }
        ></InputText>
        <button className="search__btn" onClick={()=>submitSearch(value)}>
          <TbWorldSearch />
        </button>
      </div>
    </SearchBarWrapper>
  );
};
export default SearchBar;
