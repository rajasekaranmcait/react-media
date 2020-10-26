import React, { Component } from 'react';
import { InputGroup, FormControl, DropdownButton, Dropdown, Container, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';
import Cards from './../../Cards';
import './style.css';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            dropdownValue: 'Dropdown'
        };
    }

    handleInput(e) {
        let inputValue = e.target.value;
        this.setState({
            inputValue: inputValue
        });
    }

    handleDropdown(e) {
        this.setState({
            dropdownValue: e
        });
    }

    searchSubmit() {
        let apiBaseUrl = 'http://www.omdbapi.com/?apikey=1e70ae9b&t=' + this.state.inputValue;
        axios.get(apiBaseUrl)
            .then((data) => {
                if (data && !data.data.Error) {
                    console.log('api-data', data);
                    this.setState({ apiData: data });
                }
                else {
                    console.log('api-data-error', data);
                    this.setState({ apiData: data });
                }
            })
            .catch(function (error) {
                console.log('api-catch-error', error);
            });
    }

    render() {
        let { inputValue, dropdownValue, apiData } = this.state;
        return (
            <div className='title'>
                <div className='title-text'>Wel come to React</div>
                <Container>
                    <Row className="justify-content-center">
                        <Col xs={12} md={8}>
                            <InputGroup>
                                <FormControl
                                    placeholder="Movies Name, Year, Genre"
                                    value={inputValue}
                                    onChange={(e) => { this.handleInput(e) }}
                                />
                                <DropdownButton
                                    as={InputGroup.Append}
                                    variant="outline-secondary"
                                    title={dropdownValue}
                                    id="dropdownValue"
                                    className='dropdownBtn'
                                    onSelect={(e) => { this.handleDropdown(e) }}
                                >
                                    <Dropdown.Item eventKey="All">All</Dropdown.Item>
                                    <Dropdown.Item eventKey="Movies">Movies</Dropdown.Item>
                                    <Dropdown.Item eventKey="Series">Series</Dropdown.Item>
                                    <Dropdown.Item eventKey="Episodes">Episodes</Dropdown.Item>
                                </DropdownButton>
                                <div className='searchbtn'>
                                    <Button variant="primary" onClick={() => { this.searchSubmit() }}>Search</Button>
                                </div>
                            </InputGroup>
                        </Col>
                    </Row>
                    <div className='card-section'>
                        <Row className="justify-content-center">
                            <Col xs={12} md={12}>
                                {apiData && (!apiData.data.Error ? <Cards apiData={apiData} /> : <div className='error-section'>Data not found!</div>)}
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        );
    }
}

export default Home;
