import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const appTitle = screen.getByText(/All Problems:/i);
  expect(appTitle).toBeInTheDocument();
});

describe("Problem 1 : find relation", () => {
  it("brother/s when found", () => {
    render(<App />);
    let nameInputField = screen.getByTestId("name");
    fireEvent.change(nameInputField, {
      target: { value: "Ish" },
    });
    let selectInputField = screen.getByTestId("relations");
    fireEvent.change(selectInputField, {
      target: { value: "brother" },
    });
    let result = screen.getByTestId("result-family");
    let button = screen.getByTestId("findfamily");
    fireEvent.click(button);
    const resultField = screen.getByText(/Result: Chit,Vich/i);
    expect(resultField).toBeInTheDocument();
    // console.log("aksanah resi:", result);
  });
  it("brother/s when not found", () => {
    render(<App />);
    let nameInputField = screen.getByTestId("name");
    let selectInputField = screen.getByTestId("relations");
    let button = screen.getByTestId("findfamily");
    fireEvent.change(nameInputField, {
      target: { value: "Aga" },
    });
    fireEvent.change(selectInputField, {
      target: { value: "brother" },
    });
    fireEvent.click(button);
    const resultField = screen.getByText(/Result: no such relation found/i);

    expect(resultField).toBeInTheDocument();
    fireEvent.change(nameInputField, {
      target: { value: "Lika" },
    });
    fireEvent.change(selectInputField, {
      target: { value: "brother" },
    });
    fireEvent.click(button);
    const resultField1 = screen.getByText(/Result: no such relation found/i);
    expect(resultField1).toBeInTheDocument();
  });
  it("sister/s when found", () => {
    render(<App />);
    let nameInputField = screen.getByTestId("name");
    fireEvent.change(nameInputField, {
      target: { value: "Vila" },
    });
    let selectInputField = screen.getByTestId("relations");
    fireEvent.change(selectInputField, {
      target: { value: "sister" },
    });
    let button = screen.getByTestId("findfamily");
    fireEvent.click(button);
    const resultField = screen.getByText(/Result: Kpila/i);
    expect(resultField).toBeInTheDocument();
    // console.log("aksanah resi:", result);
  });
  it("sister/s when not found", () => {
    render(<App />);
    let nameInputField = screen.getByTestId("name");
    fireEvent.change(nameInputField, {
      target: { value: "Aga" },
    });
    let selectInputField = screen.getByTestId("relations");
    fireEvent.change(selectInputField, {
      target: { value: "sister" },
    });
    // let result = screen.getByTestId("result-family");
    let button = screen.getByTestId("findfamily");
    fireEvent.click(button);
    // console.log("aksanah resi:", result.value);
    const resultField1 = screen.getByText(/Result: no such relation found/i);
    expect(resultField1).toBeInTheDocument();
    fireEvent.change(nameInputField, {
      target: { value: "Drita" },
    });
    fireEvent.change(selectInputField, {
      target: { value: "sister" },
    });
    const resultField2 = screen.getByText(/Result: no such relation found/i);
    expect(resultField2).toBeInTheDocument();
  });
  it("mother/s when found", () => {
    render(<App />);
    let nameInputField = screen.getByTestId("name");
    fireEvent.change(nameInputField, {
      target: { value: "Drita" },
    });
    let selectInputField = screen.getByTestId("relations");
    fireEvent.change(selectInputField, {
      target: { value: "mother" },
    });
    let button = screen.getByTestId("findfamily");
    fireEvent.click(button);
    const resultField = screen.getByText(/Result: Ambi/i);
    expect(resultField).toBeInTheDocument();

    // console.log("aksanah resi:", result);
  });
  it("mother/s when not found", () => {
    render(<App />);
    let nameInputField = screen.getByTestId("name");
    fireEvent.change(nameInputField, {
      target: { value: "Aga" },
    });
    let selectInputField = screen.getByTestId("relations");
    fireEvent.change(selectInputField, {
      target: { value: "mother" },
    });
    // let result = screen.getByTestId("result-family");
    let button = screen.getByTestId("findfamily");
    fireEvent.click(button);
    // console.log("aksanah resi:", result.value);
    const resultField1 = screen.getByText(/Result: no such relation found/i);
    expect(resultField1).toBeInTheDocument();
    fireEvent.change(nameInputField, {
      target: { value: "Jaya" },
    });
    fireEvent.change(selectInputField, {
      target: { value: "mother" },
    });
    fireEvent.click(button);
    const resultField2 = screen.getByText(/Result: no such relation found/i);
    expect(resultField2).toBeInTheDocument();
  });
  it("father/s when found", () => {
    render(<App />);
    let nameInputField = screen.getByTestId("name");
    fireEvent.change(nameInputField, {
      target: { value: "Drita" },
    });
    let selectInputField = screen.getByTestId("relations");
    fireEvent.change(selectInputField, {
      target: { value: "father" },
    });
    let button = screen.getByTestId("findfamily");
    fireEvent.click(button);
    const resultField = screen.getByText(/Result: Chit/i);
    expect(resultField).toBeInTheDocument();

    // console.log("aksanah resi:", result);
  });
  it("father/s when not found", () => {
    render(<App />);
    let nameInputField = screen.getByTestId("name");
    fireEvent.change(nameInputField, {
      target: { value: "Aga" },
    });
    let selectInputField = screen.getByTestId("relations");
    fireEvent.change(selectInputField, {
      target: { value: "father" },
    });
    // let result = screen.getByTestId("result-family");
    let button = screen.getByTestId("findfamily");
    fireEvent.click(button);
    // console.log("aksanah resi:", result.value);
    const resultField1 = screen.getByText(/Result: no such relation found/i);
    expect(resultField1).toBeInTheDocument();
    fireEvent.change(nameInputField, {
      target: { value: "Jaya" },
    });
    fireEvent.change(selectInputField, {
      target: { value: "father" },
    });
    fireEvent.click(button);
    const resultField2 = screen.getByText(/Result: no such relation found/i);
    expect(resultField2).toBeInTheDocument();
  });
  it("son/s when found", () => {
    render(<App />);
    let nameInputField = screen.getByTestId("name");
    fireEvent.change(nameInputField, {
      target: { value: "Drita" },
    });
    let selectInputField = screen.getByTestId("relations");
    fireEvent.change(selectInputField, {
      target: { value: "sons" },
    });
    let button = screen.getByTestId("findfamily");
    fireEvent.click(button);
    const resultField = screen.getByText(/Result: jata/i);
    expect(resultField).toBeInTheDocument();
    fireEvent.change(nameInputField, {
      target: { value: "Jaya" },
    });
    fireEvent.change(selectInputField, {
      target: { value: "sons" },
    });
    fireEvent.click(button);
    const resultField2 = screen.getByText(/Result: jata/i);
    expect(resultField2).toBeInTheDocument();

    fireEvent.change(nameInputField, {
      target: { value: "Aga" },
    });
    fireEvent.change(selectInputField, {
      target: { value: "sons" },
    });
    fireEvent.click(button);
    const resultField1 = screen.getByText(/Result: Ish,Chit,Vich/i);
    expect(resultField1).toBeInTheDocument();
  });
  it("daughter/s when found", () => {
    render(<App />);
    let nameInputField = screen.getByTestId("name");
    let selectInputField = screen.getByTestId("relations");
    let button = screen.getByTestId("findfamily");
    fireEvent.click(button);

    fireEvent.change(nameInputField, {
      target: { value: "Aga" },
    });
    fireEvent.change(selectInputField, {
      target: { value: "daughters" },
    });
    fireEvent.click(button);
    const resultField1 = screen.getByText(/Result: Satya/i);
    expect(resultField1).toBeInTheDocument();
  });
  it("daughter/s when not found", () => {
    render(<App />);
    let nameInputField = screen.getByTestId("name");
    fireEvent.change(nameInputField, {
      target: { value: "Drita" },
    });
    let selectInputField = screen.getByTestId("relations");
    fireEvent.change(selectInputField, {
      target: { value: "daughters" },
    });
    let button = screen.getByTestId("findfamily");
    fireEvent.click(button);
    const resultField = screen.getByText(/Result: Driya/i);
    expect(resultField).toBeInTheDocument();
    fireEvent.change(nameInputField, {
      target: { value: "Jaya" },
    });
    fireEvent.change(selectInputField, {
      target: { value: "daughters" },
    });
    fireEvent.click(button);
    const resultField2 = screen.getByText(/Result: Driya/i);
    expect(resultField2).toBeInTheDocument();
  });
  it("sisterinlaw/s when found", () => {
    render(<App />);
    let nameInputField = screen.getByTestId("name");
    let selectInputField = screen.getByTestId("relations");
    let button = screen.getByTestId("findfamily");
    fireEvent.click(button);

    // input name is of daughter
    fireEvent.change(nameInputField, {
      target: { value: "Satya" },
    });
    fireEvent.change(selectInputField, {
      target: { value: "sisterinlaw" },
    });
    fireEvent.click(button);
    const resultField1 = screen.getByText(/Result: Ambi,Lika/i);
    expect(resultField1).toBeInTheDocument();

    // input name is of son
    fireEvent.change(nameInputField, {
      target: { value: "Vich" },
    });
    fireEvent.change(selectInputField, {
      target: { value: "sisterinlaw" },
    });
    fireEvent.click(button);
    const resultField2 = screen.getByText(/Result: Ambi/i);
    expect(resultField2).toBeInTheDocument();

    // husbands sister
    fireEvent.change(nameInputField, {
      target: { value: "Lika" },
    });
    fireEvent.change(selectInputField, {
      target: { value: "sisterinlaw" },
    });
    fireEvent.click(button);
    const resultField3 = screen.getByText(/Result: Satya/i);
    expect(resultField3).toBeInTheDocument();

    // when input name is sons wife
    fireEvent.change(nameInputField, {
      target: { value: "krpi" },
    });
    fireEvent.change(selectInputField, {
      target: { value: "sisterinlaw" },
    });
    fireEvent.click(button);
    const resultField4 = screen.getByText(/Result: asva,mina/i);
    expect(resultField4).toBeInTheDocument();

    //when input name is of daughters husband
    fireEvent.change(nameInputField, {
      target: { value: "satvy" },
    });
    fireEvent.change(selectInputField, {
      target: { value: "sisterinlaw" },
    });
    fireEvent.click(button);
    const resultField5 = screen.getByText(/Result: krpi,mina/i);
    expect(resultField5).toBeInTheDocument();

    //add a sister and then check for when input name is of daughters husband
    let parentname = screen.getByTestId("parentname");
    let childname = screen.getByTestId("childname");
    let relationtoadd = screen.getByTestId("relationtoadd");
    let button2 = screen.getByTestId("addchild");
    fireEvent.change(parentname, {
      target: { value: "Satya" },
    });
    fireEvent.change(childname, {
      target: { value: "akansha" },
    });
    fireEvent.change(relationtoadd, {
      target: { value: "daughter" },
    });
    fireEvent.click(button2);
    fireEvent.change(nameInputField, {
      target: { value: "satvy" },
    });
    fireEvent.change(selectInputField, {
      target: { value: "sisterinlaw" },
    });
    fireEvent.click(button);
    const resultField6 = screen.getByText(/Result: akansha,krpi,mina/i);
    expect(resultField6).toBeInTheDocument();
  });
  it("sisterinlaw/s when not found", () => {
    render(<App />);
    let nameInputField = screen.getByTestId("name");
    let selectInputField = screen.getByTestId("relations");
    let button = screen.getByTestId("findfamily");

    // when have no sibling
    fireEvent.change(nameInputField, {
      target: { value: "gru" },
    });
    fireEvent.change(selectInputField, {
      target: { value: "sisterinlaw" },
    });
    fireEvent.click(button);
    const resultField2 = screen.getByText(/Result: no such relation found/i);
    expect(resultField2).toBeInTheDocument();

    // when have no brother
    fireEvent.change(nameInputField, {
      target: { value: "Vila" },
    });
    fireEvent.change(selectInputField, {
      target: { value: "sisterinlaw" },
    });
    fireEvent.click(button);
    const resultField3 = screen.getByText(/Result: no such relation found/i);
    expect(resultField3).toBeInTheDocument();

    //when passing root name
    fireEvent.change(nameInputField, {
      target: { value: "Aga" },
    });
    fireEvent.change(selectInputField, {
      target: { value: "sisterinlaw" },
    });
    fireEvent.click(button);
    const resultField4 = screen.getByText(/Result: no such relation found/i);
    expect(resultField4).toBeInTheDocument();
  });
  it("brotherinlaw/s when found", () => {
    render(<App />);
    let nameInputField = screen.getByTestId("name");
    let selectInputField = screen.getByTestId("relations");
    let button = screen.getByTestId("findfamily");

    // when inout name is daughter
    fireEvent.change(nameInputField, {
      target: { value: "Satya" },
    });
    fireEvent.change(selectInputField, {
      target: { value: "brotherinlaw" },
    });
    fireEvent.click(button);
    const resultField3 = screen.getByText(/Result: no such relation found/i);
    expect(resultField3).toBeInTheDocument();

    // when input name is son
    fireEvent.change(nameInputField, {
      target: { value: "Vich" },
    });
    fireEvent.change(selectInputField, {
      target: { value: "brotherinlaw" },
    });
    fireEvent.click(button);
    const resultField4 = screen.getByText(/Result: Vyan/i);
    expect(resultField4).toBeInTheDocument();

    //input name is wife of son
    fireEvent.change(nameInputField, {
      target: { value: "Lika" },
    });
    fireEvent.change(selectInputField, {
      target: { value: "brotherinlaw" },
    });
    fireEvent.click(button);
    const resultField5 = screen.getByText(/Result: Ish,Chit,Vyan/i);
    expect(resultField5).toBeInTheDocument();

    //input name is husband of daughter
    fireEvent.change(nameInputField, {
      target: { value: "Vyan" },
    });
    fireEvent.change(selectInputField, {
      target: { value: "brotherinlaw" },
    });
    fireEvent.click(button);
    const resultField6 = screen.getByText(/Result: Ish,Chit,Vich/i);
    expect(resultField6).toBeInTheDocument();
  });
  it("brotherinlaw/s when not found", () => {
    render(<App />);
    let nameInputField = screen.getByTestId("name");
    let selectInputField = screen.getByTestId("relations");
    let button = screen.getByTestId("findfamily");

    fireEvent.change(nameInputField, {
      target: { value: "lavnya" },
    });
    fireEvent.change(selectInputField, {
      target: { value: "brotherinlaw" },
    });
    fireEvent.click(button);
    const resultField2 = screen.getByText(/Result: no such relation found/i);
    expect(resultField2).toBeInTheDocument();

    fireEvent.change(nameInputField, {
      target: { value: "Aga" },
    });
    fireEvent.change(selectInputField, {
      target: { value: "brotherinlaw" },
    });
    fireEvent.click(button);
    const resultField4 = screen.getByText(/Result: no such relation found/i);
    expect(resultField4).toBeInTheDocument();
  });
  it("paternaluncles/s when found", () => {
    render(<App />);
    let nameInputField = screen.getByTestId("name");
    let selectInputField = screen.getByTestId("relations");
    let button = screen.getByTestId("findfamily");

    fireEvent.change(nameInputField, {
      target: { value: "jata" },
    });
    fireEvent.change(selectInputField, {
      target: { value: "paternaluncles" },
    });
    fireEvent.click(button);
    const resultField3 = screen.getByText(/Result: Vrita/i);
    expect(resultField3).toBeInTheDocument();

    fireEvent.change(nameInputField, {
      target: { value: "Driya" },
    });
    fireEvent.change(selectInputField, {
      target: { value: "paternaluncles" },
    });
    fireEvent.click(button);
    const resultField4 = screen.getByText(/Result: Vrita/i);
    expect(resultField4).toBeInTheDocument();

    fireEvent.change(nameInputField, {
      target: { value: "asva" },
    });
    fireEvent.change(selectInputField, {
      target: { value: "paternaluncles" },
    });
    fireEvent.click(button);
    const resultField5 = screen.getByText(/Result: Ish,Chit,Vich/i);
    expect(resultField5).toBeInTheDocument();
  });
  it("paternaluncles/s when not found", () => {
    render(<App />);
    let nameInputField = screen.getByTestId("name");
    let selectInputField = screen.getByTestId("relations");
    let button = screen.getByTestId("findfamily");

    fireEvent.change(nameInputField, {
      target: { value: "Aga" },
    });
    fireEvent.change(selectInputField, {
      target: { value: "paternaluncles" },
    });
    fireEvent.click(button);
    const resultField4 = screen.getByText(/Result: no such relation found/i);
    expect(resultField4).toBeInTheDocument();
  });
  it("maternaluncles/s when found", () => {
    render(<App />);
    let nameInputField = screen.getByTestId("name");
    let selectInputField = screen.getByTestId("relations");
    let button = screen.getByTestId("findfamily");

    fireEvent.change(nameInputField, {
      target: { value: "Jinki" },
    });
    fireEvent.change(selectInputField, {
      target: { value: "maternaluncles" },
    });
    fireEvent.click(button);
    const resultField3 = screen.getByText(/Result: Ish,Chit,Vyan/i);
    expect(resultField3).toBeInTheDocument();

    fireEvent.change(nameInputField, {
      target: { value: "asva" },
    });
    fireEvent.change(selectInputField, {
      target: { value: "maternaluncles" },
    });
    fireEvent.click(button);
    const resultField4 = screen.getByText(/Result: Ish,Chit,Vich/i);
    expect(resultField4).toBeInTheDocument();
  });
  it("maternaluncles/s when not found", () => {
    render(<App />);
    let nameInputField = screen.getByTestId("name");
    let selectInputField = screen.getByTestId("relations");
    let button = screen.getByTestId("findfamily");

    fireEvent.change(nameInputField, {
      target: { value: "Aga" },
    });
    fireEvent.change(selectInputField, {
      target: { value: "maternaluncles" },
    });
    fireEvent.click(button);
    const resultField4 = screen.getByText(/Result: no such relation found/i);
    expect(resultField4).toBeInTheDocument();
  });
});

