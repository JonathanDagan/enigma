<template>
    <form class="plugboard" @submit.prevent="plug"></form>
    <span class="plug-row" v-for="row in rows">
        <label class="plug" v-for="key in row" for="key">{{ key.toUpperCase() }}
            <input type="checkbox" v-model="selectedPlugs"
                :disabled="(selectedPlugs.length >= 2 && !selectedPlugs.includes(key)) || isPlugged(key)"
                :value="key" />
        </label>
    </span>
    <button type="submit" :disabled="selectedPlugs.length !== 2" @click="plug">Plug</button>
    <button type="submit" :disabled="!plugedPairs.length" @click="unplug">Unplug</button>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue'

const BASIC_COLORS = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

export default defineComponent({
    name: 'Plugboard',
    data() {
        return {
            rows: [
                ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
                ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
                ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
            ],
            selectedPlugs: [] as string[],
            plugedPairs: [] as string[][],
        };
    },
    computed: {
        selectedPlugValues() {
            return this.selectedPlugs.slice(0, 2);
        }
    },
    methods: {
        isPlugged(letter: string): boolean {
            return this.plugedPairs.some((pair) => {
                return pair.includes(letter);
            })
        },
        plug() {
            this.plugedPairs.push([...this.selectedPlugValues]);
            this.selectedPlugs = [];
        },
        unplug() {
            this.plugedPairs = [];
        },
    },
});

</script>
  
<style>
.plugboard {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.input {
    border-radius: 50%;
    width: 30px;
    height: 30px;
    border: 1px solid black;
    background-color: #eee;
    margin: 2px;
}

.plugboard input.pressed {
    background-color: rgb(184, 175, 44);
}

.label {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: auto;
}

.plug-row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}
</style>
  