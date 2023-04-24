import { json, type LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export async function loader({ params }: LoaderArgs) {
  const { countryName } = params;
  const url = new URL(`https://restcountries.com/v3.1/name/${countryName}`);
  const response = await fetch(url);
  const data = await response.json();
  return json({ data: data[0] });
}

export default function Country() {
  const { data } = useLoaderData();

  return (
    <>
      <div className="mx-[10px] ">
        <h1>Country:</h1>
        <div className="flex felx-row gap-96">
          <img className="w-40 h-40" src={data.flags.png} alt="" />

          <iframe
            title="google-map"
            className="h-40 w-[900px]"
            src={`https://www.google.com/maps/embed/v1/place?q=${data.name.common}&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`}
          ></iframe>
        </div>

        <div>{data.name.common}</div>
        <br />
        <h2>population:</h2>
        <div>{data.population}</div>
        <br />
        <h2>Capital:</h2>
        {data.capital}
        <br />
        <div>Länder die an {data.name.common} grenzen:</div>
        <ul>
          {data.borders.map((_countryName: any, index: any) => (
            <li key={index}>
              <div> {_countryName}</div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
