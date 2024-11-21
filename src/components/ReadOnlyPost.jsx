import React from 'react'
import PropTypes from 'prop-types'
export default function ReadOnlyPost (props) {
  return (
        <div className="ReadOnlyPost">
            <h1>{props.author}</h1>
            <h2>{props.location}</h2>
            <p>{props.content}</p>

            <h6>Created On: {props.dateCreated}</h6>
            {
                props.lastUpdated !== props.dateCreated
                  ? <h6>Last Updated: {props.lastUpdated}</h6>
                  : null
            }

        </div>
  )
}
ReadOnlyPost.propTypes = {
  author: PropTypes.string.isRequired,
  dateCreated: PropTypes.string.isRequired,
  lastUpdated: PropTypes.string,
  location: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}
