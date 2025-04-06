import { BaseQueryFn, createApi, EndpointBuilder, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import endpoints from './leEndpoints';
interface InputData {
  [key: string]: any;
}

const leApiBuilderQuery: any = (
  queryBuilder: EndpointBuilder<BaseQueryFn, any, any>,
) => {
  let endpointObj = {};
  for (let i = 0; i < endpoints.length; i++) {
    const name = endpoints[i]?.name,
      method = endpoints[i]?.method,
      url = endpoints[i]?.url;
    const tagsToInvalidateOrProvide = endpoints[i]?.provideTags || [];
    endpointObj = {
      ...endpointObj,
      [name]:
        method === 'POST'
          ? queryBuilder.mutation({
              query: (inputData: InputData) => ({
                url,
                method,
                body: inputData,
              }),
              invalidatesTags: tagsToInvalidateOrProvide,
            })
          : method === 'PATCH'
          ? queryBuilder.mutation({
              query: (inputData: InputData) => ({
                url,
                method,
                body: inputData,
              }),
            })
          : method === 'DELETE'
          ? queryBuilder.mutation({
              query: (params: string) => ({
                url: `${endpoints[i].url}/${params}`,
                method,
              }),
            })
          : queryBuilder.query({
              query: (params: string = '') => ({
                url: `${endpoints[i].url}/${params}`,
              }),
              providesTags: tagsToInvalidateOrProvide,
            }),
    };
  }
  return endpointObj;
};


const LeApi = createApi({
  reducerPath: 'leApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'http://localhost:3000',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as any).auth.access_token;      
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  refetchOnFocus: true,
  refetchOnMountOrArgChange: true,
  refetchOnReconnect: true,
  endpoints: (builder) => leApiBuilderQuery(builder),
  // endpoints: (builder) => ({
  //   Login: builder.mutation({
  //     query: (inputData: InputData) => ({
  //       url: '/auth/login',
  //       method: 'POST',
  //       body: inputData,
  //     }),
  //   }),
  // }),
  tagTypes: [],
});

export default LeApi;