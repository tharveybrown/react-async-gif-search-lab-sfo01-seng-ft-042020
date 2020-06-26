import React from 'react';

export default class GifList extends React.Component {

  displayGifs = () => {
    return this.props.gifs.map(gif => {
      return (
        <li key={gif.id}>
          <img alt="gif" src={gif.url} width="300px"></img>
        </li>
      )
    })
  }
  render() {
    return(
      <div>
        <ul>{this.displayGifs()}</ul>
      </div>
    )
  }
}

