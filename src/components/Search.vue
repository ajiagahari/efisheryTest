<template>
  <div class="search">
    <div id="search-bar">
      <span class="tag">
        Select by
      </span>
      <input v-model="name" type="text" placeholder="name"/>
      <select v-model="setSelected" class="setSelected">
        <option value="" selected>Set -- </option>
        <option v-for="option in sets" v-bind:value="option.name">
          {{ option.name }}
        </option>
      </select>
      <select v-model="subtypeSelected">
        <option value="" selected>Subtype -- </option>
        <option v-for="option in subtypes" v-bind:value="option">
          {{ option }}
        </option>
      </select>
      <select v-model="supertypeSelected">
        <option value="" selected>Supertype -- </option>
        <option v-for="option in supertypes" v-bind:value="option">
          {{ option }}
        </option>
      </select>
      <button v-on:click="getSearch()">Search</button>
    </div>
      <ul>
        <router-link :to="{ name: 'View', params: { cardId: card.id }}" tag="li" v-for="card of cards" :key="card.id">
          <img :src="card.imageUrl">
        </router-link>
      </ul>
      <div id="error">
        {{errors[0]}}
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      sets: [],
      setSelected: '',
      subtypes: [ 'EX', 'Special', 'Restored', 'Level Up', 'MEGA', 'Technical Machine', 'Item', 'Stadium', 'Supporter', 'Stage 1', 'GX', 'Pokémon Tool', 'Basic', 'LEGEND', 'Stage 2', 'BREAK', "Rocket's Secret Machine" ],
      subtypeSelected: '',
      supertypes: [ 'Energy', 'Pokémon', 'Trainer' ],
      supertypeSelected: '',
      cards: [],
      errors: [],
      getSearch: function () {
        this.$root.$options.Pokemon.card.where({ name: this.name, set: this.setSelected, subtype: this.subtypeSelected, supertype: this.supertypeSelected })
          .then(cards => {
            if (cards.length > 0) {
              this.cards = cards
            } else {
              alert('search not found')
            }
          })
      }
    }
  },
  created () {
    this.$root.$options.Pokemon.set.where({})
      .then(sets => {
        this.sets = sets
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input {
    background-color: #fff;
    border-color: #dbdbdb;
    color: #363636;
    box-shadow: inset 0 1px 2px rgba(10,10,10,.1);
}
button {
    background-color: #e7e7e7;
    border: none;
    padding: 5px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 1rem;
}
select {
    background-color: #fff;
    border-color: #dbdbdb;
    color: #363636;
    box-shadow: inset 0 1px 2px rgba(10,10,10,.1);
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.search .tag{
    font-size: 1rem;
    padding: 5px;
}
a {
  color: #42b983;
}

</style>
