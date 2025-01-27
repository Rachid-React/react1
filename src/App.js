import React, { useState, useRef } from 'react';


function App() {
    const [counter, setCounter] = useState(0);
    const r = useRef(null);

    function update() {
        setCounter(counter+1);
        r.current.textContent = parseInt(Math.random()*1000);
    }
    
    return(
        <div>
            <p>{counter}</p>
            <button onClick={update}>Click me</button>
            <p ref={r}></p>
        </div>
    )
    
}

// function App() {
//     const [result, setResult] = useState('');
//     const refs = [useRef(null), useRef(null)];
    
//     function calculate() {
//         var x = parseFloat(refs[0].current.value);
//         var y = parseFloat(refs[1].current.value);
//         if(isNaN(x) || isNaN(y)) {
//             setResult('');
//             return;
//         }
//         var sum = x + y;
//         setResult(`The sum of ${x} + ${y} is ${sum} `);
//     }

//     return (
//         <div>
//             <input type="text" id="inp1" placeholder="Number 1" ref={refs[0]} ></input>
//             <input type="text" id="inp2" placeholder="Number 2" ref={refs[1]} ></input>
//             <br></br>
//             <button onClick={calculate}>Result</button>
//             <p>{result}</p>
//         </div>
//     )
// }

export default App
