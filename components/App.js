
class App extends React.Component {

    constructor() {
      super();
      this.state = {
        gif: {},
        gifUrl: '',
        sourceUrl: '',
        animal: '',
        gifLoaded: false
      };
    }

    getRandomAnimal() {
        var possibleAnimals = ['cat', 'dog', 'monkey', 'elephant', 'lion', 'bear', 'bird', 'mouse', 'squirrel'];
        return possibleAnimals[Math.floor(Math.random()*9)];
    }

    setAnimal() {
       var searchAnimal = this.getRandomAnimal();
       this.setState({
         animal: searchAnimal
       });
    }

    searchAnimals(event) {
      this.setAnimal();
      const {animal} = this.state;
      event.preventDefault();
      const url = `https://api.giphy.com/v1/stickers/random?api_key=JCNdIIUzjei776ICXPlx1V3EXQAcsWkC&tag=funny+${animal}`;
      fetch(url)
        .then(response => response.json())
        .then(responseJson => this.setState({
            gif: {
              gifUrl: responseJson.data.fixed_height_downsampled_url,
              sourceUrl: responseJson.data.url
            },
            gifLoaded: true
          }
        ));
    }

    searchDogs(event) {
      event.preventDefault();
      const url = `https://api.giphy.com/v1/gifs/random?api_key=JCNdIIUzjei776ICXPlx1V3EXQAcsWkC&tag=dog`;
      fetch(url)
        .then(response => response.json())
        .then(responseJson => this.setState({
            gif: {
              gifUrl: responseJson.data.fixed_height_downsampled_url,
              sourceUrl: responseJson.data.url
            },
            gifLoaded: true
          }
        ));
    }

    searchCats(event) {
      event.preventDefault();
      const url = `https://api.giphy.com/v1/gifs/random?api_key=JCNdIIUzjei776ICXPlx1V3EXQAcsWkC&tag=cat`;
      fetch(url)
        .then(response => response.json())
        .then(responseJson => this.setState({
            gif: {
              gifUrl: responseJson.data.fixed_height_downsampled_url,
              sourceUrl: responseJson.data.url
            },
            gifLoaded: true
          }
        ));
    }

    searchMonkeys(event) {
      event.preventDefault();
      const url = `https://api.giphy.com/v1/gifs/random?api_key=JCNdIIUzjei776ICXPlx1V3EXQAcsWkC&tag=monkey`;
      fetch(url)
        .then(response => response.json())
        .then(responseJson => this.setState({
            gif: {
              gifUrl: responseJson.data.fixed_height_downsampled_url,
              sourceUrl: responseJson.data.url
            },
            gifLoaded: true
          }
        ));
    }

    searchElephants(event) {
      event.preventDefault();
      const url = `https://api.giphy.com/v1/gifs/random?api_key=JCNdIIUzjei776ICXPlx1V3EXQAcsWkC&tag=elephant`;
      fetch(url)
        .then(response => response.json())
        .then(responseJson => this.setState({
          gif: {
            gifUrl: responseJson.data.fixed_height_downsampled_url,
            sourceUrl: responseJson.data.url
          },
          gifloaded: true
          }
        ));
    }

    searchLions(event) {
      event.preventDefault();
      const url = `https://api.giphy.com/v1/gifs/random?api_key=JCNdIIUzjei776ICXPlx1V3EXQAcsWkC&tag=lion`;
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
    render() {
      return (
        <div>
          <h1> Animals&#39; gifs search engine</h1>
          <h2> Search gifs by animal&#39; name</h2>
          <div className={'panel_title'}>
              <h3>Dog</h3>
              <h3>Monkey</h3>
              <h3>Cat</h3>
              <h3>Lion</h3>
              <h3>Elephant</h3>
              <h3>Surprise</h3>
          </div>
          <div className={'panel_buttons'}>
              <button
                id="dogs"
                onClick ={(event)=>this.searchDogs(event)}>
                  <img src="images/Dogs.png"/>
              </button>
              <button
                id="monkeys"
                onClick ={(event)=>this.searchMonkeys(event)}>
                  <img src="images/Monkeys.png"/>
              </button>
              <button
                id="cats"
                onClick ={(event)=>this.searchCats(event)}>
                  <img src="images/Cats.png"/>
              </button>
              <button
                id="lions"
                onClick ={(event)=>this.searchLions(event)}>
                  <img src="images/Lions.png"/>
              </button>
              <button
                id="elephants"
                onClick ={(event)=>this.searchElephants(event)}>
                  <img src="images/Elephants.png"/>
              </button>
              <button
                id="elephants"
                onClick ={(event)=>this.searchAnimals(event)}>
                  <img src="images/Surprise.png"/>
              </button>
          </div>
          <Gif
              gifUrl={this.state.gif.gifUrl}
              sourceUrl={this.state.gif.sourceUrl}
              gifLoaded={this.state.gifLoaded}
            />
      </div>
      );
    }
}
