import { findDaughters } from "../../utils/relationchk";

export function findGirlChild(family, a) {
  family.children.forEach((d, ind) => {
    if (d.children.length !== 0) {
      let noOfDaughters = findDaughters(family.mother, family).length;
      if (noOfDaughters > 0) {
        a.push(family.mother + ":" + noOfDaughters);
      }
    }
    findGirlChild(d, a);
  });
  let uniqueList = a.filter((a, i, ar) => i === ar.indexOf(a));
  let maxNoOfDaughters = maxDaughters(uniqueList);
  return maxNoOfDaughters;
}
function maxDaughters(uniqueList) {
  let max = uniqueList.reduce(function (p, v) {
    let pI = getValueAfterColon(p);
    let vI = getValueAfterColon(v);
    return pI > vI ? p : v;
  }, "");
  // console.log("akansha max:", max);
  let x = getValueAfterColon(max);
  let allMAx = uniqueList.filter((d) => getValueAfterColon(d) === x);
  return allMAx;
}

function getValueAfterColon(val) {
  let v = parseInt(val.split(":").pop());
  return v;
}
