import baseApi from "../api/baseApi";

export const candidateApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    candidates: build.query({
        query: (arg) => ({
          url: "/api/v1/candidate/candidates",
          method: "GET",
          params:arg
        }),
        providesTags:["Candidates"]
      }),
    shortlistedCandidates: build.query({
        query: () => ({
          url: "/api/v1/candidate/shortlisted",
          method: "GET",
        }),
        providesTags:["Candidates"]
      }),
      CreateCandidiate: build.mutation({
        query: (data) => ({
          url: "api/v1/candidate/create",
          method: "POST",
          body: data,
        }),
        invalidatesTags: ["Candidates"],
      }),
      updateCandidate: build.mutation({
        query: ({id,data}) => ({
          url: `/api/v1/candidate/updateCandidate/${id}`,
          method: "PATCH",
          body:data
        }),
        invalidatesTags: ["Candidates"],
      }),
      deleteCandidate: build.mutation({
        query: (id) => ({
          url: `/api/v1/candidate/deleteCandidate/${id}`,
          method: "DELETE",
          
        }),
        invalidatesTags: ["Candidates"],
      }),
      rejectedCandidate: build.mutation({
        query: (id) => ({
          url: `/api/v1/candidate/rejected/${id}`,
          method: "PATCH",
        }),
        invalidatesTags: ["Candidates"],
      }),
  }),
});

export const { useCandidatesQuery,useCreateCandidiateMutation,useUpdateCandidateMutation,useDeleteCandidateMutation,useRejectedCandidateMutation} =
candidateApi;

// rejected