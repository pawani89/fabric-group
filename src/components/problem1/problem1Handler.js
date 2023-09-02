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
  findPaternalUncle,
  findMaternalUncle,
  findMaternalSister,
  findPaternalSister,
} from "../../utils/relationchk";

export function findRelative(name, family, relation) {
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
    // case "children":
    //   console.log("akansha jkkkkkkkk");
    //   result = findChildren(name, family);
    //   break;
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
    case "paternaluncles":
      result = findPaternalUncle(family);
      break;
    case "maternaluncles":
      result = findMaternalUncle(family);
      break;
    case "maternalaunts":
      result = findMaternalSister(family);
      break;
    case "paternalaunts":
      result = findPaternalSister(family);
      break;
    default:
      break;
  }
  return result;
}
