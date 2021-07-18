import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Box, Title, PriceWrapper } from './SingleItem.style'

function SingleItem({ item }) {
    const { id, imageUrl, inboundId, outboundId, viewersCount, currencySymbol, currentMinPrice } =
        item

    return (
        <Box>
            <Link to={`/item/${id}`}>
                <img src={imageUrl} alt="" />
            </Link>
            <Title>{`${inboundId} - ${outboundId}`}</Title>
            <p>{viewersCount} viewing this</p>
            <Link to={`/item/${id}`}>
                <PriceWrapper>
                    <p>{`Now from ${currencySymbol}${currentMinPrice}`}</p>
                </PriceWrapper>
            </Link>
        </Box>
    )
}

SingleItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default SingleItem
