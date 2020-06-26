import React from 'react';

export default class GifSearch extends React.Component {
  constructor() {
    super()
    this.state = {
      query: ""
    }
  }
  
  render() {
    return(
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <input onChange={this.props.handleChange} name="query" value={this.props.formData} type="text"></input>
          <button type="submit" >Search</button>
        </form>
      </div>
    )
  }
}

