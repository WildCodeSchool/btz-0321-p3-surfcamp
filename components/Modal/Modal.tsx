import { SetStateAction } from "react";

interface IProps {
  message: string;
  setIsModal: (isModal: boolean) => void;
}

export default function Modal({ message, setIsModal }: IProps): JSX.Element {
  return (
    <div className="w-screen h-screen absolute left-0 top-0 z-50 bg-black flex flex-col items-center justify-center align-middle bg-opacity-50">
      <div className="w-96 h-96 relative text-white rounded-xl text-4xl flex flex-col text-center items-center align-middle justify-center bg-BlueCamp">
        <span
          onClick={() => setIsModal(false)}
          className="text-4xl absolute top-10 right-10 z-40 text-white"
        >
          X
        </span>
        {message}
      </div>
    </div>
  );
}
