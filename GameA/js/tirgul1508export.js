const plusFun = (n1, n2) => n1 + n2;
const minusFun = (n1, n2) => n1 - n2;
const kefelFun = (n1, n2) => n1 * n2;
const hilukFun = (n1, n2) => n1 / n2;

const randon = (min, max) => {
  min = Math.ceil(min); // round up
  max = Math.floor(max); // round down
  return Math.floor(Math.random() * (max - min + 1) + min);
};
export { plusFun, minusFun, hilukFun, kefelFun, randon };
