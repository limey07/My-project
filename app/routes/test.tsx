import { useLoaderData } from "@remix-run/react";
import Blogs from "~/components/Blogs";
import supabase from "~/utils/supabase";

export const loader = async () => {
  const { data } = await supabase.from("messages").select();
  return { data };
};

export default function Test() {
  const { data } = useLoaderData();
  return (
    <div className="flex fley-col gap-3">
      {data.map((message: any, index: any) => (
        <Blogs key={index} text={message.message} titel={message.titel} />
      ))}
    </div>
  );
}
