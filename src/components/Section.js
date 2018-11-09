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
      <div className="card mx-auto" style={{width:'50%'}}>
        <h2 className="card-header">
        {section.title}
        <button onClick={this.handleClick} className="btn btn-primary btn-lg float-right">
        {this.state.isOpen ? "close" : "open"}</button>
        </h2>
        <div className="card-body">
          {body}
        </div>
        <h3 className="card-subtitle text-muted">creation date</h3>
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
