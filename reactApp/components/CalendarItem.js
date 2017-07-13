import React from 'react';
import { Table, ButtonToolbar, Button, Popover, OverlayTrigger, FormControl, Form, FormGroup, Col, ControlLabel, Checkbox} from 'react-bootstrap';

// Calendar Item Component
class CalendarItem extends React.Component {
  constructor() {
    super();
  }
  render() {
    const popoverRight = (
      <Popover id="popover-positioned-right" title="Editing Schedule">
        <Form horizontal>
          <FormGroup>
            <Col xs={12}>
              <FormControl type="text" placeholder="Title" />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col xs={12}>
              <FormControl type="text" placeholder="Description" />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col xs={12}>
              <Col xs={6}>
                <Button type="submit">
                  Save
                </Button>
              </Col>
              <Col xs={6}>
                <Button type="button">
                  Close
                </Button>
              </Col>
            </Col>
          </FormGroup>
        </Form>
      </Popover>
    );

    return (
      <tr>
        <td>{this.props.time}</td>
        <td>
          <OverlayTrigger trigger="click" placement="right" overlay={popoverRight}>
            <Button block>{this.props.description}</Button>
          </OverlayTrigger>
        </td>
      </tr>
    );
  }
};

export default CalendarItem;
