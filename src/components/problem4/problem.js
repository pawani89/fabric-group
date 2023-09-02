import { relations } from "../../utils/relationchk";
import { findRelative } from "../problem1/problem1Handler";
export function findRelation(firstName, secondName, family) {
  let relation;
  for (let i = 0; i < relations.length; i++) {
    let result = findRelative(firstName, family, relations[i]);
    if (relations[i] === "brother") {
      result = result.map((d) => d.father);
    }
    if (relations[i] === "sister") {
      result = result.map((d) => d.mother);
    }
    console.log("aksnahnrs: ", relations[i], result);
    if (result) {
      if (result.indexOf(secondName) !== -1) {
        relation = relations[i];
        break;
      }
    }
  }
  console.log("aksnahnrs: ", relation);
  return relation;
}
