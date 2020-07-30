import React from 'react';
import { Container,
    Form,
    FormGroup,
    FormControl
       } from 'react-bootstrap';
import { NavigationBar } from '../components/navbar';

class Survey extends React.Component {
    // constructor() {}
    render() {
        return (
        <>
        <NavigationBar/>
            <Container>
                <p1>The purpose of the survey would be stated here at the top of the survey. This survey should take less than 10 minutes to complete.</p1>
                <h3>Please tell us a little about yourself.</h3>
                <p>Male or female?</p>
                <Form>
                    <div className="radio">
                    <label>
                        <input type="radio" value="option1" checked={true} />
                        Male
                    </label>
                    </div>
                    <div className="radio">
                    <label>
                        <input type="radio" value="option2" />
                        Female
                    </label>
                    </div>
                    <Form.Group>
                        <p>I found this training very helpful</p>
                        <Form.Control as="select">
                            <option>Strongly agree</option>
                            <option>Agree</option>
                            <option>Neither agree or disagree</option>
                            <option>Disgree</option>
                            <option>Strongly disagree</option>
                        </Form.Control>
                        <br />
                        <p>I feel more comfortable going to volunteer after this training</p>
                        <Form.Control as="select">
                            <option>Strongly agree</option>
                            <option>Agree</option>
                            <option>Neither agree or disagree</option>
                            <option>Disgree</option>
                            <option>Strongly disagree</option>
                        </Form.Control>
                        <br />
                        <p>This training provides a strong understanding of what to expect when volunteering</p>
                        <Form.Control as="select">
                            <option>Strongly agree</option>
                            <option>Agree</option>
                            <option>Neither agree or disagree</option>
                            <option>Disgree</option>
                            <option>Strongly disagree</option>
                            <br />
                        </Form.Control>
                        <p>What could we have done to better improve your experience?</p>
                        <Form.Control type="text" placeholder="Click and type your answer here" />
                    </Form.Group>
                </Form>
            </Container>
        </>
      );
    }
  }
   export default Survey;