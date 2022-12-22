<template>
  <div class="keyboard">
    <span>
      <button v-for="key in firstRow" :class="{ 'pressed': currentKey === key }" @click="handleKeyPress(key)">{{ key.toUpperCase() }}</button>
    </span>
    <span>
      <button v-for="key in secoundRow" :class="{ 'pressed': currentKey === key }" @click="handleKeyPress(key)">{{ key.toUpperCase() }}</button>
    </span>
    <span>
      <button v-for="key in thirdRow" :class="{ 'pressed': currentKey === key }" @click="handleKeyPress(key)">{{ key.toUpperCase() }}</button>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Keyboard',
  data() {
    return {
      firstRow: [ 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
      secoundRow: [ 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l' ],
      thirdRow: [ 'z', 'x', 'c', 'v', 'b', 'n', 'm' ],
      currentKey: '',
    };
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
    this.currentKey = key;
    this.$emit('keypress', key);
  },
  handleKeyRelease(key: any) { // TODO: type
    this.currentKey = '';
  },
},
});

</script>

<style>
.keyboard {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.button {
  border-radius: 50%;
  width: 30px;
  height: 30px;
  border: 1px solid black;
  background-color: #eee;
  margin: 2px;
}

.keyboard button.pressed {
  background-color: #ddd;
}
</style>
