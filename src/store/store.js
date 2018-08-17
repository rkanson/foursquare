import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  currentRound: 0,
  queueVisible: false,
  playerQueue: [
    {
      playerName: 'RJ Kanson',
      currentlyPlaying: false,
      totalRounds: 0,
      longestStreak: 0,
      pointsEarned: 0,
    },
    {
      playerName: 'Tommy Hartman',
      currentlyPlaying: false,
      totalRounds: 0,
      longestStreak: 0,
      pointsEarned: 0,
    },
    {
      playerName: 'Tyler Turnure',
      currentlyPlaying: false,
      totalRounds: 0,
      longestStreak: 0,
      pointsEarned: 0,
    },
    {
      playerName: 'Jack Bittner',
      currentlyPlaying: false,
      totalRounds: 0,
      longestStreak: 0,
      pointsEarned: 0,
    },
    {
      playerName: 'Ryan Hartman',
      currentlyPlaying: false,
      totalRounds: 0,
      longestStreak: 0,
      pointsEarned: 0,
    },
    {
      playerName: 'John Doe',
      currentlyPlaying: false,
      totalRounds: 0,
      longestStreak: 0,
      pointsEarned: 0,
    },
  ],
};

export default new Vuex.Store({
  state,
  mutations: {
    incrementRounds() {
      state.currentRound++;
    },
    toggleQueue() {
      state.queueVisible = !state.queueVisible;
    },
  },
});
