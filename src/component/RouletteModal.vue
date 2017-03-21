<template>
  <div>
    <div class="remodal" data-remodal-id="modal">
      <button data-remodal-action="close" class="remodal-close"></button>
      <h1>ROULETTE</h1>
      <div class="circle-container">
        <div class="circle">
        </div>
      </div>
      <button data-remodal-action="cancel" class="remodal-cancel">Cancel</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'RouletteModal',
    mounted: function() {
      var inst = $('[data-remodal-id=modal]').remodal();
      var arr = [
        {
          num: 0,
          color: 'green'
        },
        {
          num: 32,
          color: 'red'
        },
        {
          num: 15,
          color: 'black'
        },
        {
          num: 19,
          color: 'red'
        },
        {
          num: 4,
          color: 'black'
        },
        {
          num: 21,
          color: 'red'
        },
        {
          num: 2,
          color: 'black'
        },
        {
          num: 25,
          color: 'red'
        },
        {
          num: 17,
          color: 'black'
        },
        {
          num: 34,
          color: 'red'
        },
        {
          num: 6,
          color: 'black'
        },
        {
          num: 27,
          color: 'red'
        },
        {
          num: 13,
          color: 'black'
        },
        {
          num: 36,
          color: 'red'
        },
        {
          num: 11,
          color: 'black'
        },
        {
          num: 30,
          color: 'red'
        },
        {
          num: 8,
          color: 'black'
        },
        {
          num: 23,
          color: 'red'
        },
        {
          num: 10,
          color: 'black'
        },
        {
          num: 5,
          color: 'red'
        },
        {
          num: 24,
          color: 'black'
        },
        {
          num: 16,
          color: 'red'
        },
        {
          num: 33,
          color: 'black'
        },
        {
          num: 1,
          color: 'red'
        },
        {
          num: 20,
          color: 'black'
        },
        {
          num: 14,
          color: 'red'
        },
        {
          num: 31,
          color: 'black'
        },
        {
          num: 9,
          color: 'red'
        },
        {
          num: 22,
          color: 'black'
        },
        {
          num: 18,
          color: 'red'
        },
        {
          num: 29,
          color: 'black'
        },
        {
          num: 7,
          color: 'red'
        },
        {
          num: 28,
          color: 'black'
        },
        {
          num: 12,
          color: 'red'
        },
        {
          num: 35,
          color: 'black'
        },
        {
          num: 3,
          color: 'red'
        },
        {
          num: 26,
          color: 'black'
        }
      ]
      var htmlString = '';
      var deg = 0;
      var incrementDeg = 360/arr.length
      for (var i = 0; i < arr.length; i++) {
        htmlString += `
          <span class="circle-element" style="transform: rotate(${deg}deg);">
            <div class="circle-item" style="transform: rotate(-${deg}deg); background-color: ${arr[i].color}">${arr[i].num}
            </div>
            <div class="mark mark-${arr[i].num}" style="transform: rotate(-${deg}deg);">0</div>
          </span>`
        deg += incrementDeg;
      }
      $('.circle').html(htmlString);
    }
  }
</script>

<style>
.circle-container {
  height: 400px;
  position: relative;
}

.circle {
  position: absolute;
  top: 0;
  left: 136px;
}

.circle-element {
  -webkit-transform-origin: bottom center;
  -moz-transform-origin: bottom center;
  -ms-transform-origin: bottom center;
  -o-transform-origin: bottom center;
  transform-origin: bottom center;
  position: absolute;
  height: 180px;
  width: 35px;
}

.circle-item {
  border: 1px solid black;
  border-radius: 50%;
  height: 20px;
  width: 20px;
  padding: 3px;
  color: white;
}

.mark {
  width: 30px;
  font-size: 22px;
}

.recent {
  color: red;
}
</style>