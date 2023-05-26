import diagnoza from 'assets/services_images/diagnoza.jpeg';

export const ServicesData = [
  {
    id: 1,
    serviceName: setServiceText('Diagnoza ', 'computerizata'),
    serviceImage: diagnoza,
  },
  {
    id: 2,
    serviceName: setServiceText(
      'Testare a sistemului ',
      'electric al autovehiculelor'
    ),
    serviceImage: diagnoza,
  },
  {
    id: 3,
    serviceName: setServiceText(
      'Lucrari de intretinere si  ',
      'reparatie (revizii, adaugare freon, reglare faruri, test baterie, inlocuire ambreiaj/volanta).'
    ),
    serviceImage: diagnoza,
  },
  {
    id: 4,
    serviceName: setServiceText(
      'Verificare in vederea  ',
      'achizitiei de autovehicul'
    ),
    serviceImage: diagnoza,
  },
  {
    id: 5,
    serviceName: setServiceText(
      'Service roti  ',
      '(vulcanizare, inlocuire anvelope, echilibrare roti)'
    ),
    serviceImage: diagnoza,
  },
  {
    id: 6,
    serviceName: setServiceText(
      'Consilierea si sfatuirea ',
      ' cu clientul inainte de efectuarea oricarei lucrari suplimentare'
    ),
    serviceImage: diagnoza,
  },
  {
    id: 7,
    serviceName: setServiceText(
      'Vanzarea de piese ',
      'necesare pentru inlocuiri'
    ),
    serviceImage: diagnoza,
  },
  {
    id: 8,
    serviceName: setServiceText('Incheierea de polite ', 'RCA/CASCO'),
    serviceImage: diagnoza,
  },
];

function setServiceText(accentColorText, bodyColorText) {
  return (
    <>
      <span style={{ color: 'red' }}>{accentColorText}</span>
      <span style={{ color: '#FEFEFE' }}> {bodyColorText}</span>
    </>
  );
}

export const serviceTitle = function () {
  return (
    <>
      <span style={{ color: '#FEFEFE' }}>Lorem ipsum es machile de </span>
      <span style={{ color: 'red' }}>adepe los</span>
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
