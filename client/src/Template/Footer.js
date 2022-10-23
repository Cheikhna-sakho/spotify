// import Listerner from "../components/listerner/Listerner";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { BiSkipNext, BiSkipPrevious, BiRepeat } from "react-icons/bi";
import { FaRandom } from "react-icons/fa";
import { AudioContextData, ControllerContextData } from "../contexts/Audio";
import Track from "../components/main/Track";
const Footer = () => {
    const { audio, audioSrc, audiocurrentTime, sound } = AudioContextData();
    const { playAudio, stopAudio } = ControllerContextData();
    const togglePlayAudio = () => {
        if (!audio.current.paused) {
            return stopAudio();
        }
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
            icon: <BsFillPlayCircleFill />,
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
    // console.log(sound.track);
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
                            00
                        </div>
                        <div className="progesse-fill">
                            <div className="fill">

                            </div>
                        </div>
                        <div className="rest-time">
                            1:03
                            current == {audioSrc && audiocurrentTime}
                        </div>
                    </div>
                    <audio ref={audio} src={sound.mp3}></audio>
                </article>
            </section>
            }
        </footer>
    )
}
export default Footer;