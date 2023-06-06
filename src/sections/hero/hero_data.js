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
        pentru service-ul nostru. Tineri, ambițioși și cu dorința de a ajuta,
        garantăm siguranța și profesionalismul de care mașina ta are nevoie.
      </p>
    );
  },
  companyExpertiseTitle: function () {
    return (
      <>
        Expertiză pentru
        <span style={{ color: "red" }}> 3 tipuri</span> de motorizari
      </>
    );
  },
  companyExpertiseParagraphs: function () {
    return (
      <p>
        Dorința de a ajuta, experiența acumulată de-a lungul timpului, dar și
        studiile în acest domeniu, ne fac să vă oferim un pachet de servicii de
        cea mai înaltă calitate. Evoluția tehnologiei a creat un cadru propice
        pentru depășirea oricăror probleme. Personalul nostru urmează studiile
        și cursurile profesionale în continuare, acest fapt contribuind la
        actualizarea informatiiilor legate de tipul tuturor autovehiculelor.
      </p>
    );
  },
  expertiseImages: [
    { id: 1, title: "Autovehicule electrice", carImage: electricImage },
    { id: 2, title: "Autovehicule hybrid", carImage: hybridImage },
    { id: 3, title: "Autovehicule pe benzină/diesel", carImage: fuelImage },
  ],
};