describe("Problem 2 : add son and daughter and check relation", () => {
  it("add a daughter", () => {
    render(<App />);
    let parentname = screen.getByTestId("parentname");
    let childname = screen.getByTestId("childname");
    let relationtoadd = screen.getByTestId("relationtoadd");
    let button = screen.getByTestId("addchild");
    fireEvent.change(parentname, {
      target: { value: "Aga" },
    });
    fireEvent.change(childname, {
      target: { value: "akansha" },
    });
    fireEvent.change(relationtoadd, {
      target: { value: "daughter" },
    });
    fireEvent.click(button);

    let nameInputField = screen.getByTestId("name");
    let selectInputField = screen.getByTestId("relations");
    let button2 = screen.getByTestId("findfamily");
    fireEvent.change(nameInputField, {
      target: { value: "Aga" },
    });
    fireEvent.change(selectInputField, {
      target: { value: "daughters" },
    });
    fireEvent.click(button2);
    const resultField4 = screen.getByText(/Result: Satya,akansha/i);
    expect(resultField4).toBeInTheDocument();

    fireEvent.change(nameInputField, {
      target: { value: "Ish" },
    });
    fireEvent.change(selectInputField, {
      target: { value: "sister" },
    });
    fireEvent.click(button2);
    const resultField5 = screen.getByText(/Result: Satya,akansha/i);
    expect(resultField5).toBeInTheDocument();

    fireEvent.change(nameInputField, {
      target: { value: "akansha" },
    });
    fireEvent.change(selectInputField, {
      target: { value: "brother" },
    });
    fireEvent.click(button2);
    const resultField6 = screen.getByText(/Result: Ish,Chit,Vich/i);
    expect(resultField6).toBeInTheDocument();

    fireEvent.change(nameInputField, {
      target: { value: "Driya" },
    });
    fireEvent.change(selectInputField, {
      target: { value: "daughters" },
    });
    fireEvent.click(button2);
    const resultField7 = screen.getByText(/Result: no such relation found/i);
    expect(resultField7).toBeInTheDocument();
  });

  it("add a son", () => {
    render(<App />);
    let parentname = screen.getByTestId("parentname");
    let childname = screen.getByTestId("childname");
    let relationtoadd = screen.getByTestId("relationtoadd");
    let button = screen.getByTestId("addchild");
    fireEvent.change(parentname, {
      target: { value: "Driya" },
    });
    fireEvent.change(childname, {
      target: { value: "akansha1" },
    });
    fireEvent.change(relationtoadd, {
      target: { value: "son" },
    });
    fireEvent.click(button);

    let nameInputField = screen.getByTestId("name");
    let selectInputField = screen.getByTestId("relations");
    let button2 = screen.getByTestId("findfamily");
    fireEvent.change(nameInputField, {
      target: { value: "Driya" },
    });
    fireEvent.change(selectInputField, {
      target: { value: "sons" },
    });
    fireEvent.click(button2);
    const resultField4 = screen.getByText(/Result: akansha1/i);
    expect(resultField4).toBeInTheDocument();

    fireEvent.change(nameInputField, {
      target: { value: "akansha1" },
    });
    fireEvent.change(selectInputField, {
      target: { value: "sister" },
    });
    fireEvent.click(button2);
    const resultField5 = screen.getByText(/Result: no such relation found/i);
    expect(resultField5).toBeInTheDocument();

    fireEvent.change(nameInputField, {
      target: { value: "akansha1" },
    });
    fireEvent.change(selectInputField, {
      target: { value: "paternalaunts" },
    });
    fireEvent.click(button2);
    const resultField6 = screen.getByText(/Result: no such relation found/i);
    expect(resultField6).toBeInTheDocument();
  });
});

