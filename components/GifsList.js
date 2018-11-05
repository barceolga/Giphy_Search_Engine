class GifsList extends React.Component {
  get gifs() {
    return this.props.gifs.map(gif => <Gif key={gif.id} gif={gif} />);
  }
  render() {
    return (
        <div className={'gifs_list'}>
            {this.gifs}
        </div>
    );
    console.log(gifs);
  }
}
