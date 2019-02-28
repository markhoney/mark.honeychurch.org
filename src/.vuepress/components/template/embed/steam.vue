<template>
  <div>
    <img :src="account.avatarmedium" />
    <h3><a :href="account.profileurl">{{account.realname}} ({{account.personaname}})</a></h3>
    <p>Created: {{(new Date(account.timecreated * 1000)).toLocaleDateString("en-NZ", {year: 'numeric', month: 'long', day: 'numeric'})}}</p>
    <p>Last Seen: {{(new Date(account.lastlogoff * 1000)).toLocaleDateString("en-NZ", {year: 'numeric', month: 'long', day: 'numeric'})}}</p>
    <p>Location: {{account.loccountrycode}}</p>
    <h3>Games: {{games.length}}</h3>
    <a v-for="game in games" :href="'https://store.steampowered.com/app/' + game.appid"><img :src="'https://steamcdn-a.opskins.media/steam/apps/' + game.appid + '/capsule_sm_120.jpg'" :alt="game.name" /></a>
  </div>
</template>


<script>
  // https://developer.valvesoftware.com/wiki/Steam_Web_API
  const apikey = "14E51274DBD7F1C2958A018B7F3BC2E1";
  const account = "76561197995070373";
  const axios = require("axios");
  var gamepage = "https://store.steampowered.com/app/";

  export default {
    data() {
      return {
        account: {},
        friends: [],
        games: []
      };
    },
    async beforeMount() {
      this.account = (await axios.get(
        "https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=" +
          apikey +
          "&steamids=" +
          account
      )).data.response.players[0];
      /*this.friends = (await axios.get(
        " https://api.steampowered.com/ISteamUser/GetFriendList/v0001/?relationship=friend&key=" +
          apikey +
          "&steamid=" +
          account
      )).data.response.friendslist.friends;*/
      this.games = (await axios.get(
        "https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?include_appinfo=1&include_played_free_games=1&key=" +
          apikey +
          "&steamid=" +
          account
      )).data.response.games;
    },
    computed: {
      sortedgames: function() {
        return this.games.sort((a, b) => a.playtime_forever < b.playtime_forever);
      }
    }
  };
</script>

<style scoped>
  a {
    margin: 0 2px;
    font-size: 0.6em;
  }
  a img {
    width: 120px;
    height: 45px;
    overflow: hidden;
    display: inline-block;
  }
</style>
