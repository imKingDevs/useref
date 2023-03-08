
import { useRef, useState } from 'react';
import './App.css';

function App() {

    // It like usestate only and its preserve the value. No rerender
    const luckyname = useRef(null)
    const mobile = useRef(null)
    const [show, setshow] = useState(false)
    
    const submitform = (e) => {
        e.preventDefault();
        const name = luckyname.current.value;
        name === "" ? alert('Plz fill data') : setshow(true);

        console.log(luckyname);
        console.log(mobile);
    }
    
    return (
        <>
            <form className="container" onSubmit={submitform}>
                <label htmlFor="luckyname">
                    <h2>Fill The Form</h2>
                </label>
                <input type="text" id="luckyname" ref={luckyname} />
                <input type="tel" id="mobile" ref={mobile} />

                <button type="submit" >SUBMIT</button>
            </form>
            <p>{show ? `${luckyname.current.value}` : null}</p>
        </>
    );
}

export default App;
