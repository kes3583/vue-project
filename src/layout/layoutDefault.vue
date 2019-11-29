<template>
  <div class="container body">
    <div class="main_container">
      <navbarDefault />
      <topNavDefault />
      <mainDefault />
      <footerDefault />
    </div>
  </div>
</template>

<script>
  import navbarDefault from "@/layout/navbar/navbarDefault";
  import topNavDefault from "@/layout/topnav/topNavDefault";
  import mainDefault from "@/layout/main/mainDefault";
  import footerDefault from "@/layout/footer/footerDefault";

  export default {
    name: "layout",
    components: {
      navbarDefault,
      topNavDefault,
      mainDefault,
      footerDefault
    },

  }

</script>
