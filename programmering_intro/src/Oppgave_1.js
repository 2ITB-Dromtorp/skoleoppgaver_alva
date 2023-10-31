function H() {
    return (
        <h1>My app</h1>
    )
}

function A() {
    return (
        <div className="Task">
            <p>that's a button<br></br>I<br></br>V</p>
            <button onClick="">
                Button
            </button>
        </div>
    );
  }

  function B() {
    return (
        <>
            <div className="Task">
                <h2>About</h2>
                <p>Hello there.<br />How do you do?</p>
            </div>
        </>
      );
  }

  function C(){
    return (
        <div className="Task">
        <div className="loader">
            <h2>Kirby</h2>
          <img src="https://github.com/SaltyOcto2290/saltyocto.github.io/blob/main/Kirby.png" alt="Kirby" className="loaderIcon"/>
            <p>Kirby isn't working :,(</p>
        </div>
        </div>
    )
  }
  
  export default function Oppgave1() {
    return (
      <div>
        <H />
        <A />
        <B />
        <C />
      </div>
    );
  }