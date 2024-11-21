import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class EditablePost extends Component {
  constructor (props) {
    super(props)
    this.state = {
      author: props.author,
      location: props.location,
      content: props.content
    }
  }

  handleChange (e) {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  render () {
    return (
      <div className='EditablePost'>
        {/* Editable Author Field */}
        <label htmlFor='author'>Author:</label>
        <input
          type='text'
          id='author'
          name='author'
          value={this.state.author}
          onChange={e => this.handleChange(e)}
        />

        {/* Editable Location Field */}
        <label htmlFor='location'>Location:</label>
        <input
          type='text'
          id='location'
          name='location'
          value={this.state.location}
          onChange={e => this.handleChange(e)}
        />

        {/* Editable Content Field */}
        <label htmlFor='content'>Content:</label>
        <input
          type='text'
          id='content'
          name='content'
          value={this.state.content}
          onChange={e => this.handleChange(e)}
        />

        {/* Save Button */}
        <button
          onClick={() =>
            this.props.updatePost(
              this.state.author,
              this.state.location,
              this.state.content
            )
          }
        >
          Save
        </button>
      </div>
    )
  }
}

EditablePost.propTypes = {
  author: PropTypes.string.isRequired,
  dateCreated: PropTypes.string.isRequired,
  lastUpdated: PropTypes.string,
  location: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  updatePost: PropTypes.func.isRequired
}
