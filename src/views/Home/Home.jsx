import React from 'react'
import useDealsStore from '@src/store/deals'
import ItemsList from '@src/components/ItemsList'
import { Wrapper, Title } from './Main.style'

function Home() {
    const deals = useDealsStore(({ deals }) => deals)

    return (
        <Wrapper>
            <Title>Explore Latest Deals</Title>
            <ItemsList list={deals} />
        </Wrapper>
    )
}

export default Home
