import React from 'react'
import PropTypes from 'prop-types'
import SingleItem from './SingleItem'
import { Wrapper } from './ItemsList.style'

function ItemsList({ list }) {
    return (
        <Wrapper>
            {React.Children.toArray(
                list.map(item => (
                    // eslint-disable-next-line react/jsx-key
                    <SingleItem item={item} />
                ))
            )}
        </Wrapper>
    )
}

ItemsList.propTypes = {
    list: PropTypes.array.isRequired
}

export default ItemsList
