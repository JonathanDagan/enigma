<template>
    <div class="lampboard">
      <span v-for="row in rows">
        <button v-for="key in row" :class="{ 'pressed': currentKey === key }">{{ key.toUpperCase() }}</button>
      </span>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: 'Lampboard',
    props: {
        currentKey: {
            type: String,
            required: true,
        },
    },
    data() {
      return {
        rows: [
                ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
                ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
                ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
            ]
      };
    },
  });
  
  </script>
  
  <style>
  .lampboard {
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
  .lampboard button.pressed {
    background-color: rgb(184, 175, 44);
  }
  </style>
  