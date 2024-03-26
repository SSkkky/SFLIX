import React from 'react';
import Slide from './Slide';
import Trend from './Trend';

function Home(props) {

    return (
        <>
            <Slide />
            <Trend type="popular" cate="movie" />
            <Trend type="top_rated" cate="movie" />
            <Trend type="popular" cate="tv" />
            <Trend type="top_rated" cate="tv" />
        </>

    );
}

export default Home;