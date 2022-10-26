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
    <button class="key" @click="$emit(label)"> {{label}} </button>
</template>

<style>
  .key {
    width: 3rem;
    height: 3rem;
    margin: 0.2rem;
    border-radius: 50%;
    border: solid 3px;
    color: white;
    background-color: darkslategrey;
    border-color: silver;
  }
  .key:active{
    border-color: blue;
    box-shadow: skyblue 5px;
}
</style>
