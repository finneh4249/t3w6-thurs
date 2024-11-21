import React, { Component } from 'react'
import ReadOnlyPost from './ReadOnlyPost'
import EditablePost from './EditablePost'

export default class PostContainer extends Component {
  constructor () {
    super()

    const date = new Date()
    const dateString = date.toLocaleString('default', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })

    this.state = {
      isEditing: false,
      author: '',
      dateCreated: dateString,
      location: '',
      content: '',
      lastUpdated: dateString
    }
  }

  toggleEditMode () {
    this.setState({ isEditing: !this.state.isEditing })
  }

  updatePost (newAuthor, newLocation, newContent) {
    const date = new Date()
    const dateString = date.toLocaleString('default', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })

    this.setState({
      author: newAuthor,
      location: newLocation,
      content: newContent,
      lastUpdated: dateString
    })
    this.toggleEditMode()
  }

  render () {
    return (
      <>
        <button onClick={() => this.toggleEditMode()}>Toggle Edit Mode</button>
        {this.state.isEditing
          ? (
          <EditablePost
            // Pass all of them using props, one at a time
            author={this.state.author}
            dateCreated={this.state.dateCreated}
            location={this.state.location}
            content={this.state.content}
            lastUpdated={this.state.lastUpdated}
            updatePost={(author, location, content) =>
              this.updatePost(author, location, content)
            }
          />
            )
          : (
          <ReadOnlyPost
            // Pass all of them using props, one at a time
            author={this.state.author}
            dateCreated={this.state.dateCreated}
            location={this.state.location}
            content={this.state.content}
            lastUpdated={this.state.lastUpdated}
          />
            )}
      </>
    )
  }
}
