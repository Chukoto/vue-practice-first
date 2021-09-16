<template>
  <div>
    Item
    <router-link to="1">Item1</router-link><br />
    <router-link to="2">Item2</router-link><br />
    {{ $route.params.id }}
  </div>
</template>

<script>
export default {
  // 同じコンポーネント内の移動では、ライフサイクルフックが実行されない
  created() {
    console.log('created');
  },
  // ライフサイクルフックを実行するために、watchを使うこともある
  watch: {
    $route(to, from) {
      console.log(to);
      console.log(from);
    },
  },
};
</script>

<style></style>
