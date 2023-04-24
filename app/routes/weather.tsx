import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export async function loader() {
  const url = new URL("https://api.data.gov.sg/v1/environment/air-temperature");
  const response = await fetch(url);
  const data = await response.json();
  return json({ data });
}

export default function Weather() {
  const { data } = useLoaderData();
  return (
    <div>
      <ul>
        {data.metadata.stations.map((stations: any, index: any) => (
          <li key={index}>
            <div>{stations.name}</div>
          </li>
        ))}
      </ul>
      <ul>
        {data.items[0].readings.map((readings: any, index: any) => (
          <li key={index}>
            <div>{readings.value}</div>
          </li>
        ))}
      </ul>
      Button
    </div>
  );
}
