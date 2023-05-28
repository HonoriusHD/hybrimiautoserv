import diagnoza from "assets/services_images/diagnoza.jpeg";
import testareHybrid from "assets/services_images/hybrid.jpeg";
import intretinere from "assets/services_images/intretinere.jpeg";
import achizitie from "assets/services_images/achizitie.jpeg";
import wheels from "assets/services_images/wheels.jpg";
import navigation from "assets/services_images/navigation.jpeg";
import temperature from "assets/services_images/temperature.jpeg";
import sell from "assets/services_images/sell.jpg";
import papers from "assets/services_images/papers.jpg";

export const ServicesData = [
  {
    id: 1,
    serviceName: setServiceText("Diagnoza ", "computerizata"),
    serviceImage: diagnoza,
  },
  {
    id: 2,
    serviceName: setServiceText(
      "Testare a sistemului ",
      "electric al autovehiculelor(la masini Hybrid)"
    ),
    serviceImage: testareHybrid,
  },
  {
    id: 3,
    serviceName: setServiceText(
      "Lucrari de intretinere si  ",
      "reparatie (revizii, adaugare freon, reglare faruri, test baterie, inlocuire ambreiaj/volanta)."
    ),
    serviceImage: intretinere,
  },
  {
    id: 4,
    serviceName: setServiceText(
      "Verificare in vederea ",
      "achizitiei de autovehicul"
    ),
    serviceImage: achizitie,
  },
  {
    id: 5,
    serviceName: setServiceText(
      "Service roti  ",
      "(vulcanizare, inlocuire anvelope, echilibrare roti)"
    ),
    serviceImage: wheels,
  },
  {
    id: 6,
    serviceName: setServiceText("Montare ", " navigații și camere marșarier"),
    serviceImage: navigation,
  },
  {
    id: 7,
    serviceName: setServiceText("Incarcare", "clima"),
    serviceImage: temperature,
  },
  {
    id: 8,
    serviceName: setServiceText(
      "Vanzarea de piese ",
      "necesare pentru inlocuiri"
    ),
    serviceImage: sell,
  },
  {
    id: 9,
    serviceName: setServiceText("Incheierea de polite ", "RCA/CASCO"),
    serviceImage: papers,
  },
];

function setServiceText(accentColorText, bodyColorText) {
  return (
    <>
      <span style={{ color: "red" }}>{accentColorText}</span>
      <span style={{ color: "#FEFEFE" }}> {bodyColorText}</span>
    </>
  );
}

export const serviceTitle = function () {
  return (
    <>
      <span style={{ color: "#FEFEFE" }}>Descopera </span>
      <span style={{ color: "red" }}>serviciile </span>
      <span style={{ color: "#FEFEFE" }}>noastre </span>
    </>
  );
};

export const serviceParagraphs = function () {
  return (
    <>
      <p>
        Service-ul ofera o gama larga de servicii pentru autovehicule (chiar si
        hibride/electrice) de pana la 3,5t, dar sa nu depaseasca masa proprie 3t
        si o inaltime maxima de 2.5m si anume.
      </p>
    </>
  );
};
