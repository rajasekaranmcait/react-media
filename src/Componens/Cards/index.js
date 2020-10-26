import React, { Component } from 'react';
import { Card, Form } from 'react-bootstrap';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { withRouter } from 'react-router';
import { storageHandler } from './../../helper';
import './style.css';

class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            apiData: props.apiData,
            isChecked: false
        };
    }

    componentDidMount() {
        this.setState({ isChecked: this.props.location && this.props.location.state && this.props.location.state.isChecked });
    }

    favouriteClick(e) {
        e.stopPropagation();
        let isChecked = e && e.target.checked;
        let apiData = JSON.stringify(this.props && this.props.apiData);
        if (isChecked) {
            storageHandler.setLocalStorage('favouriteData', apiData);
            storageHandler.setLocalStorage('favourited', true);
        }
        else {
            storageHandler.eraseLocalStorage('favouriteData');
            storageHandler.eraseLocalStorage('favourited', false);
        }
        this.setState({ isChecked: isChecked });
    }

    cardClick(e, titleRoute, mediaId) {
        if (this.props.location.pathname === '/') {
            this.props.history.push({
                pathname: '/' + titleRoute + '/' + mediaId,
                state: { isChecked: this.state.isChecked }
            });
        }
    }

    render() {
        let imgUrl = this.props.apiData && this.props.apiData.data && this.props.apiData.data.Poster || '';
        let releaseDate = this.props.apiData && this.props.apiData.data && this.props.apiData.data.Released || '';
        let mediaId = this.props.apiData && this.props.apiData.data && this.props.apiData.data.imdbID || '';
        let title = this.props.apiData && this.props.apiData.data && this.props.apiData.data.Title || '';
        let titleRoute = title.toString().toLowerCase().replace(/[^a-zA-Z0-9]/g, "-");
        return (
            <React.Fragment>
                <Card className={'card-content' + (this.props.location.pathname === '/' ? ' home' : '')} onClick={(e) => { this.cardClick(e, titleRoute, mediaId) }}>
                    <Card.Img variant="top" src={imgUrl} />
                    <Card.Body className='card-meta'>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>{releaseDate}</Card.Text>
                        <div className='fav-content'>
                            <Form.Check
                                type="checkbox"
                                label="Favourite"
                                className='form-check'
                                onClick={(e) => { this.favouriteClick(e) }}
                            />
                            <div className='fav-heart'>
                                {this.state.isChecked ? <BsHeartFill /> : <BsHeart />}
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </React.Fragment>
        );
    }
}

export default withRouter(Cards);
