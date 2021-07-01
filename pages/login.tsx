import Login from "../components/Login/Login";

export default function login(): JSX.Element {
  return (
    <div className="backgroundSearchBar  ">
      <div className="z-50 w-full h-screen bg-black bg-opacity-70 flex justify-center items-center">
        <Login />
      </div>
    </div>
  );
}
