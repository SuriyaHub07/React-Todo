export const getStoredToken = () => {
  const token = localStorage.getItem('token');
  console.log('getStoredToken:', token); // ✅ shows the real value
  return token;
};

export const setStoredToken = (token) => {
  localStorage.setItem('token',token);
};

export const removeStoredToken = () => {
  const token = localStorage.removeItem('token');
  console.log("remove",token)
  return token
};