import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import StudentType from './StudentType';
// import MyDropzone from './MyDropzone';
// import Content from './Content';
// import Login from './Login';
// import _ from 'lodash';
// import { findUser } from './services/LeadService';
import store from './store'
import ReduxLogin from './redux-login'
import {Provider} from 'react-redux'

// import TextField from './basic/TextField'
// import SSN from './items/SSN'
// import PhoneNumber from './phone'
import BasicInformation from './BasicInformation'

// function App() {

//   const [user, setUser] = useState({})

//   const state = {
//     type: '',
//     subtype: '',
//   }

//   const callbackFunction = (childData) => {
//     // console.log(childData)
//     this.setState({type: childData.type, subtype: childData.subtype});
//   }

//   const userFind = (e) => {

//       findUser(user)
//         .then(response => {
//           console.log(response);
//       });
//   }

//   const onChangeForm = (e) => {
//       console.log(e.target);
//   }

//   return (
//     <div>
//       <header>
//         <h2>Code Immersives Enrollment</h2>
//       </header>

//       <Login onChangeForm={onChangeForm} findUser={userFind} />

//       <StudentType parentCallback = {callbackFunction} />
//       {this.state.subtype &&

//         // objects.map(function(object, i){
//         //     return <ObjectRow obj={object} key={i} />;
//         // })

//         <MyDropzone />
//       }
//     </div>
//   )
// };

class App extends Component {

  state = {
    lead: ''
  }

  constructor() {
    super()
    this.setLeadData = this.setLeadData.bind(this)

    /*this.state = {
      lead: ''
    }*/

    // for development:
    this.state = {
      lead: {
          "status": "New",
          "email": "jay.vachon@codeimmersives.com",
          "phone": "",//"9876541234",
          "lastName": "Mctest",
          "firstName": "", //"Test",
          "dateAdded": "2022-01-24 19:00",
          "term": "Summer 2022",
          "course": "Associate of Science in Computer Science and Web Architecture",
          "type": "American Veteran",
          "financialAid": "Other - veteran",
          "socialSecurityNumber": "",//"999999999",
          "id": "2200080442",
      }
    }

  }

  setLeadData(lead) {
    if (lead.error) {
      console.log(':(')
    } else {
      this.setState({lead: lead})
    }
  }

  render() {
    return (
      <Provider store={store}>
        <div className="container" style={{marginBotton: 100}}>
          {!this.state.lead &&
            <ReduxLogin onSubmitSuccess={this.setLeadData}/>
            
          }
          {this.state.lead &&
            <section>
              <p>Welcome back {this.state.lead.firstName}!</p>
              <BasicInformation 
                lead={this.state.lead}
                onSubmitSuccess={this.setLeadData}
              />
            </section>
          }
        </div>
      </Provider>
    );
  }
}

export default App;
