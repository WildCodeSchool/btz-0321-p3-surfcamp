import Image from "next/image";
import { useState } from "react";
import EditButton from "../../Buttons/EditButton";
interface IProps {
  picture?: string;
}
export default function avatarPicture({ picture }: IProps): JSX.Element {
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div className="w-4/12 hidden  lg:flex flex-col align-middle justify-start items-center h-full">
      <Image
        src={picture || "/avatar.png"}
        width={150}
        height={150}
        quality={100}
        className="rounded-full"
        alt="avatar"
      />
      <div className="flex w-full justify-between">
        <div className="w-1/2">
          {isEdit && <input placeholder="url..." type="text"></input>}
        </div>
        <div className="w-1/2">
          {" "}
          <EditButton setIsEdit={setIsEdit} />
        </div>
      </div>
    </div>
  );
}
