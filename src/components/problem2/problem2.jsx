export default function Problem2({
  parentName,
  setParentName,
  childName,
  setChildName,
  childRelation,
  setChilRelation,
  addchild1,
}) {
  const handleChangeP = (e) => {
    setParentName(e.target.value);
  };
  const handleChangeC = (e) => {
    setChildName(e.target.value);
  };

  const handleRelationSelectChange = (e) => {
    setChilRelation(e.target.value);
  };
  return (
    <>
      <input
        type="text"
        placeholder="name"
        value={parentName}
        onChange={(e) => handleChangeP(e)}
      ></input>
      <input
        type="text"
        placeholder="child name"
        value={childName}
        onChange={(e) => handleChangeC(e)}
      ></input>
      <select
        name="relations"
        id="relations"
        onChange={(e) => handleRelationSelectChange(e)}
        value={childRelation}
      >
        <option value="son">son</option>
        <option value="daughter">daughter</option>
      </select>
      <button onClick={addchild1}>Add Child</button>
    </>
  );
}
