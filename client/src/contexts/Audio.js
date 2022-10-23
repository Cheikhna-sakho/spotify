import { createContext, useContext, useEffect, useRef, useState } from "react";

const AudioContext = createContext(null);
export const AudioContextProvider = ({ children }) => {
    const [audioSrc, setAudioSrc] = useState(null);
    const [sound, setSound] = useState(null);
    const [audiocurrentTime, setAudioCurrentTime] = useState(0);
    const audio = useRef(null);

    const playAudio = () => {
        return audio.current.play();
    }
    const stopAudio = () => {
        return audio.current.pause();
    }
    const startAudio = (src) => {
        sound(src);
        return;
    }
    const pauseAudio = () => {
        return audio.current.duration = 0;
    }
    useEffect(() => {
        // console.log("pause?",audiocurrentTime);
        !audio.current?.paused && setInterval(() => setAudioCurrentTime(audio.current?.currentTime), 1000)
    })

    useEffect(() => {
        sound && playAudio();
    }, [sound]);

    const data = {
        contextController: { playAudio, startAudio, pauseAudio, stopAudio },
        contextAudio: { audio, audioSrc, setAudioSrc, audiocurrentTime, setAudioCurrentTime, sound, setSound }
    }

    return (
        <AudioContext.Provider value={data}>
            {children}
        </AudioContext.Provider>
    )
}
const GetAudioContext = () => {
    const audio = useContext(AudioContext);
    return audio;
}
export const AudioContextData = () => {
    const { contextAudio } = GetAudioContext();
    return contextAudio;
}
export const ControllerContextData = () => {
    const { contextController } = GetAudioContext();
    return contextController;
}

export default AudioContext;