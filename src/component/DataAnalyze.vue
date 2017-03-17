<template>
  <div>
    <div class="color">
      <table>
        <tr>
          <th>Red</th>
          <th>Black</th>
        </tr>
        <tr>
          <td>{{dataAttribute.red}}</td>
          <td>{{dataAttribute.black}}</td>
        </tr>
        <tr>
          <td>{{ Math.floor((dataAttribute.red / gameRound) * 100, 2) }}%</td>
          <td>{{ Math.floor((dataAttribute.black / gameRound) * 100, 2) }}%</td>
        </tr>
        <tr>
          <td>{{dataAttribute.redCon}}</td>
          <td>{{dataAttribute.blackCon}}</td>
        </tr>
      </table>
    </div>
    <div class="odd-even">
      <table>
        <tr>
          <th>Odd</th>
          <th>Even</th>
        </tr>
        <tr>
          <td>{{dataAttribute.odd}}</td>
          <td>{{dataAttribute.even}}</td>
        </tr>
        <tr>
          <td>{{ Math.floor((dataAttribute.odd / gameRound) * 100, 2) }}%</td>
          <td>{{ Math.floor((dataAttribute.even / gameRound) * 100, 2) }}%</td>
        </tr>
        <tr>
          <td>{{dataAttribute.oddCon}}</td>
          <td>{{dataAttribute.evenCon}}</td>
        </tr>
      </table>
    </div>
    <div class="special-attr">
      <table>
        <tr>
          <th>Zero</th>
        </tr>
        <tr>
          <td>{{dataAttribute.zero}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Data Analyze',
    props: ["dataAttribute", "gameRound"],
  }
</script>

<style>
.color {
  text-align: center;
  display: inline-block;
}

.odd-even {
  text-align: center;
  display: inline-block;
}
</style>