describe("Problem 3 : find most daughters", () => {
  it("find max daugther plus add daughter and check max daughter", () => {
    render(<App />);
    let parentname = screen.getByTestId("parentname");
    let childname = screen.getByTestId("childname");
    let relationtoadd = screen.getByTestId("relationtoadd");
    let button = screen.getByTestId("addchild");
    let buttonMax = screen.getByTestId("checkMax");

    fireEvent.change(parentname, {
      target: { value: "Aga" },
    });
    fireEvent.change(childname, {
      target: { value: "akansha" },
    });
    fireEvent.change(relationtoadd, {
      target: { value: "daughter" },
    });
    fireEvent.click(button);
    fireEvent.click(buttonMax);
    const resultField6 = screen.getByText(/Result:Aga:2/i);
    expect(resultField6).toBeInTheDocument();

    fireEvent.change(parentname, {
      target: { value: "Lika" },
    });
    fireEvent.change(childname, {
      target: { value: "aa" },
    });
    fireEvent.change(relationtoadd, {
      target: { value: "daughter" },
    });
    fireEvent.click(button);
    fireEvent.click(buttonMax);
    const resultField3 = screen.getByText(/Result:Aga:2Lika:2/i);
    expect(resultField3).toBeInTheDocument();
  });
});

describe("Problem 4", () => {
  it("check paternaluncles", () => {
    render(<App />);
    let firstName = screen.getByTestId("firstname");
    let secondname = screen.getByTestId("secondname");
    let relationbutton = screen.getByTestId("checkrelation");
    fireEvent.change(firstName, {
      target: { value: "satvy" },
    });
    fireEvent.change(secondname, {
      target: { value: "Vich" },
    });
    fireEvent.click(relationbutton);
    const resultField1 = screen.getByText(
      /Result : paternaluncles,maternaluncles/i
    );
    expect(resultField1).toBeInTheDocument();
    fireEvent.change(firstName, {
      target: { value: "asva" },
    });
    fireEvent.change(secondname, {
      target: { value: "Vich" },
    });
    fireEvent.click(relationbutton);
    const resultField2 = screen.getByText(
      /Result : paternaluncles,maternaluncles/i
    );
    expect(resultField2).toBeInTheDocument();
    fireEvent.change(firstName, {
      target: { value: "Vila" },
    });
    fireEvent.change(secondname, {
      target: { value: "Vyan" },
    });
    fireEvent.click(relationbutton);
    const resultField3 = screen.getByText(
      /Result : paternaluncles,maternaluncles/i
    );
    expect(resultField3).toBeInTheDocument();
  });
});
