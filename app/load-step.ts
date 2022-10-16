export const loadStep = (fn: () => void) => {
  setTimeout(fn);
  // loading dots ...
  h4.innerHTML += ".";
};
