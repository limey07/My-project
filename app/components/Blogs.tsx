export default function blogs({ titel, text, name, datum }: any) {
  return (
    <div>
      <div className="border-2 border-black rounded-lg flex flex-col w-full m-3">
        <div className="flex flex-row justify-end">
          <p className="p-4 text-xs"> {datum}</p>
          <p className=" p-4 text-xs"> {name}</p>
        </div>
        <h1 className="text-[25px] m-3"> {titel}</h1>
        <p className="text-[16px] p-4"> {text}</p>
      </div>
    </div>
  );
}
