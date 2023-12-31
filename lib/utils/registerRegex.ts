export const ID = /^[a-z0-9]{6,12}$/;
export const EMAIL =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
export const PASSWORD = /^(?=.*[a-z])(?=.*[!@#%^&*])[A-Za-z\d!@#%^&*]{8,}$/;
export const PHONENUMBER = /^010([0-9]{4})([0-9]{4})$/;
