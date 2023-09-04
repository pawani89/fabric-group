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
  findCousins,
} from "../../utils/relationchk";
function convertTostring(result) {
  let noEmpty = result.filter((d) => d !== "");
  return noEmpty.join(",");
}
export function findRelative(name, family, relation) {
  let result;
  switch (relation) {
    case "brother":
      result = convertTostring(findBrother(name, family).map((d) => d.father));
      // console.log("akaaaj ", result);
      // result = result.join(",");
      break;
    case "sister":
      result = convertTostring(findSister(name, family).map((d) => d.mother));
      // result = result.join(",");
      break;
    case "mother":
      result = findMother(name, family);
      break;
    case "father":
      result = findFather(name, family);
      break;
    case "children":
      // console.log("akansha jkkkkkkkk");
      result = convertTostring(findChildren(name, family));
      break;
    case "sons":
      result = convertTostring(findSons(name, family));
      // result = result.join(",");
      break;
    case "daughters":
      result = convertTostring(findDaughters(name, family));
      break;
    case "granddaughters":
      result = findGrandDaughters(name, family);
      break;
    case "sisterinlaw":
      result = convertTostring(findSisterInLaw(name, family));
      break;
    case "brotherinlaw":
      result = convertTostring(findBrotherInLaw(name, family));
      break;
    case "paternaluncles":
      result = convertTostring(findPaternalUncle(family));
      break;
    case "maternaluncles":
      result = convertTostring(findMaternalUncle(family));
      break;
    case "maternalaunts":
      result = convertTostring(findMaternalSister(family));
      break;
    case "paternalaunts":
      result = convertTostring(findPaternalSister(family));
      break;
    case "cousins":
      result = convertTostring(findCousins(name, family));
      break;

    default:
      break;
  }
  return result;
}
