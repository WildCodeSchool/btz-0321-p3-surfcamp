interface Iprops {
  titleteam: string;
  textteam: string;
  titlevalue: string;
  textvalue: string;
  titlecontact: string;
  textcontact: string;
}

function Value({
  titleteam,
  textteam,
  titlevalue,
  textvalue,
  titlecontact,
  textcontact,
}: Iprops): JSX.Element {
  return (
    <div className="flex flex-col p-10 m-4 rounded-xl bg-gray-200">
      <h2 className="flex justify-start py-4 text-xl text-BlueCamp">
        {titleteam}
      </h2>
      <p className="flex text-left text-gray-500">{textteam}</p>
      <h2 className="flex justify-start py-4 text-xl text-BlueCamp">
        {titlevalue}
      </h2>
      <p className="flex text-left text-gray-500">{textvalue}</p>
      <h2 className="flex justify-center py-4 text-xl text-BlueCamp">
        {titlecontact}
      </h2>
      <p className="flex text-center text-gray-500">{textcontact}</p>
    </div>
  );
}

export default Value;
