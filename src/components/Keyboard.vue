<script setup lang="ts">
import Key from "../components/Key.vue";
</script>

<template>
  <div class="keyboard">
    <span>
      <Key label="Q" />
      <Key label="W" />
      <Key label="E" />
      <Key label="R" />
      <Key label="T" />
      <Key label="Y" />
      <Key label="U" />
      <Key label="I" />
      <Key label="O" />
      <Key label="P" />
    </span>
    <span>
      <Key label="A" />
      <Key label="S" />
      <Key label="D" />
      <Key label="F" />
      <Key label="G" />
      <Key label="H" />
      <Key label="J" />
      <Key label="K" />
      <Key label="L" />
    </span>
    <span>
      <Key label="Z" />
      <Key label="X" />
      <Key label="C" />
      <Key label="V" />
      <Key label="B" />
      <Key label="N" />
      <Key label="M" />
    </span>
  </div>
</template>

<style>
.keyboard {
  background-color: gray;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
