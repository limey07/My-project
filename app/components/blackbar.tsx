import Button from "./button";

export default function Blackbar() {
  return (
    <div className="w-14 sm:w-24 bg-black flex flex-col  ">
      <img
        className="rounded-full w-20"
        src="https://banner2.cleanpng.com/20180626/pfb/kisspng-circle-brand-white-logo-clip-art-kuma-5b328eaed82991.7254364215300399828854.jpg"
        alt=""
      />
      {/*       <a className="buttton" href="/">
        Blog
      </a>
      <a className="buttton" href="/countries">
        Countries
      </a> */}
      <Button to="/countries">Countries</Button>
      <Button to="/rechner">Taschenrechner</Button>
      <Button to="/weather">weather</Button>
      <Button to="/gaestebuch">Blog</Button>
    </div>
  );
}
