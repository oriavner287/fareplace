import React from 'react'
import { Link } from 'react-router-dom'
import { Wrapper, Content, Logo } from './Nav.style'

function Nav() {
    return (
        <Wrapper>
            <Content>
                <Link to="/">
                    <Logo>FAREPLACE</Logo>
                </Link>
                <div>
                    <p>dummyemail@email.com</p>
                </div>
            </Content>
        </Wrapper>
    )
}

export default Nav
