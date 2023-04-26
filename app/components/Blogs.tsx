export default function blogs({ titel, text, name, datum }: any) {
  return (
    <div className="border-2 border-black rounded-lg flex flex-col w-full">
      <h1 className="text-[25px]">{titel}</h1>
      <p className="text-[16px] p-4">{datum}</p>
      <p className="text-[16px] p-4">{name}</p>
      <p className="text-[16px] p-4">{text}</p>
    </div>
  );
}
