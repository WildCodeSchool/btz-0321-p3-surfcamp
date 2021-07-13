interface IProps {
  handleLogout: () => void;
}

export default function Sidebar({ handleLogout }: IProps) {
  return (
    <div className="h-24  lg:h-full lg:min-h-screen pt-32  lg:flex-col items-center align-middle w-full justify-between  flex lg:w-3/12">
      <ul className=" flex w-full flex-row lg:flex-col text-center  items-center justify-center align-middle">
        <li className=" cursor-pointer my-2 hover:underline text-xl w-full lg:text-left">
          Réglages
        </li>
        <li className="w-full cursor-pointer my-2 hover:underline text-xl lg:text-left">
          Gestion
        </li>{" "}
        <li className="w-full hover:text-red-600 my-2 text-xl  lg:text-left">
          <button onClick={handleLogout}>Déconnexion</button>
        </li>
      </ul>
    </div>
  );
}
