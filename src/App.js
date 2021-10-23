import './App.css';
import {useState, useEffect} from "react"
import  React from "react"
const App = () => {
    const [inputList, setInputList] = useState([{name: "",}]);
    const [show, setShow] = useState(false)
// handle input change
    const handleInputChange = (e, index) => {
        const {name, value} = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
    };

    // handle click event of the Remove button
    const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };

    // handle click event of the Add button
    const handleAddClick = () => {
        setInputList([...inputList, {name: ""}]);
    };
    const showInputListValue = () => {
        !show ? setShow(true) : setShow(false)
    }
    return (
        <div>
            <h3><a href="https://cluemediator.com">Clue Mediator</a></h3>
            {inputList.map((x, i) => {
                return (
                    <div className="box">
                        <input
                            name="name"
                            value={x.name}
                            onChange={e => handleInputChange(e, i)}
                        />
                        <div className="btn-box">
                            {inputList.length !== 1 && <button
                                className="mr10"
                                onClick={() => handleRemoveClick(i)}>Remove</button>}
                            {/*{inputList.length - 1 === i && <button onClick={handleAddClick}>Add</button>}*/}
                        </div>
                    </div>
                );

            })}
            <button onClick={handleAddClick}>Add</button>
            <button onClick={showInputListValue}>Show</button>
            <div>
                {
                    show ? <div>{inputList.map((e, i) => {
                        return (<ul>
                            <li>{e.name}</li>
                        </ul>)
                    })}</div> : null
                }
            </div>
        </div>
    )
}

export default App;
