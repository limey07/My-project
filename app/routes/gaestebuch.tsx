import { ActionArgs, LoaderArgs } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import Blogs from "~/components/Blogs";
import Button from "~/components/button";
import supabase from "~/utils/supabase";

export const loader = async ({ request }: LoaderArgs) => {
  const url = new URL(request.url);
  const search = url.searchParams.get("search");
  const searchoption = url.searchParams.get("searchoption");

  if (search) {
    const { data, error } = await supabase
      .from("gaestebuch")
      .select()
      .ilike(searchoption!, `%${search}%`);
    `<span class="highlight">${search}</span>`;
    return { data };
  }
  const { data } = await supabase.from("gaestebuch").select();
  return { data };
};

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();
  const name = formData.get("name");
  const titel = formData.get("titel");
  const text = formData.get("text");
  const zeitraum = formData.get("zeitraum");
  await supabase.from("gaestebuch").insert([{ name, titel, text, zeitraum }]);
  return {};
}

/* 
const data = await response.json();
    console.log(data);
 
    setName("");
    setEmail("");
    setMessage(""); */

export default function Gaestebuch() {
  const { data } = useLoaderData();
  return (
    <div className="text-center sm:w-full md:w-full">
      <Form method="post">
        <div className="flex flex-col gap-3 m-3 max-w-xl">
          <div>
            <input
              className="border-2 border-black rounded-lg"
              name="zeitraum"
              type="date"
            />
          </div>
          <div>
            <input
              className="border-2 border-black rounded-lg w-1/2"
              name="name"
              type="text"
              placeholder="Name"
            />

            <input
              className="border-2 border-black rounded-lg w-1/2"
              type="text"
              name="titel"
              placeholder="Titel"
            />
          </div>
          <div>
            <textarea
              className="w-full border-2 border-black rounded-lg"
              name="text"
              cols={5}
            ></textarea>
          </div>
          <button
            className="border-2 border-black bg-black text-white
          "
          >
            Save
          </button>
        </div>
      </Form>
      <Form method="get">
        <input
          className="border-2 border-black m-3 rounded-lg"
          type="text"
          placeholder="search"
          name="search"
        />
        <button className="border-2 border-black rounded-lg bg-black text-white w-24">
          Search
        </button>

        <select
          className=" border-2 border-black rounded-lg m-3"
          name="searchoption"
          id="searchoption"
        >
          <option value="">choose search option</option>
          <option value="text">Text</option>
          <option value="name">Name</option>
          <option value="titel">Titel</option>
        </select>
      </Form>

      {data.map((gaestebuch: any, index: any) => (
        <Blogs
          key={index}
          text={gaestebuch.text}
          titel={gaestebuch.titel}
          datum={gaestebuch.zeitraum}
          name={gaestebuch.name}
        />
      ))}

      {data.length > 0 ? (
        <p>{data.length} Einträge gefunden</p>
      ) : (
        <p>Keine Treffer</p>
      )}
    </div>
  );
}
