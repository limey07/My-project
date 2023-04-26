import { ActionArgs } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import Blogs from "~/components/Blogs";
import Button from "~/components/button";
import supabase from "~/utils/supabase";

export const loader = async () => {
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

export default function Gaestebuch() {
  const { data } = useLoaderData();
  return (
    <Form method="post">
      <div>
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

        {data.map((gaestebuch: any, index: any) => (
          <Blogs
            key={index}
            text={gaestebuch.titel}
            titel={gaestebuch.text}
            datum={gaestebuch.zeitraum}
            name={gaestebuch.name}
          />
        ))}
      </div>
    </Form>
  );
}