<template>
  <div id="hello-world">
    <h1>Hello World!</h1>
    <h3>Current server time: {{ time }}</h3>
    <button @click="refreshTime()">Refresh</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",

  data() {
    return {
      isConnected: false,
      time: "",
    };
  },

  mounted() {
    this.$socket.emit("refreshTime");
  },

  sockets: {
    connect() {
      this.isConnected = true;
    },

    disconnect() {
      this.isConnected = false;
    },

    time(data) {
      this.time = data;
    },
  },

  methods: {
    refreshTime() {
      this.$socket.emit("refreshTime");
    },
  },
};
</script>
