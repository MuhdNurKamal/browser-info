<template>
  <div class="hello">
    <h1>Your current device</h1>
    <p>userAgent: {{ navigator.userAgent }}</p>
    <p>appVersion: {{ navigator.appVersion }}</p>
    <p>appName: {{ navigator.appName }}</p>
    <h3>Browser: {{ info }}</h3>
    <v-divider></v-divider>
    <h1>Query browser info from input</h1>
    <v-text-field v-model="userAgent" label="userAgent"></v-text-field>
    <v-text-field v-model="appVersion" label="appVersion"></v-text-field>
    <v-text-field v-model="appName" label="appName"></v-text-field>
    <v-btn @click="handleQuery">Query</v-btn>
    <h3>Browser: {{ ans }}</h3>
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
    return {
      info,
      navigator: navigator,
      userAgent: "",
      appVersion: "",
      appName: "",
      ans: "",
    };
  },
  methods: {
    handleQuery: function() {
      const nav = {
        userAgent: this.userAgent,
        appName: this.appName,
        appVersion: this.appVersion,
      };
      this.ans = getBrowserInfo(nav);
    },
  },
};
</script>

<style scoped>
h3 {
  color: red;
}
div {
  text-align: center;
}
</style>
