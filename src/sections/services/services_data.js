import diagnoza from "assets/services_images/diagnoza.jpg";
import testareHybrid from "assets/services_images/hybrid.jpg";
import intretinere from "assets/services_images/intretinere.jpeg";
import achizitie from "assets/services_images/achizitie.jpeg";
import wheels from "assets/services_images/wheels.jpg";
import navigation from "assets/services_images/navigation.jpg";
import temperature from "assets/services_images/temperature.jpeg";
import sell from "assets/services_images/sell.jpg";
import papers from "assets/services_images/papers.jpg";

export const ServicesData = [
  {
    id: 1,
    serviceName: setServiceText("Diagnoză ", "computerizată"),
    serviceImage: diagnoza,
  },
  {
    id: 2,
    serviceName: setServiceText("Testare a sistemului electric"),
    serviceImage: testareHybrid,
  },
  {
    id: 3,
    serviceName: setServiceText(
      "Lucrări de întreținere și reparație ",
      "(revizii, adăugare freon, reglare faruri, test baterie, înlocuire ambreiaj/volantă)."
    ),
    serviceImage: intretinere,
  },
  {
    id: 4,
    serviceName: setServiceText(
      "Verificare in vederea achiziției",
      " de autovehicul"
    ),
    serviceImage: achizitie,
  },
  {
    id: 5,
    serviceName: setServiceText(
      "Service roți  ",
      "(vulcanizare, înlocuire anvelope, echilibrare roti)"
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
    serviceName: setServiceText("Încărcare", "climă"),
    serviceImage: temperature,
  },
  {
    id: 8,
    serviceName: setServiceText(
      "Vânzarea de piese ",
      "necesare pentru înlocuiri"
    ),
    serviceImage: sell,
  },
  {
    id: 9,
    serviceName: setServiceText("Încheierea de polițe ", "RCA/CASCO"),
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
        Service-ul ofera o gamă largă de servicii pentru autovehicule, inclusiv
        pentru hibride și electrice, de până la 3,5t, dar să nu depășească masa
        proprie 3t și o înălțime maximă de 2.5m.
      </p>
    </>
  );
};
