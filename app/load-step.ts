export const loadStep = (fn: () => void) => {
  // loading dots ...
  h4.innerHTML += ".";
  setTimeout(fn);
};
