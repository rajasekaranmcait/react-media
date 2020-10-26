import React, { Component } from 'react';
import { Card, Form } from 'react-bootstrap';
import { BsHeartFill } from 'react-icons/bs';
import { withRouter } from 'react-router';
import './style.css';

class FavCards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            apiData: props.apiData,
            isChecked: false
        };
    }

    render() {
        let imgUrl = this.props.apiData && this.props.apiData.data && this.props.apiData.data.Poster || '';
        let releaseDate = this.props.apiData && this.props.apiData.data && this.props.apiData.data.Released || '';
        let mediaId = this.props.apiData && this.props.apiData.data && this.props.apiData.data.imdbID || '';
        let title = this.props.apiData && this.props.apiData.data && this.props.apiData.data.Title || '';
        let titleRoute = title.toString().toLowerCase().replace(/[^a-zA-Z0-9]/g, "-");
        return (
            <React.Fragment>                <Card className={'card-content' + (this.props.location.pathname === '/' ? ' home' : '')} onClick={(e) => { this.cardClick(e, titleRoute, mediaId) }}>
                <Card.Img variant="top" src={imgUrl} />
                <Card.Body className='card-meta'>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{releaseDate}</Card.Text>
                    <div className='fav-content favPage'>
                        <Form.Check
                            type="checkbox"
                            label="Favourite"
                            className='form-check'
                        />
                        <div className='fav-heart'>
                            <BsHeartFill />
                        </div>
                    </div>
                </Card.Body>
            </Card>
            </React.Fragment>
        );
    }
}

export default withRouter(FavCards);
