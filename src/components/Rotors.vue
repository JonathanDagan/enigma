<script lang="ts">
import { defineComponent } from "vue";
import Rotor from "../components/Rotor.vue";

export default defineComponent({
    components: {
        Rotor,
    },
});
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
