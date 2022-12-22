<template>
    <div class="testPage">
        <h1>This is a test page</h1>
        <div class="box">
            <Rotors />
            <br>
            <Lampboard :current-key="currentKey" />
            <br>
            <Keyboard v-on:keypress="handleKeyPress" />
        </div>
    </div>
</template>

<script lang="ts">
import Rotors from "../components/Rotors.vue";
import Lampboard from "../components/Lampboard.vue";
import Keyboard from "../components/Keyboard.vue";
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      currentKey: '',
    };
  },
  components: {
    Rotors,
    Lampboard,
    Keyboard,
  },
  mounted() {
    window.addEventListener('keydown', (event) => {
      this.handleKeyPress(event.key);
    });
    window.addEventListener('keyup', (event) => {
      this.handleKeyRelease(event.key);
    });
  },
  methods: {
    handleKeyPress(key: any) { // TODO: type
      // console.log(`Key pressed: ${key}`);
      this.currentKey = key;
    },
    handleKeyRelease(key: any) { // TODO: type
      // console.log(`Key pressed: ${key}`);
      this.currentKey = '';
    },
  },
})
</script>


<style>
.box {
    border: 5px solid green;
}

.testPage {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: aqua;
    border-width: 2pt;
    border: 2pt;
    border-color: rgb(78, 255, 226);
}
</style>
