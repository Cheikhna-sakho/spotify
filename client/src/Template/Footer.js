// import Listerner from "../components/listerner/Listerner";
import { BsFillPlayCircleFill, BsFillPauseCircleFill } from "react-icons/bs";
import { BiSkipNext, BiSkipPrevious, BiRepeat } from "react-icons/bi";
import { ImVolumeMedium, ImVolumeMute2 } from "react-icons/im";
import { FaRandom } from "react-icons/fa";
import { AudioContextData, ControllerContextData } from "../contexts/Audio";
import Track from "../components/main/Track";
import { useEffect, useState } from "react";
import Jauge from "../components/Jauge";
const Footer = () => {
    const { audio, audiocurrentTime, sound } = AudioContextData();
    const { playAudio, stopAudio } = ControllerContextData();
    const [DisplayTime, setDisplayTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [ToggleIconPlayed, setToggleIconPlayed] = useState(false);
    const [volum, setVolum] = useState(50);
    const getAudioTime = (duration) => {
        let s = parseInt(duration % 60);
        s = s < 10 ? "0" + s : s;
        s = s < 0 ? "00" : s;
        let m = parseInt((duration / 60) % 60);
        return m ? `${m}:${s}` : s;
    }
    useEffect(() => {
        setDisplayTime(getAudioTime(audiocurrentTime));
    }, [audiocurrentTime]);

    useEffect(() => {
        setToggleIconPlayed(true);
        sound && setDuration(getAudioTime(sound.duration));
    }, [sound])
    const togglePlayAudio = () => {
        if (!audio.current.paused) {
            setToggleIconPlayed(false)
            return stopAudio();
        }
        setToggleIconPlayed(true)
        return playAudio();
    }
    const controller = [
        {
            icon: <FaRandom />,
            command: () => { }
        },
        {
            icon: <BiSkipPrevious />,
            command: () => { }
        },
        {
            icon: !ToggleIconPlayed ? <BsFillPlayCircleFill /> : <BsFillPauseCircleFill />,
            command: togglePlayAudio
        },
        {
            icon: <BiSkipNext />,
            command: () => { }
        },
        {
            icon: <BiRepeat />,
            command: () => { }
        }
    ]

    return (
        <footer>
            {sound && <section className="music-box grid-col">
                <article className="sound grid-col">
                    <div className="sound-cover">
                        <img src={sound?.cover_small} alt="sound cover" />
                    </div>
                    <Track sound={sound} />
                </article>
                <article className="control-box">
                    <div className="controller flex">
                        {controller
                            .map(({ icon, command }, i) => (
                                <div key={i} className="audio-controller" onClick={command}>
                                    {icon}
                                </div>
                            ))}
                    </div>
                    <div className="progressive-audio flex">
                        <div className="actual-time">

                            {(Math.floor(audiocurrentTime) <= sound.duration) ? DisplayTime : duration}
                        </div>
                        <Jauge index={audiocurrentTime} total={sound.duration} onChanged={(e) => audio.current.currentTime = e.target.value} value={audiocurrentTime} max={sound.duration} />
                        <div className="rest-time">
                            {duration}
                        </div>
                    </div>
                    <audio ref={audio} src={sound.mp3}></audio>
                </article>
                <div className="volum-box flex">
                    <div className="volum-icon" onClick={() => volum === 0 ? setVolum(50) : setVolum(0)}>
                        {volum === 0 ? <ImVolumeMute2 /> : <ImVolumeMedium />}
                    </div>
                    <Jauge index={volum} total={100} onChanged={(e) => { setVolum(e.target.value); return audio.current.volume = e.target.value / 100 }} value={volum} max={100} />
                </div>
            </section>
            }
        </footer>
    )
}
export default Footer;