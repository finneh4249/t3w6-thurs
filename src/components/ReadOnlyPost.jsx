import React from 'react'
import PropTypes from 'prop-types'
export default function ReadOnlyPost (props) {
  return (
        <div className="ReadOnlyPost">
            <h1>{props.author}</h1>

            <h6>Created On: {props.dateCreated}</h6>
            {
                props.lastUpdated !== props.dateCreated
                  ? <h6>Last Updated: {props.lastUpdated}</h6>
                  : null
            }
            <h3>{props.location}</h3>

        </div>
  )
}
ReadOnlyPost.propTypes = {
  author: PropTypes.string.isRequired,
  dateCreated: PropTypes.string.isRequired,
  lastUpdated: PropTypes.string,
  location: PropTypes.string.isRequired
}
