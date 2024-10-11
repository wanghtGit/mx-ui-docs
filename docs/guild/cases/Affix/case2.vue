<template>
  <div class="affix-container">
    <mx-affix target=".affix-container" :offset="80">
      <mx-button type="primary">Target container</mx-button>
    </mx-affix>
  </div>
</template>
<style scoped>
.affix-container {
  text-align: center;
  height: 400px;
  border-radius: 4px;
  background: #ECF5FF;
}
</style>