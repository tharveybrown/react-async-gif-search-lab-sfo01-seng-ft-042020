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
      <form onSubmit={this.props.handleSubmit} className="form-inline col-md-6">
        <div className="form-group mb-2">
          <input className="form-control" onChange={this.props.handleChange} name="query" value={this.props.formData} type="text"></input>
        </div>
        <button className="btn btn-primary mb-2" type="submit" >Search</button>
      </form>
    )
  }
}

