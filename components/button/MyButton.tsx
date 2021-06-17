import Link from "next/link";

interface Iprop {
  inputbutton: string;
}

function MyButton({ inputbutton }: Iprop): JSX.Element {
  return (
    <div>
      <Link href="/">
        <a className="rounded-xl border-2 border-white text-white px-5 py-3 text-base">
          {inputbutton}
        </a>
      </Link>
    </div>
  );
}

export default MyButton;
