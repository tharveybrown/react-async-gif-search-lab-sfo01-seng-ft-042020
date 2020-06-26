import React from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListcontainer extends React.Component {
  
  constructor() {
    super();
    this.state = {
      gifs: [],
      query: ""
    }
  }
  apiKey = '3W7YSK3sLsLvtgb1pXjTl5ftjk35KnBj'

  componentDidMount() {
    // images.original.url
    // let url = ``
    // fetch()
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  handleSubmit = event => {
    event.preventDefault();
    const rootUrl = 'https://api.giphy.com/v1/gifs/search'
    fetch(`${rootUrl}?q=${this.state.query}&api_key=${this.apiKey}&rating=g`)
    .then(res => res.json())
    .then(obj => {
      let firstThree = obj.data.slice(0,3)
      let newArr = firstThree.map(gif => {
        const data = {id: gif.id, url: gif.images.original.url, type: gif.type}
        return data
      });
      this.state.query = "";
      return this.setState({
        gifs: newArr
      })
    })
  }
  
  render() {
    return(
      <div>
        <div >
          <GifSearch 
            formData={this.state.query}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }

}