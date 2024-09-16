import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const rapidPaiKay = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;

export const articleApi = createApi({
  reducerPath: "articleApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://article-extractor-and-summarizer.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      headers.set("x-rapidapi-key", rapidPaiKay);
      headers.set(
        "x-rapidapi-host",
        "article-extractor-and-summarizer.p.rapidapi.com"
      );

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getSummary: builder.query({
      query: (param) =>
        `/summarize?url=${encodeURIComponent(param.articleUrl)}&length=3`, // You can use the parameter passed to generate dynamic queries
    }),
  }),
});

export const { useLazyGetSummaryQuery } = articleApi;
