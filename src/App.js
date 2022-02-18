import React, { Component } from 'react'
import store from './store'
import ReduxLogin from './redux-login'
import {Provider} from 'react-redux'
import BasicInformation from './BasicInformation'
import StudentType from './StudentType'
import Documents from './Documents'
import Steps from './Steps'

class App extends Component {

  /*state = {
    lead: ''
  }*/

  constructor() {
    super()
    this.setLeadData = this.setLeadData.bind(this)
    this.setStep = this.setStep.bind(this)

    this.state = {
      lead: '',
      step: 1,
      error: '',
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

    if (!lead) {
      this.setState({error: "There was a problem connecting to the server. Please get in touch with admissions at admissions@codeimmersives.com."})
    }

    if (lead && lead.error) {
      console.log(':(')
    } else {
      let step = 0

      if (lead) {

        step = 1

        if (lead.type !== "Not Specified") {
          step = 2

          if (lead.firstName
            && lead.lastName
            && lead.socialSecurityNumber
            && lead.phone
            && lead.dateOfBirth
            && lead.graduationDate
            && lead.educationLevel
            && lead.street
            && lead.city
            && lead.state
            && lead.zip) {
            step = 3
          }
        }
        this.setState({lead, step})
      }
    }
  }

  setStep(step) {
    this.setState({step})
  }

  render() {

    const {step} = this.state

    return (
      <Provider store={store}>
        <div className="container">
        <h1>Code Immersives Enrollment</h1>
          {!this.state.lead && !this.state.error &&
            <ReduxLogin onSubmitSuccess={this.setLeadData}/>
          }
          {this.state.error &&
            <p>{this.state.error}</p>
          }
          {this.state.lead &&
            <section>
              
              <Steps onUpdateStep={this.setStep} />

              {this.state.lead.firstName &&
                <p>Welcome back {this.state.lead.firstName}!</p>
              }
              {step === 1 ? <StudentType lead={this.state.lead} onUpdateLead={this.setLeadData} /> : null }
              {step === 2 ? <BasicInformation 
                  lead={this.state.lead}
                  onSubmitSuccess={this.setLeadData}
                />
                : null }
              {step === 3 ? <Documents
                  lead={this.state.lead}
                />
                : null }
            </section>
          }
        </div>
      </Provider>
    );
  }
}

export default App;
