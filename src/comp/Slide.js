import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../Store'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../slide.scss";

function Slide(props) {

    const { data, thumb, poster } = useStore();
    const Navigate = useNavigate();

    return (
        <Swiper className="mySwiper">
            {
                data.popular_movie.map((obj) => {
                    return <SwiperSlide style={{ backgroundImage: `url(${poster + obj.backdrop_path})` }}
                        className="main-swiper-slide" key={obj.id}>
                        <figure className="main-figure">
                            <img src={thumb + '500/' + obj.poster_path} />
                            <figcaption>
                                <h2 className="title">{obj.original_title}</h2>
                                <p className="overview">{obj.overview}</p>
                                <div className="slide-btn">
                                    <button className="Watch-btn"
                                        onClick={() => { Navigate(`/movie/${obj.id}`) }}>Watch now</button>
                                    <button className="trailer-btn">Watch trailer</button>
                                </div>
                            </figcaption>
                        </figure>
                    </SwiperSlide>
                })
            }
        </Swiper>
    );
}

export default Slide;