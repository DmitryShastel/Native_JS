import React from 'react';
import {UseStateComponent2} from "./Native_JS_2.0/Native_JS_Monday/useState";


function App() {
    // let [message, setMessage] = useState([
    //     {message: 'message1'},
    //     {message: 'message2'},
    //     {message: 'message3'},
    // ])
    //
    // const addMessage = (title: string) => {
    //     let newMessage = {message: title};
    //     setMessage([newMessage ,...message])
    // }


    return (
        <div className="App">

            {/*<UseStateComponent1/>*/}
            <UseStateComponent2/>


            {/*<Fullinput addMessage={addMessage}/>*/}
            {/*<div className='block'>*/}
            {/*    {message.map((el, index) => {*/}
            {/*        return (*/}
            {/*            <div key={index}>{el.message} </div>*/}
            {/*        )*/}
            {/*    })}*/}
            {/*</div>*/}

        </div>
    )
}

export default App;