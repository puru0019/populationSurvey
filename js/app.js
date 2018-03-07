import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Route } from 'react-router-dom';
import Header from '../components/Header';
import DashBoard from '../components/DashBoard';
import PopulationContainer from '../components/PopulationContainer';
import '../css/app.css';
import '../css/utility.css';
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

import { overAllPopulation, populationPerAge, populationPerGender, populationPerRace, populationPerIncome } from '../js/data';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="container">
            <Header />
            <Route exact path="/" render={()=><PopulationContainer title="Over All Population" data={overAllPopulation}/>} />
            <Route path="/age" render={()=><PopulationContainer title="Age Wise Population" data={populationPerAge}/>} />
            <Route path="/gender" render={()=><PopulationContainer title="Gender Wise Population" data={populationPerGender}/>} />
            <Route path="/race" render={()=><PopulationContainer title="Race Wise Population" data={populationPerRace}/>} />
            <Route path="/income" render={()=><PopulationContainer title="Income Wise Population" data={populationPerIncome}/>}/>
            <Route path="/dashboard" render={()=><DashBoard title="Dash Board" data={overAllPopulation}/>}/>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('mount')
);
