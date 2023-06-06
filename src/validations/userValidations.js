export const ValidateUserEmail = ({ email }) => {
  const mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  return !email.match(mailformat);
};
export const ValidateUserPhone = ({ phone }) => {
  const mailformat = /^(?=.*\d)[\d ]+$/;
  return !phone.match(mailformat);
};
