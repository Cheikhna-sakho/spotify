import Listerner from "../components/listerner/Listerner";

const Footer = () => {
    const icon_alea = "https://img.icons8.com/windows/32/000000/shuffle.png";
    const icon_arriere = "https://img.icons8.com/ios-glyphs/30/000000/rewind.png";
    const icon_pause = "https://img.icons8.com/ios-filled/50/000000/pause--v1.png";
    const icon_suivant = "https://img.icons8.com/ios-glyphs/30/000000/fast-forward.png";
    let audioIcon = [
        {
            name: 'Aleatoir',
            icon: icon_alea
        },
        {
            name: 'arriere',
            icon: icon_arriere
        },
        {
            name: 'Pause',
            icon: icon_pause
        },
        {
            name: 'Suivant',
            icon: icon_suivant
        },
    ]
    return (
        <footer>
            <Listerner element={audioIcon} name={false} />
            <audio src=""></audio>

        </footer>
    )
}
export default Footer;