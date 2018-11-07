

class Gif extends React.Component {

  render() {
    return (
        <div className={'gif'}>
            <a href={this.props.sourceUrl} title='Viev this on giphy' target='new'>
                <img id='gif' src={this.props.gifUrl} className={'gif_image'} />
            </a>
        </div>
    );
  }
}
