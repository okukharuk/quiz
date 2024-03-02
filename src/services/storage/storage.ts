import { TInput } from "../../models/quiz";

const APIStorage: TInput[] = [];

export const setStorage = (key: string, value: string) => {
  return localStorage.setItem(key, value);
};

export const getStorage = (key: string, isObject?: boolean) => {
  return isObject ? JSON.parse(localStorage.getItem(key) || "{}") : localStorage.getItem(key);
};

export const removeStorage = (key: string) => {
  localStorage.removeItem(key);
};

export const sendInformation = (input: TInput) => {
  APIStorage.push(input);
};
