import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const employeeApi = createApi({
    reducerPath: 'employeeApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api/' }),
    endpoints: (builder) => ({
      getAllEmployees: builder.query({
        query: () => `employee`,
        providesTags:['employeeDetails'],
      }),
      getEmployeeById: builder.query({
        query: (id) => `/employee/${id}`,
      }),
      createNewEmployee: builder.mutation({
        query: body => ({
          url: '/employee',
          method: 'POST',
          body: body,
        }),
        invalidatesTags:['employeeDetails']
      }),
      deleteEmployee: builder.mutation({
        query: id => ({
          url: `/employee/${id}`,
          method: 'DELETE',
        }),
        invalidatesTags:['employeeDetails'],
      }),
      updateEmployee: builder.mutation({
        query: ({id,body}) =>({
          url: `/employee/${id}`,
          method : 'PUT',
          body: body,
        }),
        invalidatesTags:['employeeDetails']
      })
      
    }),
  })
console.log(employeeApi)

  export const { useGetAllEmployeesQuery , useGetEmployeeByIdQuery , useCreateNewEmployeeMutation  , useDeleteEmployeeMutation , useUpdateEmployeeMutation} = employeeApi