import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import Cards from './../../Cards';
import './style.css';

class MediaDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        let mediaName = this.props.match && this.props.match.params && this.props.match.params.media;
        let apiBaseUrl = 'http://www.omdbapi.com/?apikey=1e70ae9b&t=' + mediaName;
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
        let { apiData } = this.state;
        let mediaData = apiData && apiData.data;
        let title = (mediaData && mediaData.Title) || '';
        let Actors = (mediaData && mediaData.Actors) || '';
        let Awards = (mediaData && mediaData.Awards) || '';
        let Country = (mediaData && mediaData.Country) || '';
        let Director = (mediaData && mediaData.Director) || '';
        let Genre = (mediaData && mediaData.Genre) || '';
        let Language = (mediaData && mediaData.Language) || '';
        let Plot = (mediaData && mediaData.Plot) || '';
        let Production = (mediaData && mediaData.Director) || '';
        let Released = (mediaData && mediaData.Released) || '';
        let Type = (mediaData && mediaData.Type) || '';
        let Writer = (mediaData && mediaData.Writer) || '';
        let metaData = '';
        if (apiData && !apiData.data.Error) {
            metaData = (<div>
                <div className='meta-data'> <span>Title</span> {title}</div>
                <div className='meta-data'> <span>Actors</span> {Actors}</div>
                <div className='meta-data'> <span>Awards</span> {Awards}</div>
                <div className='meta-data'> <span>Country</span> {Country}</div>
                <div className='meta-data'> <span>Director</span> {Director}</div>
                <div className='meta-data'> <span>Genre</span> {Genre}</div>
                <div className='meta-data'> <span>Language</span> {Language}</div>
                <div className='meta-data'> <span>Plot</span> {Plot}</div>
                <div className='meta-data'> <span>Production</span> {Production}</div>
                <div className='meta-data'> <span>Released</span> {Released}</div>
                <div className='meta-data'> <span>Type</span> {Type}</div>
                <div className='meta-data'> <span>Writer</span> {Writer}</div>
            </div>);
        }
        return (
            <div className='title'>
                <div className='title-text'>{title}</div>
                <Container>
                    <div className='card-section'>
                        <Row className="justify-content-center">
                            <Col xs={12} md={12}>
                                {apiData && !apiData.data.Error && <Cards apiData={apiData} />}
                            </Col>
                        </Row>
                    </div>
                    <div className='card-section'>
                        <Row className="justify-content-center">
                            <Col xs={12} md={12}>
                                {metaData}
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        );
    }
}

export default MediaDetails;
