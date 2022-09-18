import React, {useState} from 'react';

export default function ColorInput(){

    let [allValues, setAllValues] = useState({
        red: '',
        green: '',
        blue: ''
    });

    function userInput(e){
        e.preventDefault();
        
    }

    function submitColor(){

    }

    return(
        <div>
            <form>
                <label>
                    Red
                    <input onChange={userInput}></input>
                </label>
            </form>
        </div>
    )
}