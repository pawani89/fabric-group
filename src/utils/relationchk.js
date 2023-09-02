import { findRelative } from "../components/problem1/problem1Handler";
import familyObject from "../family";
export const relations = [
  "brother",
  "sister",
  "mother",
  "father",
  "children",
  "sons",
  "daughters",
  "sisterinlaw",
  "brotherinlaw",
  "paternaluncles",
  "maternaluncles",
  "paternalaunts",
  "maternalaunts",
];
export function findFamilyForName(name, family) {
  let familyR;
  function traverse(name, family) {
    if (name === "Shan" || name === "Aga") {
      // console.log("chkkkkk aaaa:if ", family);
      familyR = { ...family };
    } else {
      // console.log("chkkkkk aaaa: ", family);
      family.children.forEach((d) => {
        if (d.father === name || d.mother === name) {
          // console.log("chkkkkk aaaa:un ", family);
          familyR = { ...family };
        }
        //   console.log("chkkkkk aaaa:be ", family);
        traverse(name, d);
      });
    }
  }
  traverse(name, family);
  return familyR;
}

export function addFamilyForName(family, name, newS) {
  if (name === "Shan" || name === "Aga") {
    family.children = [...newS];
  } else {
    family.children.forEach((d) => {
      if (d.father === name || d.mother === name) {
        d.children = [...newS];
      }
      addFamilyForName(d, name, newS);
    });
  }

  return family;
}
function findSubFamily(name, family) {
  let subFamily = family.children.filter(
    (d) => name === d.father || name === d.mother
  );
  console.log("akansas: ", subFamily);
  return subFamily;
}
export function findBrother(name, family) {
  if (name === familyObject.mother || name === familyObject.father) {
    return [];
  } else {
    if (family.children.length === 1) {
      // console.log("no sibling of ", name);
      return [];
    } else if (findSubFamily(name, family).mother === name) {
      return [];
    } else {
      let x = family.children.filter((d) => {
        return d.father !== name && d.mother !== name && d.relation === "son";
      });
      if (x.length > 0) {
        //   console.log("a brothers: ", x);
        return x;
      } else {
        //   console.log("a no brothers: ");
        return [];
      }
    }
  }
}

export function findSister(name, family) {
  //   console.log("akanshan family", family);
  if (name === familyObject.mother || name === familyObject.father) {
    return [];
  } else {
    if (family.children.length === 1) {
      // console.log("no sibling of ", name);
    } else if (findSubFamily(name, family).father === name) {
      return [];
    } else {
      let x = family.children.filter((d) => {
        return (
          d.father !== name && d.mother !== name && d.relation === "daughter"
        );
      });
      if (x.length > 0) {
        //   console.log("a sisters: ", x);
        return x;
      } else {
        //   console.log("a no sisters: ");
        return [];
      }
    }
  }
}
export function findFather(name, family) {
  //   console.log("a mother :  ");
  return [family.father];
}
export function findMother(name, family) {
  return [family.mother];
}

// export function findChildren(name, family) {
//   if (family.mother === name || family.father === name) {
//     if (family.children.length > 0) {
//       // console.log("achildren:", family.children);
//       return family.children;
//     } else {
//       // console.log("a no children");
//       return [];
//     }
//   } else {
//     let respectiveFamily = family.children.filter(
//       (d) => d.father === name || d.mother === name
//     );
//     console.log(
//       "akansha family!!!!: ",
//       respectiveFamily,
//       family.children,
//       name
//     );
//     if (respectiveFamily[0].children.length !== 0) {
//       return respectiveFamily.children;
//     } else {
//       return [];
//     }
//   }
// }
export function findSons(name, family) {
  if (family.children.length > 0) {
    let sons = family.children.filter((d) => d.relation === "son");
    sons = sons.map((d) => d.father);
    return sons;
  } else {
    return [];
  }
}
export function findDaughters(name, family) {
  if (family.children.length > 0) {
    let daughter = family.children.filter((d) => d.relation === "daughter");
    // console.log("a daughter are : ", name, daughter);
    daughter = daughter.map((d) => d.mother);
    return daughter;
  } else {
    // console.log("a no children");
    return [];
  }
}
export function findGrandDaughters(name, family) {
  if (family.children.length > 0) {
    let grandChildren = family.children.filter((d) => d.children.length > 0);
    let granddaughters;
    grandChildren.forEach((d) => {
      granddaughters.push(findDaughters(name, d));
    });
    return granddaughters;
    // console.log("a daughter are : ", granddaughters);
  } else {
    // console.log("a no children");
    return [];
  }
}
export function findSisterInLaw(name, family) {
  if (family.children.length === 1) {
    // console.log("a no siblings");
    return [];
  } else {
    let brothers = findBrother(name, family);
    let sisterinlaw = [];
    brothers.forEach((d) => sisterinlaw.push(d.mother));
    return sisterinlaw;
  }
}
export function findBrotherInLaw(name, family) {
  if (family.children.length === 1) {
    // console.log("a no siblings");
  } else {
    let sisters = findSister(name, family);
    let brotherinlaw = [];
    sisters.forEach((d) => brotherinlaw.push(d.father));
    return brotherinlaw;
  }
}

export function findPaternalUncle(family) {
  let father = family.father;
  let fatherFamily = findFamilyForName(father, familyObject);
  let paternalUncle1 = findBrother(father, fatherFamily).map((d) => d.father);
  let paternalUncle2 = findBrotherInLaw(father, fatherFamily);
  return [...paternalUncle1, ...paternalUncle2];
}
export function findMaternalUncle(family) {
  let mother = family.mother;
  let motherFamily = findFamilyForName(mother, familyObject);
  let maternalUncle1 = findBrother(mother, motherFamily).map((d) => d.father);
  let maternalUncle2 = findBrotherInLaw(mother, motherFamily);
  return [...maternalUncle1, ...maternalUncle2];
}

export function findPaternalSister(family) {
  let father = family.father;
  let fatherFamily = findFamilyForName(father, familyObject);
  let paternalAunt1 = findSister(father, fatherFamily).map((d) => d.mother);
  let paternalAunt2 = findSisterInLaw(father, fatherFamily);
  return [...paternalAunt1, ...paternalAunt2];
}
export function findMaternalSister(family) {
  let mother = family.mother;
  let motherFamily = findFamilyForName(mother, familyObject);
  let maternalAunt1 = findSister(mother, motherFamily).map((d) => d.mother);
  let maternalAunt2 = findSisterInLaw(mother, motherFamily);
  return [...maternalAunt1, ...maternalAunt2];
}
