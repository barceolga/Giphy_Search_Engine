

var GIPHY_API_URL = 'http://api.giphy.com/';
var GIPHY_PUB_KEY = 'JCNdIIUzjei776ICXPlx1V3EXQAcsWkC';

class App extends React.Component {

    constructor() {
      super();
      this.state = {
        value: '',
        gif: {},
        gifUrl: '',
        sourceUrl: ''
      };
    }

    searchCats(event) {
      event.preventDefault();
      const url = `https://api.giphy.com/v1/gifs/random?api_key=JCNdIIUzjei776ICXPlx1V3EXQAcsWkC&tag=cats`;
      fetch(url)
        .then(response => response.json())
        .then(responseJson => this.setState({gif: {
          gifUrl: responseJson.data.fixed_width_downsampled_url,
          sourceUrl: responseJson.data.url
        }}, console.log(gif)));
    }

    searchDogs(event) {
      event.preventDefault();
      const url = `https://api.giphy.com/v1/gifs/random?api_key=JCNdIIUzjei776ICXPlx1V3EXQAcsWkC&tag=dogs`;
      fetch(url)
        .then(response => response.json())
        .then(responseJson => this.setState({
          gif: {
            gifUrl: responseJson.data.fixed_width_downsampled_url,
            sourceUrl: responseJson.data.url
          }
        },
          console.log(gif)
        )
      );
    }

    searchMonkeys(event) {
      event.preventDefault();
      const url = `https://api.giphy.com/v1/gifs/random?api_key=JCNdIIUzjei776ICXPlx1V3EXQAcsWkC&tag=monkeys`;
      fetch(url)
        .then(response => response.json())
        .then(responseJson => this.setState({
          gif: {
            gifUrl: responseJson.data.fixed_width_downsampled_url,
            sourceUrl: responseJson.data.url
          }
        }));
    }

    searchElephants(event) {
      event.preventDefault();
      const url = `https://api.giphy.com/v1/gifs/random?api_key=JCNdIIUzjei776ICXPlx1V3EXQAcsWkC&tag=elephants`;
      fetch(url)
        .then(response => response.json())
        .then(responseJson => this.setState({
          gif: {
            gifUrl: responseJson.data.fixed_width_downsampled_url,
            sourceUrl: responseJson.data.url
          }
        }));
    }

    searchLions(event) {
      event.preventDefault();
      const url = `https://api.giphy.com/v1/gifs/random?api_key=JCNdIIUzjei776ICXPlx1V3EXQAcsWkC&tag=lions`;
      fetch(url)
        .then(response => response.json())
        .then(responseJson => this.setState({
          gif: {
            gifUrl: responseJson.data.fixed_width_downsampled_url,
            sourceUrl: responseJson.data.url
          }
        }));
    }

    render() {
      return (
        <div>
          <h1> Search animals gifs by name</h1>
          <div className={'panel_title'}>
              <h2>Cats</h2>
              <h2>Monkeys</h2>
              <h2> Dogs</h2>
              <h2> Lions</h2>
              <h2> Elephants</h2>
          </div>
          <div className={'panel_buttons'}>
            <button
            value="cats"
            id="cats"
            onClick ={(event)=>this.searchCats(event)}>
              <img src="../images/Cats.png"/>
            </button>
            <button
            value="monkeys"
            id="monkeys"
            onClick ={(event)=>this.searchMonkeys(event)}>
              <img src="../images/Monkeys.png"/>
            </button>
            <button
            value="dogs"
            id="dogs"
            onClick ={(event)=>this.searchDogs(event)}>
              <img src="../images/Dogs.png"/>
            </button>
            <button
            value="lions"
            id="lions"
            onClick ={(event)=>this.searchLions(event)}>
              <img src="../images/Lions.png"/>
            </button>
            <button
            value="elephants"
            id="elephants"
            onClick ={(event)=>this.searchElephants(event)}>
              <img src="../images/Elephants.png"/>
            </button>
          </div>
          <Gif
                gifUrl={this.state.gif.gifUrl}
                sourceUrl={this.state.gif.sourceUrl}
                />
      </div>
      );
    }
}
