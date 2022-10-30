import { MdArrowForwardIos, MdOutlineArrowBackIos, MdPersonOutline } from "react-icons/md";
import { AiFillCaretDown } from "react-icons/ai";
import React from 'react'

const Page = ({ children, addClass, headerContent, headerClass }) => {

    return (
        <main className={'grid-row page ' + addClass}>
            <section className={"main-header flex " + headerClass}>
                <div className="header-items flex center">
                    <div className="left-element grid-col">
                        <div className="arrow-box">
                            <span className="arrow-navigation arrow-back">
                                <MdOutlineArrowBackIos />
                            </span>
                            <span className="arrow-navigation arrow-next">
                                <MdArrowForwardIos />
                            </span>
                        </div>
                        {headerContent}
                    </div>
                    <div className="flex user">
                        <div className="follow-btn">
                            <button>S'abonner</button>
                        </div>
                        <div className="grid-col profil">
                            <div className="profil-icon"><MdPersonOutline /></div>
                            <span className="user-name">My pseudo</span>
                            <span><AiFillCaretDown /></span>
                        </div>
                    </div>

                </div>
            </section>
            {children}
        </main>
    )
}

export default Page;