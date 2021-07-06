import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Box, Title, PriceWrapper } from './SingleItem.style'

function SingleItem({ item }) {
    const { imageUrl, inboundId, outboundId, viewersCount, currencySymbol, currentMinPrice } = item

    return (
        <Box>
            <Link to={`/item/${item.id}`}>
                <img src={imageUrl} alt="" />
            </Link>
            <Title>{`${inboundId} - ${outboundId}`}</Title>
            <p>{viewersCount} viewing this</p>
            <PriceWrapper>
                <Link to={`/item/${item.id}`}>
                    <p>{`Now from ${currencySymbol}${currentMinPrice}`}</p>
                </Link>
            </PriceWrapper>
        </Box>
    )
}

SingleItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default SingleItem
