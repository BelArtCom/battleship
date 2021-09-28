export function getRandomInt(max) {
  let rand = Math.random() * (max + 1) + 1;
  return Math.floor(rand);
}

export const isPositiveInt = (str) =>
  [...str].every((char) => char >= "0" && char <= "9") && Number(str) > 0;
