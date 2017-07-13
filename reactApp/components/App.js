import React from 'react';
import { Table, ButtonToolbar, Button, Popover, OverlayTrigger, FormControl, Form, FormGroup, Col, ControlLabel, Checkbox} from 'react-bootstrap';
import NameEditor from './NameEditor.js'
import CalendarItem from './CalendarItem'

// class component
class App extends React.Component {

  render() {

    var schedule = [{
        time: "9:00 AM",
        description: "Exercise - Run 50 miles"
    }, {
        time: "10:00 AM",
        description: "Exercise - Run 50 miles"
    },{
        time: "11:00 AM",
        description: "Exercise - Run 50 miles"
    },{
        time: "12:00 PM",
        description: "Exercise - Run 50 miles"
    },{
        time: "1:00 PM",
        description: "Exercise - Run 50 miles"
    },{
        time: "2:00 PM",
        description: "Exercise - Run 50 miles"
    },{
        time: "3:00 PM",
        description: "Exercise - Run 50 miles"
    },{
        time: "4:00 PM",
        description: "Exercise - Run 50 miles"
    }];

    console.log(CalendarItem);

    return (
      <div style={{marginLeft:'25%', marginRight:'25%', marginTop:'2em'}}>
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>Time</th>
              <th>Today's Schedule</th>
            </tr>
          </thead>
          <tbody>
            {schedule.map((item) => <CalendarItem time={item.time} description={item.description}/>)}
          </tbody>
        </Table>
      </div>
    );
  }
};

/* Equivalent function component! */
// const App = (/* props OR { prop1, prop2 } */) => (
//    <div>
//      <p>{displayMessage}</p>
//    </div>
// );


/*
==========================================================
This is what you do if you want this component or any
other to become a connected "container" component!
==========================================================
*/
// /* At top of file: */
// import { connect } from 'react-redux';
//
// /* At bottom of file: */
// const mapStateToProps = (state) => ({
//    someStateProp: /* state.something typically */
// });
//
// const mapDispatchToProps = (dispatch) => ({
//    someDispProp: /* some function that dispatches an action */
// });
//
// App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
