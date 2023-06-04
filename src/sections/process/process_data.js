export const ProcessData = [
  {
    id: 1,
    number: 1,
    processTitle: "Programare",
    processContent:
      "Clientul programează o întâlnire pentru constatare (fie online fie la telefon sau direct la service).",
  },
  {
    id: 2,
    number: 2,
    processTitle: "Preluare si constatare",
    processContent:
      "Când  mașina este adusă la constatare, de aici service-ul începe să se ocupe de tot: preluarea mașinii, introducerea datelor in sistem (inclusiv cu solicitările clientului, adică problemele ce clientul le susține că le are mașină).",
  },
  {
    id: 3,
    number: 3,
    processTitle: "Verificare",
    processContent:
      "Odată intrată în service, se verifică zona/zonele cu probleme solicitate a fi reparate.",
  },
  {
    id: 4,
    number: 4,
    processTitle: "Proba de drum",
    processContent:
      "Dacă vizual nu se observă nimic, atunci se iese într-o proba de drum cu mașina.",
  },
  {
    id: 5,
    number: 5,
    processTitle: "Identificare probleme si reparații",
    processContent:
      "După ce problema a fost identificată, mașina intră în reparație. Acest procedeu constă in identificarea de piese necesare schimbării sau remedierea problemei acestora, dacă se poate face acest lucru. Mai apoi se comandă piesele necesare înlocuirii. Aici nu trebuie să îți faci griji deoarece service-ul nostru se ocupă de tot ce înseamnă identificat, comandat și montat",
  },
  {
    id: 6,
    number: 6,
    processTitle: "Predare mașina",
    processContent:
      "Odată ce toate lucrările menționate anterior au fost finalizate, mașina este predată clientului, bineînțeles după realizarea tuturor testelor și verificărilor finale.",
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
      Procedeul de lucru este unul simplu dar și cel mai corect. În cazul în
      care nu știai cum se desfășoară la noi activitatea, mai jos îți vom
      prezența pașii prin care trece mașina ta cât timp este la noi.
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
