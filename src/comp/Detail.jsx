import React, { useEffect, useState } from 'react';
import { useStore } from '../Store'
import { useParams } from 'react-router-dom';
import '../detail.scss'

function Detail() {
    const { detail, getDetail, thumb, poster } = useStore();
    const { id, cate } = useParams();
    let list = null;
    useEffect(() => {
        getDetail(cate, id)

    }, [])

    if (!detail.poster_path) return <>준비중....</>;

    if (cate == 'movie') {
        list = detail.casts.cast.map((obj) => {
            if (obj.order < 5) {
                return <li>
                    <img src={thumb + '200/' + obj.profile_path} />
                    <p>{obj.original_name}</p>
                </li>
            }
        })
    } else {
        list = detail.created_by.map((obj) => {
            return <li>
                <img src={thumb + '200/' + obj.profile_path} />
                <p>{obj.name}</p>
            </li>
        })
    }

    return (
        <>
            <div className='de-bg'
                style={{ backgroundImage: `url(${poster + detail.backdrop_path})` }}>
                <figure>
                    <p><img src={thumb + '300/' + detail.poster_path} alt='' className='de-img' /></p>
                    <figcaption>
                        <h2 className='de-title'>{detail.original_title}</h2>
                        <div className='de-tag'>
                            {
                                detail.genres.map((obj) => {
                                    return <p key={obj.id}>{obj.name}</p>
                                })
                            }
                        </div>
                        <p className='de-overview'>{detail.overview}</p>
                        <div className='de-cast'>
                            <h4>Casts</h4>
                            <ul>
                                {list}
                            </ul>

                        </div>
                    </figcaption>
                </figure>
            </div >
        </>
    );
}

export default Detail;