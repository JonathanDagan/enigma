<script lang="ts">
export default {
    props: {
        label: {
            type: String,
            required: true
        }
    }
}
</script>

<template>
    <button class="Lamp" disabled> {{label}} </button>
</template>

<style>
  .Lamp {
    font-weight: bolder;
    width: 3rem;
    height: 3rem;
    margin: 0.2rem;
    border-radius: 50%;
    border: solid 3px;
    color: yellow;
    background-color: black;
    border-color: silver;
  }
</style>
