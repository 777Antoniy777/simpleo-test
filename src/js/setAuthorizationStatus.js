const setAuthorizationStatus = (status) => {
  window.sessionStorage.setItem('authorizationStatus', `${status}`);

  return window.sessionStorage.getItem('authorizationStatus');
};

export {setAuthorizationStatus};
