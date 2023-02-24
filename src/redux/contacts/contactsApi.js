import { createApi } from "@reduxjs/toolkit/query/react";
import axios from 'axios';

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data, params })
      return { data: result.data }
    } catch (axiosError) {
      let err = axiosError
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      }
    }
  }
  
export const contactsApi = createApi({
    reducerPath: 'contacts',
    baseQuery: axiosBaseQuery({
      baseUrl: 'https://connections-api.herokuapp.com/',
    }),
    tagTypes: ['Contacts'],
    endpoints: builder => ({
        getContacts: builder.query({
            query: () =>  ({ url: '/contacts'}),
            providesTags: ['Contacts'],
        }),
        addContact: builder.mutation({
            query: values => ({
                url: '/contacts',
                method: 'POST',
                data: values,
            }),
            invalidatesTags: ['Contacts'],
        }),
        deleteContact: builder.mutation({
            query: (id) => ({
                url: `/contacts/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Contacts'],
        }),
        updateContact: builder.mutation({
            query: (id) => ({
                url: `/contacts/${id}`,
                method: 'PATCH',
            }),
            invalidatesTags: ['Contacts'],
        }),
    }),
    
});

export const {
    useGetContactsQuery, 
    useAddContactMutation,
    useDeleteContactMutation,
    useUpdateContactMutation
} = contactsApi;