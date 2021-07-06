import React from 'react'
import { Link, useParams } from 'react-router-dom'
import useDealsStore from '@src/store/deals'
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

    const {
        imageUrl,
        inboundId,
        outboundId,
        isLive,
        numberOfBidders,
        endDate,
        viewersCount,
        currency,
        startingPrice,
        currencySymbol
    } = filtered || ''

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
                <Deatils>
                    <div>
                        <p>
                            <small>Bidders:</small> {numberOfBidders}
                        </p>
                        <p>
                            <small>Viewed:</small> {viewersCount}
                        </p>
                    </div>
                    <div>
                        <p>
                            <small>Currency:</small> {currency}
                        </p>
                        <p>
                            <small>Ending:</small> {new Date(endDate).toLocaleDateString('en-US')}
                        </p>
                    </div>
                </Deatils>
                <Price>
                    <p>Price:</p>
                    <h4>{`${currencySymbol}${startingPrice}`}</h4>
                </Price>
            </Content>
        </Wrapper>
    )
}

export default ItemPage
