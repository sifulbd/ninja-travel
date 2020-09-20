import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Bookingform =  () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const history = useHistory();
    const handleBook = (id) => {
        history.push(`/book/${id}`);
    }
    return (
        <div>
            <Form className="nt-booking-form">
                <Form.Group className="col-sm-12">
                    <Form.Label className="form-label">Origin</Form.Label>
                    <Form.Control as="select">
                        <option>Dhaka</option>
                        <option>Cox Bazar</option>
                        <option>Chottogram</option>
                        <option>Rajshahi</option>
                        <option>Khulna</option>
                        <option>Sylhet</option>
                        <option>Foridpur</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="col-sm-12">
                    <Form.Label className="form-label">Destination</Form.Label>
                    <Form.Control as="select">
                        <option>Dhaka</option>
                        <option>Cox Bazar</option>
                        <option>Chottogram</option>
                        <option>Rajshahi</option>
                        <option>Khulna</option>
                        <option>Sylhet</option>
                        <option>Foridpur</option>
                    </Form.Control>
                </Form.Group>
                <div className="row date-selectr">
                    <Form.Group className="col-sm-6">
                        <Form.Label className="form-label">From</Form.Label>
                        <DatePicker className="form-control"
                            selected={startDate}
                            onChange={date => setStartDate(date)}
                            selectsStart
                            startDate={startDate}
                            endDate={endDate}
                        />
                    </Form.Group>
                    <Form.Group className="col-sm-6">
                        <Form.Label className="form-label">To</Form.Label>
                        <DatePicker className="form-control" 
                            selected={endDate} 
                            onChange={date => setEndDate(date)}
                            selectsEnd
                            startDate={startDate}
                            endDate={endDate}
                            minDate={startDate}
                        />
                    </Form.Group>
                </div>
                <Form.Group>
                    <Button className="btn btn-block" onClick={handleBook} variant="primary" type="submit">
                        Start Booking
                    </Button>
                </Form.Group>
            </Form>
        </div>
    )};


export default Bookingform;