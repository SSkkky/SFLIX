import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../Store'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import "../slide.scss";
import { Pagination } from 'swiper/modules';

function Trend({ cate, type }) {
    const { data, thumb, getData } = useStore();
    const [slideResponsiveNum, setSlideNum] = useState(5.5);
    const Navigate = useNavigate();

    useEffect(() => {
        const handleResize = () => {
            if (430 < window.innerWidth && window.innerWidth < 800) {
                if (slideResponsiveNum !== 4.5) {
                    setSlideNum(4.5)
                }
            } else if (window.innerWidth <= 430) {
                if (slideResponsiveNum !== 2.5) {
                    setSlideNum(2.5)
                }
            } else if (window.innerWidth >= 800) {
                if (slideResponsiveNum !== 6.5) {
                    setSlideNum(6.5)
                }
            }
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [window.innerWidth]);

    useEffect(() => {
        getData(cate, type)
    }, [])

    if (!data[`${type}_${cate}`].length) return;

    let list = null;
    if (cate == 'movie' && type == 'popular') {
        list = 'Trending Movies'
    } else if (cate == 'movie' && type == 'top_rated') {
        list = 'Top Rated Movies'
    } else if (cate == 'tv' && type == 'popular') {
        list = 'Trending TV'
    } else {
        list = 'Top Rated TV'
    }

    return (
        <div className="menu-section Trend">
            <div className="header-cont">
                <h3>
                    {list}
                </h3>
                <button>view more</button>
            </div>
            <Swiper
                slidesPerView={slideResponsiveNum}
                spaceBetween={10}
                className="ms-Swiper"
            >
                {
                    data[`${type}_${cate}`].map((obj) => {
                        return <SwiperSlide key={obj.id}>
                            <figure className="ms-figure" onClick={() => {
                                Navigate(`/${cate}/${obj.id}`)
                            }}>
                                <img src={thumb + '200/' + obj.poster_path} />
                                <figcaption>
                                    <h2 className="ms-title">{obj.original_title}</h2>
                                </figcaption>
                            </figure>
                        </SwiperSlide>
                    })
                }
            </Swiper>
        </div>
    );
}

export default Trend;