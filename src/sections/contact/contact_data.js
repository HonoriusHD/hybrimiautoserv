export const ContactData = {
  contactTitle: function () {
    return (
      <>
        <span style={{ color: "#10040E" }}>Unde ne puteti</span>
        <span style={{ color: "red" }}> gasi</span>
      </>
    );
  },
  contactParagraph: function () {
    return (
      <p>
        Pentru orice tip de informatii, noi va stam la dispozitie. Puteti lua
        legatura direct cu noi, folosind datele de mai jos.
      </p>
    );
  },

  contactText: [
    {
      id: 1,
      contactType: "Telefon",
      contact: "+40 (758) 840 708",
    },
    {
      id: 2,
      contactType: "Email",
      contact: "hybrimiautoserv@gmail.com",
    },
    {
      id: 3,
      contactType: "Adresa",
      contact: "Comuna Apahida, Strada Vlad Tepes nr. 4",
    },
    {
      id: 4,
      contactType: "Program de lucru",
      contact: "L-V 09:00-18:00, S: Cu programare, D: Inchis",
    },
  ],
};
