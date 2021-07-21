import Link from "next/link";
import Image from "next/image";

import svgcle from "../../public/Images/cle.svg";

interface Iprop {
  inputbutton: string;
}

function MyButton({ inputbutton }: Iprop): JSX.Element {
  return (
    <div>
      <Link href="/profile">
        <a
          href="/profile"
          className="rounded-xl border-2 bg-BlueCamp border-white text-white px-5 py-3 text-base flex"
        >
          <Image src={svgcle} alt="img button" className="items-center" />
          <div className="ml-2 flex items-center">{inputbutton}</div>
        </a>
      </Link>
    </div>
  );
}

export default MyButton;
