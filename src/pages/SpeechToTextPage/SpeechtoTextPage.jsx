import React from 'react';
import TextToSpeech from '../../components/TexttoSpeech/TextToSpeech.jsx';

function SpeechToTextPage() {
    const textToRead = "High Scam alert. This looks like it could be a scam"; 

    return (
        <TextToSpeech text={textToRead} /> 
    )
}

export default SpeechToTextPage;