
class Gif extends React.Component {
  render() {
    //var url = gif.fixed_width_downsampled_url
    return (
        <div>
        <a href={this.props.gif.url} title='viev this on giphy' target='new'>
          <div id='gif' src={this.props.gif.embed_url} className={'gif_image'}> </div>
        </a>
        </div>
    );
  }
}
