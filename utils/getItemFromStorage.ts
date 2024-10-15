const getItemFromStorage = (
  item: string,
  window: Window & typeof globalThis
) => {
  if (
    typeof window !== "undefined" &&
    typeof window.sessionStorage.getItem(item) === "string"
  ) {
    return JSON.parse(window.sessionStorage.getItem(item) as string);
  }
};

export default getItemFromStorage;
