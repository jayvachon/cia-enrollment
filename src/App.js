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
import Documents from './Documents'

class App extends Component {

  state = {
    lead: ''
  }

  constructor() {
    super()
    this.setLeadData = this.setLeadData.bind(this)

    this.state = {
      lead: ''
    }

    // for development:
    /*this.state = {
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
          "educationLevel": '',
          "street": '',
          "city": '',
          "state": '',
          "zip": '',
      }
    }*/

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
        <h1>Code Immersives Enrollment</h1>
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
              <Documents
                lead={this.state.lead}
              />
            </section>
          }
        </div>
      </Provider>
    );
  }
}

export default App;
