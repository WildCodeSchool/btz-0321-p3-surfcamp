import Image from "next/image";
import { useState } from "react";
import EditButton from "../../Buttons/EditButton";
import { SetStateAction, Dispatch } from "react";
interface IProps {
  picture?: string;
  url: string | undefined;
  setUrl: Dispatch<SetStateAction<string | undefined>>;
}
export default function AvatarPicture({
  picture,
  url,
  setUrl,
}: IProps): JSX.Element {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="w-4/12 hidden rounded-full  lg:flex flex-col align-middle justify-start items-center h-full">
      {/* <Image
        src={picture || "/avatar.png"}
        width={150}
        height={150}
        quality={100}
        className="rounded-full"
        alt="avatar"
      /> */}
      <div className="rounded-full relative h-36 w-32">
        <img
          className=" relative rounded-full"
          src={picture || "/avatar.png"}
          alt=""
        />
      </div>
      <div className="flex w-full justify-between">
        <div className="w-1/2">
          {isEdit && (
            <input
              onChange={(e) => setUrl(e.target.value)}
              placeholder={picture || "url..."}
              type="text"
            ></input>
          )}
        </div>
        <div className="w-1/2">
          <EditButton setIsEdit={setIsEdit} />
        </div>
      </div>
    </div>
  );
}
