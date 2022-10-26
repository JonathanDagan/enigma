<script setup lang="ts">
import Rotors from "../components/Rotors.vue";
import Lampboard from "../components/Lampboard.vue";
import Keyboard from "../components/Keyboard.vue";
</script>

<template>
    <div class="testPage">
        <h1>This is a test page</h1>
        <div class="box">
            <Rotors />
            <br>
            <Lampboard />
            <br>
            <Keyboard />
        </div>
    </div>
</template>

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
