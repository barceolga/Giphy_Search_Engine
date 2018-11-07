
var initial_gif_URL = "http://www.animatedimages.org/data/media/132/animated-animal-image-0057.gif"
var styles = {
  minWidth: '568px',
  minHeight: '400px'
}
class Gif extends React.Component {
  getUrl() {
    return this.props.sourceUrl || initial_gif_URL;
  }
  render() {
    var url = !this.props.gifLoaded ? initial_gif_URL : this.props.gifUrl;
    return (
        <div className={'gif'} style={styles}>
            <a href={this.getUrl()} title='Viev this on giphy' target='new'>
                <img id='gif' src={url} className={'gif_image'} />
            </a>
        </div>
    );
  }
}
