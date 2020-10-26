import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FavCards from './../../FavCards';
import { storageHandler } from './../../../helper';
import './style.css';

class Favourites extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        if (this.props.location.pathname === '/favourites') {
            let favouriteData = storageHandler.getLocalStorage('favouriteData');
            let favourited = storageHandler.getLocalStorage('favourited');
            this.setState({ 
                apiData: favouriteData,
                favourited: favourited
             });

        }
    }

    render() {
        let { apiData, favourited } = this.state;
        return (
            <div className='title'>
                <div className='title-text'>Favourite Page</div>
                <Container>
                    <div className='card-section'>
                        <Row className="justify-content-center">
                            <Col xs={12} md={12}>
                                {apiData && !apiData.data.Error ? <FavCards apiData={apiData} favourited={favourited} /> : <div className='error-section'>No favourite datas!</div>}
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        );
    }
}

export default Favourites;
