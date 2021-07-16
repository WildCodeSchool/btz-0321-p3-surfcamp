interface IProps {
  setIsEdit: (error: (s: boolean) => boolean) => void;
}

export default function EditButton({ setIsEdit }: IProps): JSX.Element {
  return (
    <button
      className="focus:outline-none outline-none"
      onClick={() => setIsEdit((s: boolean) => !s)}
    >
      <img
        className="border-2 cursor-pointer transform active:translate-y-1 mx-2 shadow-xl active:translate-x-1 focus:outline-none outline-none border-gray-600 rounded-sm p-1 h-full  bg-gray-400 w-7"
        src="/images/edit.png"
        alt=""
      />
    </button>
  );
}
