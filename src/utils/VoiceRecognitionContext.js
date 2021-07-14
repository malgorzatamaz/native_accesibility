import React, {useEffect, useState} from 'react';
import Voice from '@react-native-voice/voice';

export const VoiceRecognitionContext = React.createContext([]);

const VoiceRecognitionProvider = ({children}) => {
  const [voiceInstructions, setVoiceInstructions] = useState([]);

  useEffect(() => {
    Voice.onSpeechStart = onSpeechStartHandler;
    Voice.onSpeechEnd = onSpeechEndHandler;
    Voice.onSpeechResults = onSpeechResultsHandler;
    Voice.onSpeechError = onSpeechError;
    // Voice.onSpeechPartialResults = onSpeechPartialResultsHandler;

    // setInterval(() => {
    //   Voice.stop();
    Voice.start('en-US');
    //   // !isListening && Voice.stop() && Voice.start('en-US');
    // }, 5000);

    return () => {
      Voice.stop();
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const onSpeechError = e => {
    console.log('error', e);
    Voice.start('en-US');
  };

  const onSpeechStartHandler = e => {
    console.log('start');
  };

  const onSpeechEndHandler = e => {
    console.log('end');
    // Voice.start('en-US');
  };

  const onSpeechResultsHandler = e => {
    console.log('end');
    setVoiceInstructions(e.value);
    Voice.start('en-US');
  };

  const onSpeechPartialResultsHandler = e => {
    console.log('end partial');
    setVoiceInstructions(e.value);
    Voice.start('en-US');
  };

  return (
    <VoiceRecognitionContext.Provider value={voiceInstructions}>
      {children}
    </VoiceRecognitionContext.Provider>
  );
};

export default VoiceRecognitionProvider;
