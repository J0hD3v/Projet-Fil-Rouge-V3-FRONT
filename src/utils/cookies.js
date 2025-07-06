import Cookies from 'js-cookie';

export const getAuthToken = () => {
  return Cookies.get('connect.sid');
};

export const setAuthToken = (token) => {
  Cookies.set('connect.sid', token, { expires: 7 }); // Expire dans 7 jours
};

export const removeAuthToken = () => {
  Cookies.remove('connect.sid');
};