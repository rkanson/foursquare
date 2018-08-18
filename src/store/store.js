import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  currentRound: 0,
  queueVisible: false,
  playerQueue: [
    {
      playerName: 'RJ Kanson',
      totalRounds: 0,
      pointsEarned: 0,
    },
    {
      playerName: 'Tommy Hartman',
      totalRounds: 0,
      pointsEarned: 0,
    },
    {
      playerName: 'Tyler Turnure',
      totalRounds: 0,
      pointsEarned: 0,
    },
    {
      playerName: 'Jack Bittner',
      totalRounds: 0,
      pointsEarned: 0,
    },
    {
      playerName: 'Ryan Hartman',
      totalRounds: 0,
      pointsEarned: 0,
    },
    {
      playerName: 'John Doe',
      totalRounds: 0,
      pointsEarned: 0,
    },
  ],
  currentlyPlayingQueue: [],
  holdingQueue: [],
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
