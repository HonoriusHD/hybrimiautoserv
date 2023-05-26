import { BiTimeFive } from "react-icons/bi";
import { GiMoneyStack } from "react-icons/gi";
import { BsTools } from "react-icons/bs";
import { BsPersonCheck } from "react-icons/bs";

export const BenefitsData = [
  {
    id: 4,
    icon: (
      <BsPersonCheck
        size="48"
        style={{
          border: "2px solid #10040E",
          padding: "4px",
          borderRadius: "4px",
        }}
      />
    ),
    subtitle: "",
    paragraph: "Personal tanar si calificat dornic de oferirea calitatii.",
  },
  {
    id: 2,
    icon: (
      <GiMoneyStack
        size="48"
        style={{
          border: "2px solid #10040E",
          padding: "4px",
          borderRadius: "4px",
        }}
      />
    ),
    subtitle: "",
    paragraph: "Preturi cinstite fara costuri ascunse.",
  },
  {
    id: 3,
    icon: (
      <BsTools
        size="48"
        style={{
          border: "2px solid #10040E",
          padding: "6px",
          borderRadius: "4px",
        }}
      />
    ),
    subtitle: "",
    paragraph: "Echipamente folosite noi si de ultima generatie.",
  },
  {
    id: 1,
    icon: (
      <BiTimeFive
        size="48"
        style={{
          border: "2px solid #10040E",
          padding: "4px",
          borderRadius: "4px",
        }}
      />
    ),
    subtitle: "",
    paragraph: "Promptitudine in raspuns.",
  },
];

export const title = function () {
  return (
    <>
      <span style={{ color: "#10040E" }}>De ce sa alegi </span>
      <span style={{ color: "red" }}>service-ul nostru</span>
    </>
  );
};
