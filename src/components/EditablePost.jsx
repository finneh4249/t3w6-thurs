import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class EditablePost extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isEditing: true
    }
  }

  render () {
    return (
    <div className='EditablePost'>
      {/* Editable Author Field */}
      <label htmlFor='author'>Author:</label>
      <input type='text' id='author' name='author' value={this.props.author} />

      {/* Editable Location Field */}
      <label htmlFor='location'>Location:</label>
      <input type='text' id='location' name='location' value={this.props.location} />

      {/* Editable Content Field */}
      <label htmlFor='content'>Content:</label>
      <input type='text' id='content' name='content' value={this.props.content} />
    </div>
    )
  }
}

EditablePost.propTypes = {
  author: PropTypes.string.isRequired,
  dateCreated: PropTypes.string.isRequired,
  lastUpdated: PropTypes.string,
  location: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}
