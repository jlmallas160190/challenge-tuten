export const isUserLoggedIn = () => !!localStorage.getItem('sessionInfo');
export const getUserLoggedIn = () => {
  const user = JSON.parse(localStorage.getItem('sessionInfo'));
  return user || {};
};
