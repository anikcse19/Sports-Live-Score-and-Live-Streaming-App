import apiSlice from "../../api/api";

const eventsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // ::::::::::::::::::::::>> CATEGORY WISE EVENT LIST <<::::::::::::::::::::

    // getCategoryWiseEventList: builder.query({
    //   query: (category) => `/event/?sport=${category}&site=${import.meta.env.VITE_SITE}`,
    //   providesTags: ["events"],
    // }),

    getCategoryWiseEventList: builder.query({
      query: (category) => {
        let query;
        if (category === "ALL SPORTS" || category === "CASINO") {
          query = "CRICKET";
        } else {
          query = category;
        }
        return `/event/?sport=${query}&site=${import.meta.env.VITE_SITE}`;
      },
      providesTags: ["events"],
    }),

    // :::::::::::::::::::::::::::::>> CRICKET <<:::::::::::::::::::::::::::::::
    getCricketEventList: builder.query({
      query: () => `/event/?sport=CRICKET&site=${import.meta.env.VITE_SITE}`,
      providesTags: ["events"],
    }),

    // :::::::::::::::::::::::::::::::>> Soccer <<:::::::::::::::::::::::::::::::
    getSoccerEventList: builder.query({
      query: () => `/event/?sport=SOCCER&site=${import.meta.env.VITE_SITE}`,
      providesTags: ["events"],
    }),

    // ::::::::::::::::::::::::::::::>> Tennis <<::::::::::::::::::::::::::::::::
    getTennisEventList: builder.query({
      query: () => `/event/?sport=TENNIS&site=${import.meta.env.VITE_SITE}`,
      providesTags: ["events"],
    }),

    // ::::::::::::::::::::>> ALL LIVE EVENTS COMPETITION WISE <<:::::::::::::::::
    allLiveEvents: builder.query({
      query: () => `/event/competition-wise-events?isInPlay=true`,
      providesTags: ["events"],
    }),

    // :::::::::::::::::::::::::::>> ALL UPCOMMING EVENTS <<:::::::::::::::::::::::
    allUpcommingEvents: builder.query({
      query: () => `/event/competition-wise-events?isInPlay=false`,
      providesTags: ["events"],
    }),

    // :::::::::::::::::::::::::::::>> FULL MARKET <<::;:::::::::::::::::::::::::::
    singleEventFullMarket: builder.query({
      query: (id) => `/event/odds/${id}`,
      providesTags: ["events"],
    }),

    // ::::::::::::::::::::::::::::>> LIVE MATCH COUNT <<::::::::::::::::::::::::::
    liveMatchCount: builder.query({
      query: () => `/event/open-markets-with-count`,
      providesTags: ["events"],
    }),

    // ::::::::::::::::::::::::::::>> Search Events/Teams <<::::::::::::::::::::::::::
    searchEventsTeams: builder.query({
      query: (search) => `/event/search?searchText=${search}`,
      providesTags: ["events"],
    }),

    // ::::::::::::::::::::::::::::>> Place Bet <<::::::::::::::::::::::::::
    placeBet: builder.mutation({
      query: (data) => ({
        url: "/user/bet",
        method: "POST",
        body: data,
      }),

      invalidatesTags: ["balance"],
    }),

    // ::::::::::::::::::::::::::::>> Transaction Request <<::::::::::::::::::::::::::

    tranReq: builder.mutation({
      query: (data) => ({
        url: "/user/transaction-request",
        method: "POST",
        body: data,
      }),
      // invalidatesTags: ["balance"],
    }),

    // ::::::::::::::::::::::::::::>> Fancy Session Exposure <<::::::::::::::::::::::::::
    fancySessionExposure: builder.mutation({
      query: (data) => ({
        url: "/user/bet/fancy-session-exposure",
        method: "POST",
        body: data,
      }),

      invalidatesTags: ["users"],
    }),

    // ::::::::::::::::::::::::::::>> Slider Bannaers <<::::::::::::::::::::::::::
    sliderBanners: builder.query({
      query: () => "/banner",
      providesTags: ["events"],
    }),
  }),
});
export const {
  useGetCategoryWiseEventListQuery,
  useSingleEventFullMarketQuery,
  useLiveMatchCountQuery,
  useAllLiveEventsQuery,
  useAllUpcommingEventsQuery,

  useGetCricketEventListQuery,
  useGetSoccerEventListQuery,
  useGetTennisEventListQuery,

  useSearchEventsTeamsQuery,

  usePlaceBetMutation,
  useTranReqMutation,

  useFancySessionExposureMutation,
  useSliderBannersQuery,
} = eventsApi;
export default eventsApi;
