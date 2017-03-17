<template>
  <div>
    <HeaderComponent />
    <main>
      <DataAnalyze :dataAttribute="dataAttribute" />
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
        dataAttribute: {
          odd: 0,
          even: 0,
          black: 0,
          red: 0,
          zero: 0,
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
      itemClick: function(data) {
        if (data === 0) {
          this.dataAttribute.zero += 1;
          this.dataStore[0] = this.dataStore[0] ? this.dataStore[0] + 1 : 1;
        } else {
          this.dataStore[data.num] = this.dataStore[data.num] ? this.dataStore[data.num] + 1 : 1;
          if (data.num % 2 === 0) {
            this.dataAttribute.even += 1;

          } else {
            this.dataAttribute.odd += 1;

          }

          if (data.color === "black") {
            this.dataAttribute.black += 1;

          } else {
            this.dataAttribute.red += 1;

          }
        }
        console.log(this.dataStore);
      }
    }
  }
</script>
