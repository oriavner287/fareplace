import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    margin: 2em auto 0;
    flex-direction: column;

    @media (min-width: 1200px) {
        margin: 4em auto;
    }

    @media (min-width: 1200px) {
        margin: 6em auto;
    }
`

export const Title = styled.h2`
    text-align: center;
    font-size: 2rem;
    padding: 0 0.475em;

    @media (min-width: 1200px) {
        font-size: 3rem;
        margin-bottom: 3em;
    }
`
