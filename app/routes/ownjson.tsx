export default function Ownjson() {
  const uebermich = {
    name: "Milan",
    alter: 15,
    hobbies: [
      {
        bezeichnung: "Basketball",
        beschreibung: "Ballsportart",
      },
      {
        bezeichnung: "Volleyball",
        beschreibung: "auch Ballsportart",
      },
    ],
    bild: "https://media.newyorker.com/photos/59095bb86552fa0be682d9d0/master/w_2560%2Cc_limit/Monkey-Selfie.jpg",
    adresse: {
      ort: "Minden",
      str_Nummer: "Am Born",
      hausnummer: 3,
    },
    haarfarbe: "braun",
    hatBeine: true,
  };

  return (
    <div className="m-2">
      <div className="flex flex-row">
        <div className="font-semibold ">
          <h1 className="font-bold">Über mich:</h1>
          Bild
          <img className="w-20" src={uebermich.bild} alt="" />
        </div>
      </div>
      <br />
      Name:<div>{uebermich.name}</div>
      Alter:<div>{uebermich.alter}</div>
      Meine Hobbys:
      <div>
        <ul>
          {uebermich.hobbies.map((hobby: any, index: any) => (
            <li key={index}>
              <div>{hobby.beschreibung}</div>
              <div>{hobby.bezeichnung}</div>
            </li>
          ))}
        </ul>
        <ul>
          <li>{uebermich.adresse.ort}</li>
          <li>{uebermich.adresse.str_Nummer}</li>
          <li>{uebermich.adresse.hausnummer}</li>
        </ul>
      </div>
    </div>
  );
}
