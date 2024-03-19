import baseApi from "../api/baseApi";

export const jobsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    jobs: build.query({
      query: () => ({
        url: "/api/v1/job/jobs",
        method: "GET",
      }),
      providesTags: ["Jobs"],
    }),
    job: build.query({
      query: (id) => ({
        url: `/api/v1/job/detailsJob/${id}`,
        method: "GET",
      }),
      providesTags: ["Jobs"],
    }),
    JobCreate: build.mutation({
      query: (data) => ({
        url: "/api/v1/job/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Jobs"],
    }),
    deleteJob: build.mutation({
      query: (id) => ({
        url: `/api/v1/job/deleteJob/${id}`,
        method: "DELETE",
        
      }),
      invalidatesTags: ["Jobs"],
    }),
    updateJob: build.mutation({
      query: ({id,data}) => ({
        url: `/api/v1/job/updateJob/${id}`,
        method: "PATCH",
        body:data
      }),
      invalidatesTags: ["Jobs"],
    }),
  }),
});

export const { useJobsQuery, useJobCreateMutation,useJobQuery,useDeleteJobMutation,useUpdateJobMutation } = jobsApi;
