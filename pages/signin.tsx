import SignInForm from "../components/SignInForm/SignInForm";

export default function signin(): JSX.Element {
  return (
    <div className="background-header">
      <div className="w-full h-screen bg-black bg-opacity-70 flex justify-center items-center">
        <SignInForm />
      </div>
    </div>
  );
}
