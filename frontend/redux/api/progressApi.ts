import { baseApi } from "./baseApi";

interface ProgressResponse {
  problemId: string;
}

export const progressApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProgress: builder.query<ProgressResponse[], void>({
      query: () => "/progress",
      providesTags: ["Progress"],
    }),

    toggleProgress: builder.mutation<void, string>({
      query: (problemId) => ({
        url: "/progress/toggle",
        method: "POST",
        body: { problemId },
      }),
      invalidatesTags: ["Progress"],
    }),
  }),
});

export const {
  useGetProgressQuery,
  useToggleProgressMutation,
} = progressApi