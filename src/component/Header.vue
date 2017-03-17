<template>
  <div>
  <div class="header-title">Roulette</div> 
  <div class="round">Round: {{gameRound}}</div>
  </div>
</template>

<script>
  export default {
    name: "HeaderComponent",
    props: ['gameRound'],
  }
</script>

<style>
.header-title {
  font-weight: bold;
  font-size: 30px;
}

.round {
  text-align: center;
}
</style>