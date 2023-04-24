import Blogs from "~/components/Blogs";

export default function Index() {
  return (
    <div>
      <div className=" bg-white w-full text-[30px] p-4 font-semibold ">
        <h1>Blog Einträge</h1>
        <Blogs
          text="Ein Urlaub in der Antarktis bietet einzigartige Tierbeobachtungen und spektakuläre Landschaften, 
        aber es ist wichtig, das empfindliche Ökosystem zu schützen. Die meisten Besucher reisen mit Expeditionskreuzfahrten 
        und müssen strenge Umweltvorschriften einhalten. Die Klimabedingungen sind extrem und es kann schwierig sein, sich an 
        die Dunkelheit zu gewöhnen. Ein Antarktis-Urlaub ist eine Herausforderung, aber auch eine unvergessliche Erfahrung."
          titel="20.10.2023: Urlaub in die Antarktis"
        />
        <br />
        <Blogs
          text="Ein Ausflug nach Ägypten bietet eine unvergessliche Reise in die Vergangenheit. Das Land ist voll 
        von faszinierenden historischen Stätten wie den Pyramiden von Gizeh und dem Tal der Könige. Es gibt auch viele beeindruckende 
        kulturelle Sehenswürdigkeiten wie den Karnak-Tempel und den Luxor-Tempel. Ägypten hat auch wunderschöne Strände und 
        Schnorchelmöglichkeiten im Roten Meer zu bieten. Es ist wichtig, sich über die kulturellen und sozialen Erwartungen des Landes
         zu informieren und sich angemessen zu kleiden. Ein Ausflug nach Ägypten ist eine Reise zurück in die Zeit und eine unvergessliche 
         Erfahrung für jeden Reisenden."
          titel="15.3.2022: Urlaub in Ägypten"
        />
      </div>
    </div>
  );
}
