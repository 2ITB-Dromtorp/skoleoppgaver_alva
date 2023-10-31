
function DeloppgaveA() {

    let sideA = 8;
    let sideB = 8;
    let areal = sideA * sideB;

    const String1 = "function ArialOfRectangle() {"
    const String2 = "let sideA = 8;"
    const String3 = "let sideB = 8;"
    const String4 = "let areal = sideA * sideB;"
    const String5 = "}"

    return (
        <div className="deloppgave">
            <h2> Deloppgave a</h2>
            <p> Lag et program som regner ut arealet av et rektangel. Lengden er 8 og bredden er 8. Skriv dette som funksjon i python.</p>
            <div className="CodeSegment">
                <p>{String1}<br></br>{String2}<br></br>{String3}<br></br>{String4}<br></br>{String5}</p>
            </div>
            <p> Svar: {areal}</p>
        </div>
    )
}

function DeloppgaveB() {

    return (
        <div className="deloppgave">
            <h2> Deloppgave b</h2>
            <p> Lag et program som regner ut arealet av en trekant. Formelen for en trekant er 𝐴=L∗B2 Returner arealet i funksjonen.</p>
        </div>
    )
}

function DeloppgaveC() {
    return (
        <div className="deloppgave">
            <h2> Deloppgave c</h2>
            <p> Lag et program som heter areal(lengde, bredde). Denne har to input-parametre; lengde og bredde. Funksjonen skal regne ut både arealet av et rektangel og en trekant. Men du skal ikke skrive utregningen på nytt. Returner arealet fra rektangel og en trekant. Bruk valgfrie sider som lengde og bredde.</p>
        </div>
    )
}

function DeloppgaveD() {
    return (
        <div className="deloppgave">

        </div>
    )
}

export default function Oppgave3() {
    return (
      <>
        <h2> Oppgave 2</h2>
        <DeloppgaveA />
        <DeloppgaveB />
        <DeloppgaveC />
        <DeloppgaveD />
      </>
    );
  }