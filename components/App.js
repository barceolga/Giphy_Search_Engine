
class App extends React.Component {

    constructor() {
      super();
      this.state = {
        value: '',
        gif: {},
        gifUrl: '',
        sourceUrl: '',
        gifLoaded: false
      };
    }

    searchAnimals() {
      fetch('https://api.giphy.com/v1/stickers/random?api_key=JCNdIIUzjei776ICXPlx1V3EXQAcsWkC&tag=animals')
        .then(response => response.json())
        .then(responseJson => this.setState({
            gif: {
              gifUrl: responseJson.data.fixed_height_downsampled_url,
              sourceUrl: responseJson.data.url
            }
          }
        )
      );
    }
    searchCats(event) {
      event.preventDefault();
      const url = `https://api.giphy.com/v1/stickers/random?api_key=JCNdIIUzjei776ICXPlx1V3EXQAcsWkC&tag=cat`;
      fetch(url)
        .then(response => response.json())
        .then(responseJson => this.setState({
            gif: {
              gifUrl: responseJson.data.fixed_height_downsampled_url,
              sourceUrl: responseJson.data.url
            },
            gifLoaded: true
          }
        )
      );
    }

    searchDogs(event) {
      event.preventDefault();
      const url = `https://api.giphy.com/v1/stickers/random?api_key=JCNdIIUzjei776ICXPlx1V3EXQAcsWkC&tag=dog`;
      fetch(url)
        .then(response => response.json())
        .then(responseJson => this.setState({
            gif: {
              gifUrl: responseJson.data.fixed_height_downsampled_url,
              sourceUrl: responseJson.data.url
            },
            gifLoaded: true
          })
      );
    }

    searchMonkeys(event) {
      event.preventDefault();
      const url = `https://api.giphy.com/v1/stickers/random?api_key=JCNdIIUzjei776ICXPlx1V3EXQAcsWkC&tag=monkey`;
      fetch(url)
        .then(response => response.json())
        .then(responseJson => this.setState({
            gif: {
              gifUrl: responseJson.data.fixed_height_downsampled_url,
              sourceUrl: responseJson.data.url
            },
            gifLoaded: true
          })
      );
    }

    searchElephants(event) {
      event.preventDefault();
      const url = `https://api.giphy.com/v1/stickers/random?api_key=JCNdIIUzjei776ICXPlx1V3EXQAcsWkC&tag=elephant`;
      fetch(url)
        .then(response => response.json())
        .then(responseJson => this.setState({
          gif: {
            gifUrl: responseJson.data.fixed_height_downsampled_url,
            sourceUrl: responseJson.data.url
          },
          gifloaded: true
        })
      );
    }

    searchLions(event) {
      event.preventDefault();
      const url = `https://api.giphy.com/v1/stickers/random?api_key=JCNdIIUzjei776ICXPlx1V3EXQAcsWkC&tag=lion`;
      fetch(url)
        .then(response => response.json())
        .then(responseJson => this.setState({
          gif: {
            gifUrl: responseJson.data.fixed_height_downsampled_url,
            sourceUrl: responseJson.data.url
          },
          gifloaded: true
        })
      );
    }
    getGifs(gifLoaded) {
      if (gifLoaded == false) {
       this.searchAnimals();
     }
   }
    render() {
      return (
        <div>
          <h1> Animals&#39; gifs search engine</h1>
          <h2> Search animals&#39; gifs by name</h2>
          <div className={'panel_title'}>
              <h3> Dogs</h3>
              <h3>Monkeys</h3>
              <h3>Cats</h3>
              <h3> Lions</h3>
              <h3> Elephants</h3>
          </div>
          <div className={'panel_buttons'}>
              <button
                value="dogs"
                id="dogs"
                onClick ={(event)=>this.searchDogs(event)}>
                  <img src="images/Dogs.png"/>
              </button>
              <button
                value="monkeys"
                id="monkeys"
                onClick ={(event)=>this.searchMonkeys(event)}>
                  <img src="images/Monkeys.png"/>
              </button>
              <button
                value="cats"
                id="cats"
                onClick ={(event)=>this.searchCats(event)}>
                  <img src="images/Cats.png"/>
              </button>
              <button
                value="lions"
                id="lions"
                onClick ={(event)=>this.searchLions(event)}>
                  <img src="images/Lions.png"/>
              </button>
              <button
                value="elephants"
                id="elephants"
                onClick ={(event)=>this.searchElephants(event)}>
                  <img src="images/Elephants.png"/>
              </button>
          </div>
          <Gif
              gifUrl={this.state.gif.gifUrl}
              sourceUrl={this.state.gif.sourceUrl}
              gifLoaded={this.state.gifLoaded}
              getGifs ={this.getGifs()}
            />
      </div>
      );
    }
}
