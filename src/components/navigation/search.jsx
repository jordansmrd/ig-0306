import { Search } from "../../assets/icons";

export const SearchBar = () => {
  return (
    <div className="flex justify-center">
      <div className="search-bar m-2">
        <div className="input-container mx-2" style={{ maxWidth: "100%" }}>
          <button className="flex justify-center items-center px-2">
            <Search color="#868686" width={"16px"} />
          </button>
          <input
            style={{ paddingLeft: "0px" }}
            className="mobile-input"
            placeholder="Search"
          ></input>
        </div>
      </div>
    </div>
  );
};
