import React from 'react'

const PageContent = ({ children, addClass }) => {
    return (
        <section className={"page-content " + addClass}>
            {children}
        </section>
    )
}

export default PageContent