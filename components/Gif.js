
class Gif extends React.Component {
  render() {
    return (
        <div>
          <img id='gif' src={this.props.gif.url} className={'gif_image'}/>
        </div>
    );
  }
}
