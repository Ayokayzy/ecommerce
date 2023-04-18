export const getAuth = () => {
  const token = localStorage.getItem("__TOKEN");
  return token;
};
