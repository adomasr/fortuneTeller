import React, {useState, useContext, useEffect} from 'react';

import {ContextObj} from './AiContext';




export default function MainContent() {
    const defaultText = `This is the Fortune Teller, the great Seer! He knows all about the past, present, and future. 

Ask him about any object, person, or event you want to know about, 

and he will reveal the unknown for you.`;
    const [text, setText] = useState('');
    const errorMessage = 'The orb is too obscure, try asking again';
    const {answer, askQuestion, isError} = useContext(ContextObj);
    const [placeHolder, setPlaceHolder] = useState(defaultText);

    function handleChange(event) {
        setText(event.target.value);
    }

    function getAnswer() {
        askQuestion(text);
        setText('');
        setPlaceHolder('The Fortune Teller is looking to his orb...')
    }

    

    
    function clearTextArea() {
        setPlaceHolder('');
        setText('');
    }

    useEffect(()=> {
        if (answer === '') return;
        setText(answer);
    }, [answer])

    useEffect(()=> {
        if (isError) setPlaceHolder(errorMessage);
    },[isError])
    

    return (
        <div className="card">
           <div className="img-div">
                <img src='./src/assets/fortune.jpeg'/>
           </div>
           <div className="text">
                <textarea className='flash-placeholder' onChange={handleChange} onFocus={clearTextArea} value={text} placeholder={placeHolder} cols="40" rows="8"/>
                <button type="button" onClick={getAnswer} className="btn btn-primary">Reveal the truth!</button>
           </div>
        </div>
    )
}














// export default function MainContent() {
//     const defaultText = 'This the Grumpy Cat. Although she may seem unfriendly, try asking her questions!';
//     const [text, setText] = useState('');
//     const {answer, askQuestion} = useContext(ContextObj);
//     const [personaAnswer, setPersonaAnswer] = useState('start');

//     function handleChange(event) {
//         setText(event.target.value);
//     }

//     function getAnswer() {
//         askQuestion(text);
//         setText('');
//         setPersonaAnswer('Grumpy Cat is thinking...')
//     }


    
//     function clearPlaceH() {
//         setPersonaAnswer('');
//     }

//     useEffect(()=> {
//         // if (answer === '') return;
//         setPersonaAnswer(answer);
//     }, [answer])