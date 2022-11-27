import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': '9ca5830ab5msh4af566c358f39a9p1c1b41jsn26dc10484d8e',
//     'X-RapidAPI-Host': ''
//   }
// };

// fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

  export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) =>{
            headers.set('X-RapidAPI-Key', '9ca5830ab5msh4af566c358f39a9p1c1b41jsn26dc10484d8e')
            

            return headers; 
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({query: ()=> '/charts/world'}),
        getSongDetails: builder.query({query: ({ songid }) => `/tracks/details?track_id=${songid}`}),
        getSongRelated: builder.query({query: ({ songid }) => `/tracks/related?track_id=${songid}`}),
    }),
  });

  export const {
    useGetTopChartsQuery,
    useGetSongDetailsQuery,
    useGetSongRelatedQuery,
  } = shazamCoreApi;