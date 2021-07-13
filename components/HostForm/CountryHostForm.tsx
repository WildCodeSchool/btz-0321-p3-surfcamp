import { useQuery } from "react-query";
import { country } from "../../API/requests";

export default function CountryHostForm(): JSX.Element {
  const { data, isLoading, isError } = useQuery("getCountries", () =>
    country.getAll()
  );
  console.log(data);

  return (
    <div>
      <label>
        {!isLoading && (
          <select className="border border-gray-600 w-full outline-none focus:outline-none rounded-sm px-4 text-xs">
            {data?.map((country) => {
              return (
                <option
                  className="w-4/12"
                  value="Select a country"
                  key={country.id}
                >
                  {country.name}
                </option>
              );
            })}
          </select>
        )}
      </label>
    </div>
  );
}
