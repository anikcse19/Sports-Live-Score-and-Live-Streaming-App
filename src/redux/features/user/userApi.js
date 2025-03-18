import apiSlice from "../../api/api";

const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    getBalance: builder.query({
      query: () => "/user/balance",
      providesTags: ["users"],
    }),


    loginStatus: builder.query({
      query: () => "/user/activity-logs?page=1&perPage=10",
      providesTags: ["users"],
    }),

    accountStatement: builder.query({
      query: () => "/user/account-statement?page=1&perPage=1&type=Account",
      providesTags: ["users"],
    }),

    transactionRequest: builder.query({
      query: () => "/user/transaction-request",
      providesTags: ["balance"],
    }),
    
  }),
});
export const { useGetBalanceQuery, useLoginStatusQuery, useAccountStatementQuery, useTransactionRequestQuery } = userApi;
export default userApi;
