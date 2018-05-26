import React from 'react';

class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = ({index: 0});
  }

  setIndex(num) {
    this.setState({index: num});
  }


  render() {
    return (
      <div className = "Tabs">
        <h1>Tabs</h1>
        <div className = "Erything">
          <ul className = "titles">
            {this.props.info.map( (el,ind) =>
                <li key = {ind}><button onClick = {() => this.setIndex(ind) }> {el.title} </button></li>
            )}
          </ul>
          <article className = "content">
            <p>{this.props.info[this.state.index].content}</p>
          </article>
        </div>
      </div>

    );
  }
}

export default Tabs;


// <ul>
//   this.props.info.map( (el,ind) => { <button onClick = {() => this.setIndex(ind) }> {el.title} </button>
//   });
// </ul>
