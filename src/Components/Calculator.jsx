import React, { useState } from 'react';
import { create, all } from 'mathjs';
import "../App.css"

function Calculator() {
    const [result, setResult] = useState("");

    const math = create(all);

    const handleClick = (e) => {
        setResult(result.concat(e.target.name));
    }
    const handleInput = (e) => {
        setResult(e.target.value);
    }
    const calcResult = () => {
        if (result === 'Error' || result === '') {
            setResult('');
        } else {
            try {
                setResult(math.evaluate(result).toString());
            } catch (err) {
                setResult("Error: Invalid expression");
            }
        }
    };

    const allClear = () => {
        setResult("")
    }

    const backSpace = () => {

        if (result === 'Error' || result === '')
            setResult('')
        else
            setResult(result.slice(0, -1));
    }


    return (
        <div style={{ fontFamily: 'Roboto, sans-serif' }}>
            <div className="container d-flex justify-content-center mt-5">
                <div className=" card shadow p-1" style={{ width: "20rem" }}>
                    <form className='form-group mb-1'>
                        <input type="text" id='screen' className='form-control  text-white' onChange={handleInput} value={result} />

                    </form>
                    <div className="keypad">
                        <button className='' id='clear' onClick={allClear}>AC</button>
                        <button className='highlight' id='backspace' onClick={backSpace}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-backspace" viewBox="0 0 16 16">
                                <path d="M5.83 5.146a.5.5 0 0 0 0 .708L7.975 8l-2.147 2.146a.5.5 0 0 0 .707.708l2.147-2.147 2.146 2.147a.5.5 0 0 0 .707-.708L9.39 8l2.146-2.146a.5.5 0 0 0-.707-.708L8.683 7.293 6.536 5.146a.5.5 0 0 0-.707 0z" />
                                <path d="M13.683 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-7.08a2 2 0 0 1-1.519-.698L.241 8.65a1 1 0 0 1 0-1.302L5.084 1.7A2 2 0 0 1 6.603 1h7.08zm-7.08 1a1 1 0 0 0-.76.35L1 8l4.844 5.65a1 1 0 0 0 .759.35h7.08a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-7.08z" />
                            </svg>
                        </button>
                        <button className='highlight' name='%' onClick={handleClick}>mod</button>
                        <button className='highlight' name='/' onClick={handleClick}>&divide;</button>
                        <button className='' name='7' onClick={handleClick}>7</button>
                        <button className='' name='8' onClick={handleClick}>8</button>
                        <button className='' name='9' onClick={handleClick}>9</button>
                        <button className='highlight' name='*' onClick={handleClick}>&times;</button>
                        <button className='' name='4' onClick={handleClick}>4</button>
                        <button className='' name='5' onClick={handleClick}>5</button>
                        <button className='' name='6' onClick={handleClick}>6</button>
                        <button className='highlight' name='-' onClick={handleClick}>-</button>
                        <button className='' name='1' onClick={handleClick}>1</button>
                        <button className='' name='2' onClick={handleClick}>2</button>
                        <button className='' name='3' onClick={handleClick}>3</button>
                        <button className='highlight' name='+' onClick={handleClick}>+</button>
                        <button className='' name='0' onClick={handleClick}>0</button>
                        <button className='' name='.' onClick={handleClick}>.</button>
                        <button className='' id='result' onClick={calcResult}>=</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calculator;