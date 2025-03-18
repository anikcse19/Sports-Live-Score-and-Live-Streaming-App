import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // General Odds Stake States
  stakeModalState: false,
  stake: {},
  amount: 0,
  changedOddValue: 0,

  // Fancy Related Odds States
  fancyOddsStakeModalState: false,
  fancyStake: {},
  fancyAmount: 0,
  fancyChangedOddValue: 0,
};

export const eventsSlice = createSlice({
  name: "eventSlice",
  initialState,
  reducers: {
    // General Odds Stake States
    bettingStakeModal: (state, { payload }) => {
      state.stakeModalState = payload;
    },

    getStake: (state, { payload }) => {
      state.stake = payload;
    },

    getAmount: (state, { payload }) => {
      state.amount = payload;
    },

    setOddIncreaeDecrease: (state, { payload }) => {
      state.changedOddValue = payload;
    },

    // Fancy Odds STtke States
    fancyStakeModalFn: (state, { payload }) => {
      state.fancyOddsStakeModalState = payload;
    },

    getFancyStakeFn: (state, { payload }) => {
      state.fancyStake = payload;
    },

    getFancyAmountFn: (state, { payload }) => {
      state.fancyAmount = payload;
    },
  },
});

export const {
  bettingStakeModal,
  getStake,
  getAmount,
  setOddIncreaeDecrease,
  fancyStakeModalFn,
  getFancyStakeFn,
  getFancyAmountFn,
} = eventsSlice.actions;
export default eventsSlice.reducer;
