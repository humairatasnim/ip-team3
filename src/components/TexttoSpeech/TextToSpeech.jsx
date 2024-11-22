import speakerIcon from "../../assets/images/team/speaker.svg"; 
import "./TextToSpeech.scss";

function TextToSpeech({ text }) { 
    const handleReadAloud = () => {
      const utterance = new SpeechSynthesisUtterance(text); 
      window.speechSynthesis.speak(utterance);
    };
  
    return (
      <>
        <p>TextToSpeech</p>
  
        <p>{text}</p> 
        <button onClick={handleReadAloud}>
          <img className="speaker-icon" src={speakerIcon} alt="speaker" /> 
        </button> 
      </>
    )
}

export default TextToSpeech;