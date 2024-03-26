import axios from 'axios';
import { create } from 'zustand';
//https://image.tmdb.org/t/p/w200/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg
export const useStore = create((set) => {
    return {
        data: {
            popular_movie: [],
            popular_tv: [],
            top_rated_movie: [],
            top_rated_tv: []
        },
        detail: {},
        poster: 'https://image.tmdb.org/t/p/original/',
        thumb: 'https://image.tmdb.org/t/p/w',
        getData: (cate, type) => {
            axios(`https://api.themoviedb.org/3/${cate}/${type}?api_key=f89a6c1f22aca3858a4ae7aef10de967`)
                .then(res => {
                    set((state) => {
                        // console.log('res.data.results : ', res.data.results)
                        return { data: { ...state.data, [`${type}_${cate}`]: res.data.results } }
                    });
                });
        },
        getDetail: (cate, id) => {
            const url = `https://api.themoviedb.org/3/${cate}/${id}?api_key=f89a6c1f22aca3858a4ae7aef10de967&language=en-US&append_to_response=aggregate_credits,images,videos,casts`
            axios(url)
                .then(res => {
                    set((state) => {
                        // console.log('res.data : ', res.data)
                        return { detail: res.data }
                    });
                });
        }
    }
})