import React from 'react'
import { Link, useParams } from 'react-router-dom'
import useDealsStore from '@src/store/deals'
import rowTitleConfig from './config'
import {
    Wrapper,
    Content,
    TitleWrapper,
    Title,
    IsLiveIndicator,
    Deatils,
    Price,
    GoBackWrapper
} from './ItemPage.style'

function ItemPage() {
    const { id } = useParams()

    const deals = useDealsStore(({ deals }) => deals)

    const filtered = deals.filter(item => item.id === id)[0]

    const { imageUrl, inboundId, outboundId, isLive, startingPrice, currencySymbol } =
        filtered || ''

    const detailsContent = Object.entries(filtered).map(([key, value]) => {
        if (
            key === 'numberOfBidders' ||
            key === 'viewersCount' ||
            key === 'currency' ||
            key === 'endDate'
        ) {
            return (
                <p>
                    <small>{rowTitleConfig[key]}:</small>{' '}
                    {key !== 'endDate' ? value : new Date(value).toLocaleDateString('en-US')}
                </p>
            )
        }
    })

    return (
        <Wrapper>
            <GoBackWrapper>
                <Link to="/">&#60; Go Back</Link>
            </GoBackWrapper>
            <img src={imageUrl} alt="" />
            <Content>
                <TitleWrapper>
                    <Title>{`${inboundId} - ${outboundId}`}</Title>
                    {isLive && <IsLiveIndicator />}
                </TitleWrapper>
                <Deatils>{detailsContent}</Deatils>
                <Price>
                    <p>Price:</p>
                    <h4>{`${currencySymbol}${startingPrice}`}</h4>
                </Price>
            </Content>
        </Wrapper>
    )
}

export default ItemPage
