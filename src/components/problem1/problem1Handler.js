import {
  findSister,
  findBrother,
  findSisterInLaw,
  findBrotherInLaw,
  findChildren,
  findDaughters,
  findFather,
  findMother,
  findSons,
  findGrandDaughters,
} from "../../utils/relationchk";

export function findRelation(name, family, relation) {
  let result;
  switch (relation) {
    case "brother":
      result = findBrother(name, family);
      break;
    case "sister":
      result = findSister(name, family);
      break;
    case "mother":
      result = findMother(name, family);
      break;
    case "father":
      result = findFather(name, family);
      break;
    case "children":
      result = findChildren(name, family);
      break;
    case "sons":
      result = findSons(name, family);
      break;
    case "daughters":
      result = findDaughters(name, family);
      break;
    case "granddaughters":
      result = findGrandDaughters(name, family);
      break;
    case "sisterinlaw":
      result = findSisterInLaw(name, family);
      break;
    case "brotherinlaw":
      result = findBrotherInLaw(name, family);
      break;
    default:
      break;
  }
  return result;
}
