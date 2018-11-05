
var GIPHY_API_URL = 'http://api.giphy.com/';
var GIPHY_PUB_KEY = 'JCNdIIUzjei776ICXPlx1V3EXQAcsWkC';


class App extends React.Component {

    constructor() {
      super();
      this.state = {
        searchingText: '',
        gifs: []
      };
    }
    onChangeSearch(event) {
      this.setState({searchingText: event.target.value});
    }

    onSubmit(event) {
      event.preventDefault();
      const {searchingText} = this.state;
      const url = `https://api.giphy.com/v1/gifs/search?api_key=JCNdIIUzjei776ICXPlx1V3EXQAcsWkC&q=${searchingText}`;
      fetch(url)
        .then(response => response.json())
        .then(responseJson => this.setState({gifs: responseJson.data}));
    }
    render() {
      return (
        <div>
            <form onSubmit={event => this.onSubmit(event)}>
                <label htmlFor ="searchingText"> Search by animal name </label>
                <input
                  type="text"
                  id="searchingText"
                  onChange={event => this.onChangeSearch(event)}
                  placeholder="dogs"
                  value = {this.state.searchingText} />
            </form>
            <GifsList gifs={this.state.gifs} />
        </div>
      );
    }

}
