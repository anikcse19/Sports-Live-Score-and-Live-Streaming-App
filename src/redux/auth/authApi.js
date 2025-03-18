import apiSlice from "../api/api";

const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    
    loginUser: builder.mutation({
      query: (data) => ({
        url: "/auth/sign-in",
        method: "POST",
        body: data,
      }),

      invalidatesTags: ["users"],
    }),

    signupUser: builder.mutation({
      query: (data) => ({
        url: "/auth/sign-up",
        method: "POST",
        body: data,
      }),

      invalidatesTags: ["users"],
    }),

    logoutUser: builder.mutation({
      query: (data) => ({
        url: "/auth/logout",
        method: "POST",
        body: data,
      }),

      invalidatesTags: ["users"],
    }),

    captchaCode: builder.mutation({
      query: (data) => ({
        url: "/auth/add-captcha",
        method: "POST",
        body: data,
      }),

      invalidatesTags: ["users"],
    }),


    resetPassword: builder.mutation({
      query: (resetData) => ({
        url: "/user/reset-password",
        method: "PATCH",
        body: resetData,
      }),

      invalidatesTags: ["users"],
    }),


  }),
});
export const {
  useLoginUserMutation,
  useLogoutUserMutation,
  useCaptchaCodeMutation,
  useSignupUserMutation,
  useResetPasswordMutation
} = authApi;
export default authApi;
