export const isUserLoggedIn = () => !!localStorage.getItem('sessionInfo');
export const getUserLoggedIn = () => {
  const user = JSON.parse(localStorage.getItem('sessionInfo'));
  return user || {};
};
export const setUserLoggedIn = (user) => {
  localStorage.setItem('sessionInfo', JSON.stringify(user));
};
