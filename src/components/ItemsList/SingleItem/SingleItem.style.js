import styled from 'styled-components'

export const Box = styled.div`
    border: 1px solid #ccc;
    padding: 1em;
    margin: 4em 2em;
    border-radius: 1em;
    text-align: center;
    box-shadow: 0;
    transition: box-shadow 0.2s ease-out;

    & > a {
        & > img {
            max-width: 100%;
            margin-top: -3em;
            box-shadow: 0 1em 1em 0 #ccc;
            border-radius: 1em;
            min-width: 233px;
            min-height: 332px;
            transition: all 0.2s ease-out;

            &:hover {
                @media (min-width: 1400px) {
                    margin-top: -4em;
                }
            }
        }
    }

    & > * + * {
        margin-top: 1em;
    }

    &:hover {
        @media (min-width: 1400px) {
            box-shadow: 0 0 1em 0 #ccc;
        }
    }

    @media (min-width: 1200px) {
        margin: 0 5em 6em;
    }

    @media (min-width: 1415px) {
        margin: 0.5em;
    }
`

export const Title = styled.h3`
    font-size: 2rem;
    margin-top: 1em;
`

export const PriceWrapper = styled.div`
    text-align: center;
    background-color: #cfe3f3;
    padding: 1em;
    border-radius: 30px;
    cursor: pointer;
    transition: background-color 0.2s ease-out;

    & > a {
        text-decoration: none;
        color: #2a2a2a;
    }

    &:hover {
        background-color: #bccfdf;
    }
`
