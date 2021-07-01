import SearchBar from "../searchBar/SearchBar";

export default function Header(): JSX.Element {
  return (
    <div className="w-full background-header flex justify-center align-middle items-center h-screen">
      <SearchBar />
    </div>
  );
}
