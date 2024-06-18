// import localStorageHelpers from './localStorageHelpers';
// const { AddDataToLocalStorage, RemoveDataFromLocalStorage } = localStorageHelpers;

const AddDataToLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  };

const RemoveDataFromLocalStorage = (key) => {
  localStorage.removeItem(key);
};

export default {RemoveDataFromLocalStorage, AddDataToLocalStorage};