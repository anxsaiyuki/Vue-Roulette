<template>
  <div>
    <HeaderComponent :gameRound="gameRound"/>
    <main>
      <button v-on:click="undoClick" class="btn" type="button">UNDO</button>
      <DataAnalyze :dataAttribute="dataAttribute" :gameRound="gameRound"/>
      <TableSelector :itemClick="itemClick" :dataStore="dataStore"/>
      
    </main>
  </div>
</template>

<script>
  import HeaderComponent from '../component/Header';
  import TableSelector from '../component/TableSelector';
  import DataAnalyze from '../component/DataAnalyze';

  export default {
    name: 'Home',
    components: {
      HeaderComponent,
      TableSelector,
      DataAnalyze
    },
    data: function() {
      return {
        gameRound: 0,
        dataAttribute: {
          odd: 0,
          oddCon: 0,
          even: 0,
          evenCon: 0,
          black: 0,
          blackCon: 0,
          red: 0,
          redCon: 0,
          zero: 0,
          region1: 0,
          region1Con: 0,
          region2: 0,
          region2Con: 0,
          region3: 0,
          region3Con: 0,
        },
        dataStore: {
          0:0,
          1:0,
          2:0,
          3:0,
          4:0,
          5:0,
          6:0,
          7:0,
          8:0,
          9:0,
          10:0,
          11:0,
          12:0,
          13:0,
          14:0,
          15:0,
          16:0,
          17:0,
          18:0,
          19:0,
          20:0,
          21:0,
          22:0,
          23:0,
          24:0,
          25:0,
          26:0,
          27:0,
          28:0,
          29:0,
          30:0,
          31:0,
          32:0,
          33:0,
          34:0,
          35:0,
          36:0
        }
      }
    },
    methods: {
      undoClick: function() {
        console.log(this.previous);
        console.log(this.lastColor);
      },
      itemClick: function(data) {
        this.gameRound++;


        if (data === 0) {
          this.dataAttribute.zero += 1;
          this.dataStore[0] = this.dataStore[0] ? this.dataStore[0] + 1 : 1;
        } else {

          //Odd Even
          this.dataStore[data.num] = this.dataStore[data.num] ? this.dataStore[data.num] + 1 : 1;
          if (data.num % 2 === 0) {
            this.dataAttribute.even += 1;
            this.dataAttribute.oddCon = 0;
            this.dataAttribute.evenCon += 1;
          } else {
            this.dataAttribute.odd += 1;
            this.dataAttribute.evenCon = 0;
            this.dataAttribute.oddCon += 1;
          }

          //Color
          if (data.color === "black") {
            this.dataAttribute.black += 1;
            this.dataAttribute.redCon = 0;
            this.dataAttribute.blackCon += 1;
          } else {
            this.dataAttribute.red += 1;
            this.dataAttribute.blackCon = 0;
            this.dataAttribute.redCon += 1;
          }

          //Region
          if (data.num >= 1 && data.num <= 12) {
            this.dataAttribute.region1 += 1;
            this.dataAttribute.region1Con += 1;
            this.dataAttribute.region2Con = 0;
            this.dataAttribute.region3Con = 0;
          } else if (data.num >= 13 && data.num <= 24) {
            this.dataAttribute.region2 += 1;
            this.dataAttribute.region2Con += 1;
            this.dataAttribute.region1Con = 0;
            this.dataAttribute.region3Con = 0;
          } else if (data.num >= 25 && data.num <= 36) {
            this.dataAttribute.region3 += 1;
            this.dataAttribute.region3Con += 1;
            this.dataAttribute.region1Con = 0;
            this.dataAttribute.region2Con = 0;
          } 
        }


        

      }
    }
  }
</script>

<style>
.btn {
  border: 1px solid black;
}
</style>
