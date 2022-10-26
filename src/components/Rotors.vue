<script setup lang="ts">
import Rotor from "../components/Rotor.vue";
</script>

<template>
    <div class="rotors">
        <Rotor />
        <Rotor />
        <Rotor />
    </div>
</template>

<style>
.rotors {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
}
</style>
