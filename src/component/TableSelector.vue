<template>
  <div>
    <div class="table">
      <div class="row">
        <div v-on:click="itemClick(0)" class="special">
          <div class="counter-click">{{dataStore[0]}}</div>
          <div class="main-num">0</div>
        </div>
      </div>
      <div v-for="numArr in numberData" class="row">
        <div v-on:click="itemClick(value)" v-for="(value, key) in numArr" v-bind:class="[value.color === 'black' ? 'item black' : 'item red']">
          <div class="counter-click">{{dataStore[value.num]}}</div>
          <div class="main-num">{{value.num}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TableSelector",
    props: ['itemClick', 'dataStore'],
    data: function() {
      return {
        numberData: [
          [
            {num:1,
              color:"red"
            },
            {num:2,
              color:"black"
            },
            {num:3,
              color:"red"
            },
          ],
          [
            {num:4,
              color:"black"
            },
            {num:5,
              color:"red"
            },
            {num:6,
              color:"black"
            },
          ],
          [
            {num:7,
              color:"red"
            },
            {num:8,
              color:"black"
            },
            {num:9,
              color:"red"
            },
          ],
          [
            {num:10,
              color:"black"
            },
            {num:11,
              color:"black"
            },
            {num:12,
              color:"red"
            },
          ],
          [
            {num:13,
              color:"black"
            },
            {num:14,
              color:"red"
            },
            {num:15,
              color:"black"
            },
          ],
          [
            {num:16,
              color:"red"
            },
            {num:17,
              color:"black"
            },
            {num:18,
              color:"red"
            },
          ],
                    [
            {num:19,
              color:"red"
            },
            {num:20,
              color:"black"
            },
            {num:21,
              color:"red"
            },
          ],
          [
            {num:22,
              color:"black"
            },
            {num:23,
              color:"red"
            },
            {num:24,
              color:"black"
            },
          ],
          [
            {num:25,
              color:"red"
            },
            {num:26,
              color:"black"
            },
            {num:27,
              color:"red"
            },
          ],
          [
            {num:28,
              color:"black"
            },
            {num:29,
              color:"black"
            },
            {num:30,
              color:"red"
            },
          ],
          [
            {num:31,
              color:"black"
            },
            {num:32,
              color:"red"
            },
            {num:33,
              color:"black"
            },
          ],
          [
            {num:34,
              color:"red"
            },
            {num:35,
              color:"black"
            },
            {num:36,
              color:"red"
            },
          ],
        ]
      }
    },
    methods: {
      clickNum: function(num) {
        console.log(num);
      }
    } 
  }
</script>

<style>
.item {
  display: inline-block;
  width: 32.8%;
  height: 60px;
  border: 1px solid grey;
  color: yellow;
}

.special {
  color: yellow;
  background-color: green;
  width: 100%;
  height: 60px;
}

.counter-click {
  color: white;
  display: inline-block;
  font-size: 30px;
}

.main-num {
  font-size: 30px;
  width: 75%;
  text-align: center;
  display: inline-block;
}

.main-num .zero-special {
  width: 90%;
}

.red {
  background-color: red;
}

.black {
  background-color: black;
}
</style>