export default function Problem4({
  setFirstName,
  firstName,
  setSecondName,
  secondName,
  findrelation,
  rel,
}) {
  return (
    <>
      <div>Problem 4</div>
      <input
        type="text"
        onChange={(e) => setFirstName(e.target.value)}
        value={firstName}
        data-testid="firstname"
      ></input>
      <input
        type="text"
        onChange={(e) => setSecondName(e.target.value)}
        value={secondName}
        data-testid="secondname"
      ></input>
      <button onClick={findrelation} data-testid="checkrelation">
        find relation
      </button>
      <div>Result : {rel}</div>
    </>
  );
}
