import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2em auto;
    flex-direction: column;

    & > img {
        max-width: 100%;
        box-shadow: 0 1em 1em 0 #ccc;
        border-radius: 1em;
        min-width: 233px;
        min-height: 332px;
        z-index: 5;
    }

    @media (min-width: 1200px) {
        margin: 4em auto;
    }

    @media (min-width: 1200px) {
        margin: 6em auto;
    }
`

export const Content = styled.div`
    border: 1px solid #ddd;
    padding: 3em 3em 2em;
    border-radius: 20px;
    margin-top: -3em;
`

export const TitleWrapper = styled.div`
    position: relative;
`

export const Title = styled.h3`
    margin-top: 1em;
`

export const IsLiveIndicator = styled.div`
    background: #23a923;
    padding: 0.3em;
    position: absolute;
    border-radius: 50%;
    right: -1em;
    top: 0;
`

export const Deatils = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1em;

    & p {
        margin-bottom: 0.9em;
    }
`

export const Price = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 0.5em;
    border-top: 1px solid #ccc;
    padding-top: 2em;

    & > h4 {
        font-size: 2rem;
    }
`

export const GoBackWrapper = styled.span`
    margin-bottom: 1em;

    & > a {
        text-decoration: none;
        color: #2a2a2a;
        padding: 1em;

        &:hover {
            text-decoration: underline;
        }
    }
`
