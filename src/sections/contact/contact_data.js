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
      contact: "0743 398 109",
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
  ],
};
