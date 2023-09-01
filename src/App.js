import logo from "./logo.svg";
import "./App.css";
import familyObject from "./family";
import { findFamilyForName, addFamilyForName } from "./utils/relationchk.js";
import { findRelation } from "./components/problem1/problem1Handler";
import { addchild } from "./components/problem2/problem2Handler";
import { findGirlChild } from "./components/problem3/problem3Handler";
import { useState } from "react";
import Problem1 from "./components/problem1/problem1";
import Problem2 from "./components/problem2/problem2";
import Problem3 from "./components/problem3/problem3";

function App() {
  const [family, setFamily] = useState({ ...familyObject });
  const [name, setName] = useState("");
  const [relation, setRelation] = useState("select");
  const [childRelation, setChilRelation] = useState("select");
  const [childName, setChildName] = useState("");
  const [parentName, setParentName] = useState("");

  const findFamily = () => {
    let familyFound = findFamilyForName(name, family, {});
    // console.log("akakaka familyFound", familyFound);
    const x = findRelation(name, familyFound, relation);
    console.log("akansha family: ", x);
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
    console.log("akaajs: ", family);
    let x = findGirlChild(family);
    console.log("akaka:", x);
  };
  return (
    <div className="App">
      <Problem1
        name={name}
        setName={setName}
        setRelation={setRelation}
        relation={relation}
        findFamily={findFamily}
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
      <Problem3 findgirl={findgirl}></Problem3>
    </div>
  );
}

export default App;
