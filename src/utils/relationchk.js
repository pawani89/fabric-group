import family from "../family";

let familyR;
export function findFamilyForName(name, family) {
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
      findFamilyForName(name, d);
    });
  }

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

export function findBrother(name, family) {
  if (family.children.length === 1) {
    // console.log("no sibling of ", name);
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

export function findSister(name, family) {
  //   console.log("akanshan family", family);
  if (family.children.length === 1) {
    // console.log("no sibling of ", name);
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
export function findFather(name, family) {
  //   console.log("a mother :  ");
  return family.father;
}
export function findMother(name, family) {
  return family.mother;
}

export function findChildren(name, family) {
  if (family.children.length > 0) {
    // console.log("achildren:", family.children);
    return family.children;
  } else {
    // console.log("a no children");
    return [];
  }
}
export function findSons(name, family) {
  if (family.children.length > 0) {
    let sons = family.children.filter((d) => d.relation === "son");
    // console.log("a sons are : ", sons);
    return sons;
  } else {
    return [];
  }
}
export function findDaughters(name, family) {
  if (family.children.length > 0) {
    let daughter = family.children.filter((d) => d.relation === "daughter");
    // console.log("a daughter are : ", name, daughter);
    return daughter;
  } else {
    console.log("a no children");
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
