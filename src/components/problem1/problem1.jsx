function Problem1({ name, setName, setRelation, relation, findFamily }) {
  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleSelectChange = (e) => {
    setRelation(e.target.value);
  };
  return (
    <>
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => handleChange(e)}
      ></input>
      <label for="relations">Relation:</label>
      <select
        name="relations"
        id="relations"
        onChange={(e) => handleSelectChange(e)}
        value={relation}
      >
        <option value="select">Select</option>
        <option value="brother">brother</option>
        <option value="sister">sister</option>
        <option value="mother">mother</option>
        <option value="father">father</option>
        <option value="children">children</option>
        <option value="sons">sons</option>
        <option value="daughters">daughters</option>
        <option value="sisterinlaw">sisterinlaw</option>
        <option value="brotherinlaw">brotherinlaw</option>
        <option value="paternaluncles">paternaluncles</option>
        <option value="maternaluncles">maternaluncles</option>
        <option value="paternalaunts">paternalaunts</option>
        <option value="maternalaunts">maternalaunts</option>
      </select>
      <button onClick={findFamily}>Find Family</button>
    </>
  );
}

export default Problem1;
