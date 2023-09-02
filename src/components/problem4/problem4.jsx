export default function Problem4({
  setFirstName,
  firstName,
  setSecondName,
  secondName,
  findrelation,
}) {
  return (
    <>
      <input
        type="text"
        onChange={(e) => setFirstName(e.target.value)}
        value={firstName}
      ></input>
      <input
        type="text"
        onChange={(e) => setSecondName(e.target.value)}
        value={secondName}
      ></input>
      <button onClick={findrelation}>find relation</button>
    </>
  );
}
