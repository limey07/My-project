export default function blogs({ titel, text }: any) {
  return (
    <div className="border-2 border-black rounded-lg">
      <h1 className="text-[25px]">{titel}</h1>

      <p className="text-[16px] p-4">{text}</p>
    </div>
  );
}
