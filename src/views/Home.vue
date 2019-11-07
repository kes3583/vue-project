<template>
  <div class="right_col" role="main">
    <topTiles msg="vue test "/>
    <div class="row">
      <div class="col-md-12 col-sm-12 col-xs-12">
        <dashboardGraph />
      </div>
    </div> 
  </div>
</template>

<script>
// @ is an alias to /src
import topTiles from '@/components/index/topTiles'
import dashboardGraph from '@/components/index/dashboardGraph'

export default {
  name: 'home',
  components: {
    topTiles, dashboardGraph
  },

}
</script>
