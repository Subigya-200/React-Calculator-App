import React from 'react';
import { useState } from 'react';

const Buttons = () => {

    const [calc, setCalc] = useState("");
    const [result, setResult] = useState("");

    const ops = ['/', '*', '+', '-', '.', '%'];

    const updateCalc = value => {

        if (
            ops.includes(value) && calc === '' ||
            ops.includes(value) && ops.includes(calc.slice(-1))
        ) {
            return;
        }

        setCalc(calc + value);

        if (!ops.includes(value)) {
            setResult(eval(calc + value).toString());
        }
    }

    const calculate = () => {
        setCalc(eval(calc).toString());
    }

    const deleteLast = () => {
        if (calc === "")
            return;

        const value = calc.slice(0, -1);
        setCalc(value);
    }


    return (
        <>
            <h1 className='Heading'>Simple Calculator by <a href='https://www.linkedin.com/in/error200/' style={{color: "whitesmoke"}} target="_blank">Subigya Subedi</a></h1>
            <div className="rows">
                <h1 className='calcn'>{calc || "0"} </h1>

                <div className="buttons">
                    <ul>
                        <button className='equal' onClick={deleteLast}> <li id='equals'>DEL</li> </button>
                        <button onClick={() => updateCalc("%")} > <li>%</li> </button>
                        <button onClick={() => updateCalc("/")} > <li>/</li> </button>
                    </ul>

                    <ul>
                        <button onClick={() => updateCalc("7".toString())}> <li>7</li> </button>
                        <button onClick={() => updateCalc("8".toString())}> <li>8</li> </button>
                        <button onClick={() => updateCalc("9".toString())}> <li>9</li> </button>
                        <button onClick={() => updateCalc("*".toString())}> <li>*</li> </button>
                    </ul>

                    <ul>
                        <button onClick={() => updateCalc("4".toString())}> <li>4</li> </button>
                        <button onClick={() => updateCalc("5".toString())}> <li>5</li> </button>
                        <button onClick={() => updateCalc("6".toString())}> <li>6</li> </button>
                        <button onClick={() => updateCalc("-".toString())}> <li>−</li> </button>
                    </ul>

                    <ul>
                        <button onClick={() => updateCalc("1".toString())}> <li>1</li> </button>
                        <button onClick={() => updateCalc("2".toString())}> <li>2</li> </button>
                        <button onClick={() => updateCalc("3".toString())}> <li>3</li> </button>
                        <button onClick={() => updateCalc("+").toString()}> <li>+</li> </button>
                    </ul>

                    <ul>
                        <button onClick={() => updateCalc(".").toString()} > <li>.</li> </button>
                        <button onClick={() => updateCalc("0")} > <li>0</li> </button>
                        <button className='equal' onClick={() => calculate().toString()}> <li id='equals'>=</li> </button>
                    </ul>

                </div>
            </div >
        </>

    );
}

export default Buttons;