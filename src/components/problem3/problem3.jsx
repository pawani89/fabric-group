export default function Problem3({ findgirl, max }) {
  return (
    <>
      <div>Problem 3</div>
      <button onClick={findgirl} data-testid="checkMax">
        Find Girls
      </button>
      <div data-testid="max">Result:{max}</div>
    </>
  );
}
