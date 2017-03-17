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
    props: ["dataAttribute"],
  }
</script>

<style>
.color {
  text-align: center;
}

.odd-even {
  text-align: center;
}
</style>