<script setup lang="ts">
import Lamp from "../components/Lamp.vue";
</script>

<template>
    <div class="lampboard">
        <span>
            <Lamp label="Q" />
            <Lamp label="W" />
            <Lamp label="E" />
            <Lamp label="R" />
            <Lamp label="T" />
            <Lamp label="Y" />
            <Lamp label="U" />
            <Lamp label="I" />
            <Lamp label="O" />
            <Lamp label="P" />
        </span>
        <span>
            <Lamp label="A" />
            <Lamp label="S" />
            <Lamp label="D" />
            <Lamp label="F" />
            <Lamp label="G" />
            <Lamp label="H" />
            <Lamp label="J" />
            <Lamp label="K" />
            <Lamp label="L" />
        </span>
        <span>
            <Lamp label="Z" />
            <Lamp label="X" />
            <Lamp label="C" />
            <Lamp label="V" />
            <Lamp label="B" />
            <Lamp label="N" />
            <Lamp label="M" />
        </span>
    </div>
</template>

<style>
.lampboard {
    background-color: gray;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
</style>
