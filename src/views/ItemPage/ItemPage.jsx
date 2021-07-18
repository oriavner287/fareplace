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

    const item = deals.find(item => item.id === id)

    const detailsContent = Object.entries(item).map(([key, value]) => {
        if (key in rowTitleConfig) {
            return (
                <p key={key}>
                    <small>{rowTitleConfig[key]}:</small>{' '}
                    {key === 'endDate' ? new Date(value).toLocaleDateString('en-US') : value}
                </p>
            )
        }
    })

    const { imageUrl, inboundId, outboundId, isLive, startingPrice, currencySymbol } = item || ''

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
