import { useQuery } from "react-query";
import { city } from "../../API/requests";

export default function CityHostForm(): JSX.Element {
  const { data, isLoading, isError } = useQuery("getCities", () =>
    city.getAll()
  );
  console.log(data);

  return (
    <div>
      <label>
        {!isLoading && (
          <select className="border border-gray-600 w-full outline-none focus:outline-none rounded-sm px-4 text-xs">
            {data?.map((city) => {
              return (
                <option
                  className="w-4/12"
                  value="Select a country"
                  key={city.id}
                >
                  {city.name}
                </option>
              );
            })}
          </select>
        )}
      </label>
    </div>
  );
}
