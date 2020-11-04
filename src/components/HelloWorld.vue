<template>
  <div class="hello">
    <h1>userAgent: {{ navigator.userAgent }}</h1>
    <h1>appVersion: {{ navigator.appVersion }}</h1>
    <h1>appName: {{ navigator.appName }}</h1>
    <h1>{{ info }}</h1>
  </div>
</template>

<script>
import { getBrowserInfo, getNavigator } from "../utils";
const info = getBrowserInfo();
const navigator = getNavigator();
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data: () => {
    return { info, navigator: navigator };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
