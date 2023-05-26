export const ProcessData = [
  {
    id: 1,
    number: 1,
    processTitle: "Programare",
    processContent:
      "Clientul programeaza o intalnire pentru constatare (fie online fie la telefon sau direct la service).",
  },
  {
    id: 2,
    number: 2,
    processTitle: "Preluare si constatare",
    processContent:
      "Cand  masina este adusa la constatare, de aici service-ul incepe sa se ocupe de tot: preluarea masinii, introducerea datelor in sistem (inclusiv cu solicitarile clientului, adica problemele ce clientul le sustine ca le are masina).",
  },
  {
    id: 3,
    number: 3,
    processTitle: "Verificare",
    processContent:
      "Odata intrata in service, se verifica zona/zonele cu probleme solicitate a fi reparate.",
  },
  {
    id: 4,
    number: 4,
    processTitle: "Proba de drum",
    processContent:
      "Daca vizual nu se observa nimic, atunci se iese intr-o proba de drum cu masina.",
  },
  {
    id: 5,
    number: 5,
    processTitle: "Identificare probleme si reparatii",
    processContent:
      "Dupa ce problema a fost identificata, masina intra in reparatie. Acest procedeu consta in identificarea de piese necesare schimbarii sau remedierea problemei acestora (daca se poate face acest lucru), mai apoi se comanda piesele (service-ul se ocupa de tot ce inseamna comandat si montat).",
  },
  {
    id: 6,
    number: 6,
    processTitle: "Predare masina",
    processContent:
      "Odata ce toate lucrarile mentionate anterior au fost finalizate, masina este predata clientului.",
  },
];

export const ProcessHeader = function () {
  return (
    <>
      Procesul nostru <span style={{ color: "red" }}>de lucru</span>
    </>
  );
};

export const ProcessSubHeader = function () {
  return (
    <p>
      Procedeul de lucru este unul simplu dar si cel mai corect. Eventual mai
      scris inca o propozitie sa arate mai nice si sa fie mai in ton cu
      celelalte descrieri.
    </p>
  );
};

export const ImageSliderTitle = function () {
  return (
    <>
      Imagini din <span style={{ color: "red" }}>service-ul nostru</span>
    </>
  );
};
