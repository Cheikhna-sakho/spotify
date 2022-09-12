// import { useRef } from "react";
import Listerner from "../components/listerner/Listerner";
// import MainHome from "../components/MainHome";
const Main = ({ page, nav }) => {
    const icon_back = "https://img.icons8.com/nolan/64/reply-arrow--v2.png";
    const icon_next = "https://img.icons8.com/nolan/64/forward-arrow.png";
    // let icon_setting = "https://img.icons8.com/nolan/64/backend-development.png";
    let swipper = [
        {
            name: 'back',
            icon: icon_back
        },
        {
            name: 'next',
            icon: icon_next
        }
    ]
    return (
        <main className="grid-row">
            <section className="main-header grid-col">
                <div className="flex">
                    <Listerner className="swiper grid-col" element={swipper} name={false} />
                    {/* <div id="navig">{nav}</div> */}
                </div>
                {/* <div id="navig">{nav}</div> */}
                <ul className="profil grid-col">
                    {/* <li>S'abbonez</li>
                    <li>Name-user</li> */}
                </ul>
            </section>
            {page}
        </main>
    )
}
export default Main;