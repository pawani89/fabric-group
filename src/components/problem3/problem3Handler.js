import { findDaughters } from "../../utils/relationchk";
let a = {};
export function findGirlChild(family) {
  family.children.forEach((d) => {
    if (d.children.length !== 0) {
      let n = findDaughters(family.mother, family).length;
      if (n !== 0) {
        a = {
          ...a,
          [d.mother]: n,
        };
      }
    }
    findGirlChild(d);
  });
  return a;
}
