import React from 'react';

export default class GifList extends React.Component {

  displayGifs = () => {
    return this.props.gifs.map(gif => {
      return (
        <div key={gif.id}>
          <img alt="gif" src={gif.url}></img>
        </div>
      )
    })
  }
  render() {
    return(
      <div>{this.displayGifs()}</div>
    )
  }
}

