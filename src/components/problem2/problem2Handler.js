export function addchild(
  parentName,
  parentFamilyFound,
  childName,
  childRelation
) {
  // console.log(
  //   "assafsdf",
  //   parentName,
  //   parentFamilyFound,
  //   childName,
  //   childRelation
  // );
  let y = [];
  if (checkIsMarried(parentFamilyFound)) {
    if (
      parentFamilyFound.father === parentName ||
      parentFamilyFound.mother === parentName
    ) {
      // parentFamilyFound.children.forEach((d) => {});
      let repeatingChild = parentFamilyFound.children.filter(
        (e) => e.father === childName || e.mother === childName
      );
      if (repeatingChild.length === 0) {
        y = [
          ...parentFamilyFound.children,
          {
            father: childRelation === "son" ? childName : "",
            mother: childRelation === "daughter" ? childName : "",
            children: [],
            relation: childRelation,
          },
        ];
      } else {
        y = [...parentFamilyFound.children];
      }
      // y = addingChildToFamily(
      //   parentFamilyFound,
      //   parentName,
      //   childName,
      //   childRelation,
      //   y
      // );
    } else {
      parentFamilyFound.children.forEach((d) => {
        if (
          checkIsMarried(d) &&
          (d.father === parentName || d.mother === parentName)
        ) {
          let repeatingChild = d.children.filter(
            (e) => e.father === childName || e.mother === childName
          );
          if (repeatingChild.length === 0) {
            y = [
              ...d.children,
              {
                father: childRelation === "son" ? childName : "",
                mother: childRelation === "daughter" ? childName : "",
                children: [],
                relation: childRelation,
              },
            ];
          } else {
            y = [...d.children];
          }
        }
        // y = addingChildToFamily(d, parentName, childName, childRelation, y);
      });
    }
  } else {
    y = [...parentFamilyFound.children];
  }

  return y;
}

function addingChildToFamily(family, parentName, childName, childRelation, y) {
  if (family.father === parentName || family.mother === parentName) {
    let repeatingChild = family.children.filter(
      (e) => e.father === childName || e.mother === childName
    );
    if (repeatingChild.length === 0) {
      y = [
        ...family.children,
        {
          father: childRelation === "son" ? childName : "",
          mother: childRelation === "daughter" ? childName : "",
          children: [],
          relation: childRelation,
        },
      ];
    } else {
      y = [...family.children];
    }
  }
  return y;
}

function checkIsMarried(family) {
  if (family.mother === "" || family.father === "") {
    return false;
  } else {
    return true;
  }
}
