// import localStorageHelpers from './localStorageHelpers';
// const { AddDataToLocalStorage, RemoveDataFromLocalStorage } = localStorageHelpers;

const AddDataToLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

const GetDataFromLocalStorage = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};

const RemoveDataFromLocalStorage = (key) => {
  localStorage.removeItem(key);
};

export {
  RemoveDataFromLocalStorage,
  AddDataToLocalStorage,
  GetDataFromLocalStorage,
};
