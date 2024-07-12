import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function About() {
    return (
        <>
            <h1>IT IS THE ABOUT PAGE</h1>
            <div className="parent" style={{ display: "flex", gap: "50px" }}>
                <div>
                    <Link to="web">VISIT WEBSITE</Link> <br />
                    <Link to="services">SERVICES</Link> <br />
                    <Link to="sub">Subscription</Link> <br />
                </div>
                <div>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default About