import Link from "next/link";

interface Iprop {
  inputbutton: string;
}

function MyButton({ inputbutton }: Iprop): JSX.Element {
  return (
    <div>
      <Link href="/">
        <a className="rounded-xl border border-BlueCamp text-BlueCamp px-5 py-2 text-base">
          {inputbutton}
        </a>
      </Link>
    </div>
  );
}

export default MyButton;
