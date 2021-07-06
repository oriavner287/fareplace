import styled from 'styled-components'

export const Wrapper = styled.nav`
    padding: 2em 4em;
    background-color: #f9f9f9;
`

export const Content = styled.div`
    & > a {
        text-decoration: none;
    }

    @media (min-width: 1200px) {
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`

export const Logo = styled.h1`
    font-size: 1.5rem;
`
