import electricImage from "assets/electricImage.jpg";
import hybridImage from "assets/hybridImage.jpg";
import fuelImage from "assets/fuelImage.jpg";

export const HeroData = {
  heroTitle: function () {
    return (
      <>
        Dacă mașina ta are o problemă, la noi vei găsi
        <span style={{ color: "red" }}> soluția </span>
      </>
    );
  },
  heroParagraphs: function () {
    return (
      <p>
        Diversitatea autovehiculelor din ziua de azi nu reprezintă o problemă
        pentru service-ul nostru. Tineri, ambitiosi și cu dorinta de a ajuta,
        garantăm siguranța și profesionalismul de care mașina ta are nevoie.
      </p>
    );
  },
  companyExpertiseTitle: function () {
    return (
      <>
        Expertiza pentru
        <span style={{ color: "red" }}> 3 tipuri</span> de monitorizari
      </>
    );
  },
  companyExpertiseParagraphs: function () {
    return (
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s.
      </p>
    );
  },
  expertiseImages: [
    { id: 1, title: "Masini electrice", carImage: electricImage },
    { id: 2, title: "Masini hybrid", carImage: hybridImage },
    { id: 3, title: "Masini pe benzina/diesel", carImage: fuelImage },
  ],
};
