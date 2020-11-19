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
