export const loadStep = (fn: () => void) =>
  setTimeout(() => {
    h4.innerHTML += ".";
    fn();
  }, 5);
