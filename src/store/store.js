import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  currentRound: 0,
  queueVisible: false,
  scoreboardVisible: false,
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
};

export default new Vuex.Store({
  state,
  mutations: {
    toggleQueue() {
      state.queueVisible = !state.queueVisible;
    },
    toggleScoreboard() {
      state.scoreboardVisible = !state.scoreboardVisible;
    },
    createCurrentlyPlaying() {
      for (let i = 0; i <= 3; i++) {
        let player = state.playerQueue[i];
        state.currentlyPlayingQueue.push(player);
      }
      for (let i = 0; i <= 3; i++) {
        state.playerQueue.shift();
      }
    },
    incrementRounds() {
      state.currentRound++;
    },
    incrementTotalRounds() {
      state.currentlyPlayingQueue.forEach(function(element) {
        element.totalRounds++;
      });
    },
    updateQueue() {
      if (state.currentlyPlayingQueue.length < 4) {
        let player = state.playerQueue.shift();
        state.currentlyPlayingQueue.push(player);
      }
    },
    removePlayer(state, i) {
      let player = state.currentlyPlayingQueue[i];
      player.currentlyPlaying = false;
      state.playerQueue.push(player);
      state.currentlyPlayingQueue.splice(i, 1);
    },
  },
});
