// first attempt 5/29/18
// import React, { Component } from 'react';
// import { Navbar } from 'react-bootstrap';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as actions from './actions/catActions';
// import CatList from './CatList';
//
// export class App extends Component {
//   componentDidMount(){
//     if(this.props.catPics.length === 0) {
//       this.props.actions.fetchCats();
//     }
//   }
//
//   render() {
//     return (
//       <div className="App">
//         <Navbar>
//           <Navbar.Header>
//             <Navbar.Brand>
//               <a href="#">CatBook</a>
//             </Navbar.Brand>
//           </Navbar.Header>
//         </Navbar>
//         <CatList catPics={this.props.catPics} />
//       </div>
//     );
//   }
// }
//
// const mapStateToProps = (state) => {
//   return {
//     catPics: state.cats.pictures
//   }
// }
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     actions: bindActionCreators(actions, dispatch)
//   }
// }
//
// export const WrapperApp = connect(mapStateToProps, mapDispatchToProps)(App);

// second attempt 11/18/18
import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions/catActions';
import CatList from './CatList';

export class App extends Component {

  componentDidMount(){
    if(this.props.catPics.lenth === 0){
      this.props.actions.fetchCats();
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">CatBook</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <CatList catPics={this.props.catPics} />
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {catPics: state.cats.pictures}
};

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

export const WrapperApp = connect(mapStateToProps, mapDispatchToProps)(App)
