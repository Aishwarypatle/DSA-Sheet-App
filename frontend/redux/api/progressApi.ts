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
    // toggleProgress: builder.mutation<void, string>({
    //     query: (problemId) => ({
    //         url: "/progress/toggle",
    //         method: "POST",
    //         body: { problemId },
    //     }),

    //     async onQueryStarted(problemId, { dispatch, queryFulfilled }) {
    //         const patchResult = dispatch(
    //         baseApi.util.updateQueryData("getProgress", undefined, (draft) => {
    //             const exists = draft?.find(p => p.problemId === problemId);

    //             if (exists) {
    //             return draft?.filter(p => p.problemId !== problemId);
    //             } else {
    //             draft?.push({ problemId });
    //             }
    //         })
    //         );

    //         try {
    //         await queryFulfilled;
    //         } catch {
    //         patchResult.undo(); // rollback if API fails
    //         }
    //     },
    // }),
  }),
});

export const {
  useGetProgressQuery,
  useToggleProgressMutation,
} = progressApi