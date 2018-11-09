import React,{Component} from 'react';

class Section extends Component {
  constructor (props){
    super(props)
    this.state = {
      isOpen: false
    }
    this.handleClick = handleClick.bind(this)
  }
  render() {
    const {section} = this.props
    const body = this.state.isOpen && <section>{section.text}</section>
    return (
      <div>
        <h2>
        {section.title}
        <button onClick={this.handleClick}>
        {this.state.isOpen ? "close" : "open"}</button>
        </h2>
        {body}
        <h3>creation date</h3>
      </div>
    )
  }
}

// function Section(props) {
//   const {section} = props
//   const {body} = <section>{section.text}</section>
//   return (
//     <div>
//       <h2>
//       {section.title}
//       <button onClick={handleClick}>close</button>
//       </h2>
//        {body}
//       <h3>creation date</h3>
//     </div>
//   )
// }

function handleClick(){
  this.setState({
    isOpen:!this.state.isOpen
  })
}

export default Section
// ReactDOM.render(<Section section={sections} />, document.getElementById('section'));
