import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

export async function loader() {
  const url = new URL("https://restcountries.com/v3.1/region/europe");
  const response = await fetch(url);
  const data = await response.json();
  return json({ data });
}

export default function Countries() {
  const { data } = useLoaderData();
  return (
    <div className="m-6 ">
      {" "}
      <h1>Countries</h1>
      <ul>
        {data.map((country: any, index: any) => (
          <li key={index}>
            <Link to={country.name.common}>{country.name.common}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
