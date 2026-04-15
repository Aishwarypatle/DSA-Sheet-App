import { baseApi } from "./baseApi";
import { Problem } from "@/types";

export const problemApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProblems: builder.query<Problem[], void>({
      query: () => "/problems",
      providesTags: ["Problems"],
    }),
  }),
});

export const { useGetProblemsQuery } = problemApi;