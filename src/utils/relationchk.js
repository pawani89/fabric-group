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
      familyR = { ...family };
    } else {
      family.children.forEach((d) => {
        if (d.father === name || d.mother === name) {
          familyR = { ...family };
        }

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
  return subFamily;
}
export function findBrother(name, family) {
  if (name === familyObject.mother || name === familyObject.father) {
    return [];
  } else {
    let subFamily = findSubFamily(name, family)[0];
    if (family.children.length === 1) {
      return [];
    } else if (
      (subFamily?.mother === name && subFamily.relation === "son") ||
      (subFamily?.father === name && subFamily.relation === "daughter")
    ) {
      return [];
    } else {
      let x = family.children.filter((d) => {
        return d.father !== name && d.mother !== name && d.relation === "son";
      });
      if (x.length > 0) {
        return x;
      } else {
        return [];
      }
    }
  }
}

export function findSister(name, family) {
  if (name === familyObject.mother || name === familyObject.father) {
    return [];
  } else {
    let subFamily = findSubFamily(name, family)[0];
    if (family.children.length === 1) {
      return [];
    } else if (
      (subFamily?.mother === name && subFamily.relation === "son") ||
      (subFamily?.father === name && subFamily.relation === "daughter")
    ) {
      return [];
    } else {
      let x = family.children.filter((d) => {
        return (
          d.father !== name && d.mother !== name && d.relation === "daughter"
        );
      });
      if (x.length > 0) {
        return x;
      } else {
        return [];
      }
    }
  }
}
export function findFather(name, family) {
  if (name === familyObject.father || name === familyObject.mother) {
    return [];
  } else {
    let subFamily = findSubFamily(name, family)[0];
    let relation = subFamily?.relation;
    if (
      (relation === "son" && name === subFamily?.father) ||
      (relation === "daughter" && name === subFamily?.mother)
    ) {
      return [family.father];
    } else {
      return [];
    }
  }
}

// will give mother of son and son's wife
export function findMother(name, family) {
  if (name === familyObject.father || name === familyObject.mother) {
    return [];
  } else {
    let subFamily = findSubFamily(name, family)[0];
    let relation = subFamily?.relation;
    if (
      (relation === "son" && name === subFamily?.father) ||
      (relation === "daughter" && name === subFamily?.mother)
    ) {
      return [family.mother];
    } else {
      return [];
    }
  }
}

export function findChildren(name, family) {
  // if (family.mother === name || family.father === name) {
  //   if (family.children.length > 0) {
  //     // console.log("achildren:", family.children);
  //     return family.children;
  //   } else {
  //     // console.log("a no children");
  //     return [];
  //   }
  // } else {
  //   let respectiveFamily = family.children.filter(
  //     (d) => d.father === name || d.mother === name
  //   );
  //   console.log(
  //     "akansha family!!!!: ",
  //     respectiveFamily,
  //     family.children,
  //     name
  //   );
  //   if (respectiveFamily[0].children.length !== 0) {
  //     return respectiveFamily.children;
  //   } else {
  //     return [];
  //   }

  // }
  let list = [];
  if (name === familyObject.father || name === familyObject.mother) {
    if (family.children.length !== 0) {
      list = family.children.map((d) => {
        if (d.relation === "son") {
          return d.father;
        } else {
          return d.mother;
        }
      });
      return list;
    } else {
      return [];
    }
  } else {
    let fam = findSubFamily(name, family)[0];
    // console.log(fam, name, family);
    if (fam.children.length !== 0) {
      list = fam.children.map((d) => {
        if (d.relation === "son") {
          return d.father;
        } else {
          return d.mother;
        }
      });
      return list;
    } else {
      return [];
    }
  }
}
export function findSons(name, family) {
  if (name === familyObject.mother || name === familyObject.father) {
    if (family.children.length > 0) {
      // console.log("s,jdhaskdhasjdhasdaaaa", family.children);
      let sons = family.children.filter((d) => d.relation === "son");
      sons = sons.map((d) => d.father);
      return sons;
    } else {
      return [];
    }
  } else {
    let subFamily = findSubFamily(name, family)[0];
    if (subFamily?.children.length > 0) {
      // console.log("s,jdhaskdhasjdhasdaaaa", family.children);
      let sons = subFamily?.children.filter((d) => d.relation === "son");
      sons = sons.map((d) => d.father);
      return sons;
    } else {
      return [];
    }
  }
}
export function findDaughters(name, family) {
  if (name === familyObject.mother || name === familyObject.father) {
    if (family.children.length > 0) {
      let daughter = family.children.filter((d) => d.relation === "daughter");
      daughter = daughter.map((d) => d.mother);
      return daughter;
    } else {
      return [];
    }
  } else if (family.mother === name || family.father === name) {
    if (family.children.length > 0) {
      let daughter = family.children.filter((d) => d.relation === "daughter");
      daughter = daughter.map((d) => d.mother);
      return daughter;
    } else {
      return [];
    }
  } else {
    let subFamily = findSubFamily(name, family)[0];
    // console.log("a sub family:  ", subFamily);
    if (subFamily?.children.length > 0) {
      let daughter = subFamily?.children.filter(
        (d) => d.relation === "daughter"
      );
      daughter = daughter.map((d) => d.mother);
      return daughter;
    } else {
      return [];
    }
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
  } else {
    return [];
  }
}
export function findSisterInLaw(name, family) {
  if (family.children.length === 1) {
    return [];
  } else {
    let subFamily = findSubFamily(name, family)[0];
    let sisterinlaw = [];

    if (subFamily?.mother === name && subFamily?.relation === "son") {
      let sister = findSister(subFamily?.father, family);
      sister.forEach((d) => sisterinlaw.push(d.mother));
      let brother = findBrother(name, family);
      brother.forEach((d) => sisterinlaw.push(d.mother));
    } else if (
      (subFamily?.father === name && subFamily?.relation === "son") ||
      (subFamily?.mother === name && subFamily?.relation === "daughter")
    ) {
      let brother = findBrother(name, family);
      brother.forEach((d) => sisterinlaw.push(d.mother));
    } else {
      sisterinlaw = [];
    }

    return sisterinlaw;
  }
}
export function findBrotherInLaw(name, family) {
  // console.log("akash : ", name, family);
  if (family.children.length === 1) {
    return [];
  } else {
    let subFamily = findSubFamily(name, family)[0];

    let brotherinlaw = [];
    if (subFamily?.mother === name && subFamily?.relation === "son") {
      let brothers = findBrother(subFamily?.father, family);
      brothers.forEach((d) => brotherinlaw.push(d.father));
    } else if (
      subFamily?.father === name &&
      subFamily?.relation === "daughter"
    ) {
      let brothers = findBrother(subFamily?.mother, family);
      brothers.forEach((d) => brotherinlaw.push(d.father));
    } else if (subFamily?.father === name && subFamily?.relation === "son") {
      let sister = findSister(name, family);
      sister.forEach((d) => brotherinlaw.push(d.father));
    } else {
      brotherinlaw = [];
    }

    return brotherinlaw;
  }
}

export function findPaternalUncle(family) {
  let father = family.father;
  if (family.relation === "son") {
    let fatherFamily = findFamilyForName(father, familyObject);
    let paternalUncle1 = findBrother(father, fatherFamily).map((d) => d.father);
    let paternalUncle2 = findBrotherInLaw(father, fatherFamily);
    return [...paternalUncle1, ...paternalUncle2];
  } else {
    return [];
  }
}
export function findMaternalUncle(family) {
  let mother = family.mother;
  if (family.relation === "daughter") {
    let motherFamily = findFamilyForName(mother, familyObject);
    let maternalUncle1 = findBrother(mother, motherFamily).map((d) => d.father);
    // console.log("aanak: ", maternalUncle1);
    let maternalUncle2 = findBrotherInLaw(mother, motherFamily);
    return [...maternalUncle1, ...maternalUncle2];
  } else {
    return [];
  }
}

export function findPaternalSister(family) {
  let father = family.father;
  if (family.relation === "son") {
    let fatherFamily = findFamilyForName(father, familyObject);
    let paternalAunt1 = findSister(father, fatherFamily).map((d) => d.mother);
    let paternalAunt2 = findSisterInLaw(father, fatherFamily);
    return [...paternalAunt1, ...paternalAunt2];
  } else {
    return [];
  }
}
export function findMaternalSister(family) {
  let mother = family.mother;
  if (family.relation === "daughter") {
    let motherFamily = findFamilyForName(mother, familyObject);
    let maternalAunt1 = findSister(mother, motherFamily).map((d) => d.mother);
    let maternalAunt2 = findSisterInLaw(mother, motherFamily);
    return [...maternalAunt1, ...maternalAunt2];
  } else {
    return [];
  }
}
