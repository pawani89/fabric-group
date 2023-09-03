import familyObject from "./family";
import { findFamilyForName, addFamilyForName } from "./utils/relationchk.js";
import { findRelation } from "./components/problem4/problem";
import { findRelative } from "./components/problem1/problem1Handler";
import { addchild } from "./components/problem2/problem2Handler";
import { findGirlChild } from "./components/problem3/problem3Handler";
import { useState } from "react";
import Problem1 from "./components/problem1/problem1";
import Problem2 from "./components/problem2/problem2";
import Problem3 from "./components/problem3/problem3";
import Problem4 from "./components/problem4/problem4";

function App() {
  const [family, setFamily] = useState({ ...familyObject });
  const [name, setName] = useState("");
  const [relation, setRelation] = useState("select");
  const [childRelation, setChilRelation] = useState("select");
  const [childName, setChildName] = useState("");
  const [parentName, setParentName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [relationResult, setRelationResult] = useState("");
  const [max, setMax] = useState("");
  const [rel, setRel] = useState("");
  const findFamily = () => {
    let familyFound = findFamilyForName(name, family);
    // console.log("akaakkaka: ", familyFound, name);
    const x = findRelative(name, familyFound, relation);
    // console.log("akansha family: ", x);
    const result =
      x === "undefined" || x?.length === 0 ? "no such relation found" : x;
    setRelationResult(result);
  };

  const addchild1 = () => {
    // console.log("ak family before", family);
    let parentFamilyFound = findFamilyForName(parentName, family, {});
    // console.log("akaka:parentFamilyFound ", parentFamilyFound);
    let newS = addchild(
      parentName,
      parentFamilyFound,
      childName,
      childRelation
    );
    // console.log("akaka: ", newS);
    let x = addFamilyForName(family, parentName, newS);
    // console.log("x ak:", x);
    setFamily({ ...x });
  };
  const findgirl = () => {
    // console.log("akaajs: ", family);
    let x = findGirlChild(family, []);
    // console.log("akaka:", x);
    setMax(x);
  };

  const findrelation = () => {
    let familyFound = findFamilyForName(firstName, family);
    // console.log("akansha fn sn: ", firstName, secondName);
    let relation = findRelation(firstName, secondName, familyFound);
    // console.log("akansha relation: ", relation);
    setRel(relation);
  };

  return (
    <div className="App">
      <div>All Problems:</div>
      <Problem1
        name={name}
        setName={setName}
        setRelation={setRelation}
        relation={relation}
        findFamily={findFamily}
        result={relationResult}
      />
      <br />
      <Problem2
        parentName={parentName}
        setParentName={setParentName}
        childName={childName}
        setChildName={setChildName}
        childRelation={childRelation}
        setChilRelation={setChilRelation}
        addchild1={addchild1}
      />
      <br />
      <Problem3 findgirl={findgirl} max={max}></Problem3>
      <br />
      <Problem4
        setFirstName={setFirstName}
        firstName={firstName}
        setSecondName={setSecondName}
        secondName={secondName}
        findrelation={findrelation}
        rel={rel}
      />
    </div>
  );
}

export default App;
