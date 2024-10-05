//

const App = () => {
    //basic syntax
    const element = <h2>Hello Tissa</h2>

    //embedding expressions
    const name = 'React js developer';
    const element2 =( <h1> Hello {name}  {2+2}</h1>
    );
    //jsx as an expression
    const element3 = (
        <div>
            <h1>Hello, Darlin</h1>
            <h2>It is {new Date().toLocaleTimeString()}</h2>
        </div>
    );
    return element3;
}

export default App;