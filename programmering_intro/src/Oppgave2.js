function DeloppgaveA() {
    return (
        <div className="deloppgave">
            <h2> Deloppgave a</h2>
            <p> Hva skriver du i javascript dersom du vil gi variabelen test verdien 8? Hvilken datatype er dette? </p>
            <p> Svar: let test = 8 </p>
            <p> Svar: Se console loggen nå {console.log(typeof(8))} </p>
        </div>
    )
}

function DeloppgaveB() {
    return (
        <div className="deloppgave">
            <h2> Deloppgave b</h2>
            <p> Hva skriver du dersom du vil gi variabelen test verdien "testverdi"? Hvilken datatype er dette?</p>
            <p> Svar: let test = testverdi;</p>
            <p> Svar: String</p>
        </div>
    )
}

function DeloppgaveC() {
    return (
        <div className="deloppgave">
            <h2> Deloppgave c</h2>
            <p> Hva skriver du dersom du vil regne ut 2 * 3 og sette resultatet inn i variabelen produkt?</p>
            <p> let produkt = 2 * 3</p>
            <p> Sjekk konsollen: {console.log(2*3)}</p>
        </div>
    )
}

function Oppgave2() {
    return (
        <>
            <h1> Oppgave 1</h1>
            <DeloppgaveA />
            <DeloppgaveB />
            <DeloppgaveC />
        </>
    )
}

export default Oppgave2
