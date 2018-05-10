<template>
  <div class="view">
    <div class="view-card">
        <div class="column-3 column">
            <img :src="card.imageUrlHiRes" class="card-image">
        </div>
        <div class="column-9 column">
            <div class="card-detail">
                <div class="header">
                    <span class="card-name">{{card.name}}</span>
                    <span class="card-type">{{card.supertype}}</span>
                    -
                    <span class="card-type">{{card.subtype}}</span>
                    <span class="card-hp">HP {{card.hp}}</span>
                    <i v-for="type of card.types" :class="type" class="energy"></i>
                </div>
                card id : <span class="idCard">{{cardId}}</span>
                <hr>
                <div class="content">
                    <div class="ability" v-if="card.ability">
                        <div class="header">
                            <i v-if="card.ability.type" :class="card.ability.type"></i>
                            {{card.ability.name}}
                        </div>
                        <div class="text">
                            {{card.ability.text}}
                        </div>
                    </div>
                    <ul class="attack">
                        <li v-for="attack of card.attacks" class="attack-detail">
                            <i v-for="cost of attack.cost" :class="cost" class="energy"></i>
                            <span class="attack-name">
                                {{attack.name}}
                            </span>
                            <span class="attack-damage">
                                | {{attack.damage}}
                            </span>
                            <div class="attack-text">
                                {{attack.text}}
                            </div>
                        </li>
                    </ul>
                    <div class="card-text" v-if="card.text">
                        {{card.text[0]}}
                    </div>
                </div>
                <div class="footer">
                    <div class="header">
                        <div class="weakness">
                            <span class="label-footer">Weakness</span>
                            <ul v-if="card.weaknesses">
                                <li v-for="weakness of card.weaknesses">
                                    <i :class="weakness.type" class="energy"></i>  {{ weakness.value}}
                                </li>
                            </ul>
                            <p v-else>N/A</p>
                        </div>
                        <div class="resistance">
                            <span class="label-footer">Resistance</span>
                            <ul v-if="card.resistances">
                                <li v-for="resistance of card.resistances">
                                    <i :class="resistance.type" class="energy"></i>  {{ resistance.value}}
                                </li>
                            </ul>
                            <p v-else>N/A</p>
                        </div>
                        <div class="retreatCost">
                            <span class="label-footer">Retreat Cost</span>
                            <ul v-if="card.retreatCost">
                                <li v-for="rc of card.retreatCost">
                                <i :class="rc" class="energy"></i>
                                </li>
                            </ul>
                            <p v-else>N/A</p>
                        </div>
                    </div>
                    <div class="footer">
                        <div class="artist">
                            <span class="label-footer">Artist</span>
                            <p v-if="card.artist">{{card.artist}}</p>
                            <p v-else>N/A</p>
                        </div>
                        <div class="rarity">
                            <span class="label-footer">Rarity</span>
                            <p v-if="card.rarity">{{card.rarity}}</p>
                            <p v-else>N/A</p>
                        </div>
                        <div class="set">
                            <span class="label-footer">Set</span>
                            <p v-if="card.set">{{card.set}}</p>
                            <p v-else>N/A</p>
                        </div>
                    </div>
                </div>
            </div>
            <router-link to="/search" class="button">Back</router-link>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Viewexclude',
  props: ['cardId'],
  data () {
    return {
      msg: 'ini View',
      card: ''
    }
  },
  mounted () {
    this.$root.$options.Pokemon.card.find(this.cardId)
      .then(result => {
        this.card = result.card
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.button {
    background-color: #e7e7e7;
    border: none;
    color: black;
    width: 40px;
    margin:0 auto;
    padding: 5px 10px;
    text-align: center;
    text-decoration: none;
    display: block;
    font-size: 1rem;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.Grass{
    background-position: 642px -8px;
}
.Fire{
    background-position: 591px -8px;
}
.Water{
    background-position: 542px -8px;
}
.Lightning{
    background-position: 491px -8px;
}
.Colorless{
    background-position: 138px -8px;
}
.Fighting{
    background-position: 389px -8px;
}
.Psychic{
    background-position: 440px -8px;
}
.Fairy{
    background-position: 240px -8px;
}
.Metal{
    background-position: 290px -8px;
}
.Darkness{
    background-position: 340px -8px;
}
.Dragon{
    background-position: 187px -8px;
}
.idCard{
    font-size: 0.5rem;
    color: #95A5A6;

}
.Poké-Power{
    background-image: url(../assets/poke-power.png);
    width: 103px;
    height: 25px;
    display: inline-block;
}
.energy{
    background-image: url(../assets/tcg-icon.png);
    width: 44px;
    height: 43px;
    display: inline-block;
}

.view-card div{
    background: #fff;;
    vertical-align:top;
    display: inline-block;
}
.card-detail .header{
    display: block;
}
.card-detail hr{
    margin-bottom: 10px;
    background-color: #f5f5f5;
    border: none;
    height: 2px;
    margin: 1.5rem 0;
}
.card-detail .content{
    display: block;
}
.card-detail .footer{
    display: block;
}
.column-3{
    width: 33.3%;
}
.column-9{
    width: 50%;
}
.card-image{
    height: auto;
    max-width: 100%;
}
.card-detail{
    margin: 0.5rem;
}
.card-detail .header .card-name {
    font-size: 1.5rem;
}
.card-detail .header .card-type {
    font-size: 1rem;
    color:#95A5A6;
}
.ability{
    display:block;
}
.ability .name{
    display:block;
}
.ability .text{
    display:block;
}
.attack-detail{
    margin: 5px;
}
.attack-detail span{
    font-size: 1.5rem;
}
.attack .attack-text{
    display: block;
    margin: 5px;
}
.footer .header{
    display: block;
}
.footer .header div{
    margin: 5px;
    padding: 20px 0;
}
.footer .footer{
    display: block;
}
.footer .footer div{
    margin: 5px;
    padding: 20px 0;
}
</style>
