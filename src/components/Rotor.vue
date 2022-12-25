<script lang="ts">
import { defineComponent } from "vue";

interface rottorMapping {
    [key: string]: string;
}

const defaultRotorMapping: rottorMapping = {
    'a': 'b',
    'b': 'c',
    'c': 'd',
    'd': 'e',
    'e': 'f',
    'f': 'g',
    'g': 'h',
    'h': 'i',
    'i': 'j',
    'j': 'k',
    'k': 'l',
    'l': 'm',
    'm': 'n',
    'n': 'o',
    'o': 'p',
    'p': 'q',
    'q': 'r',
    'r': 's',
    's': 't',
    't': 'u',
    'u': 'v',
    'v': 'w',
    'w': 'x',
    'x': 'y',
    'y': 'z',
    'z': 'a'
}
export default defineComponent({
    props: {
        notch: {
            type: String,
            required: false,
            default: 'a',
        },
        mapping: {
            type: Object as () => rottorMapping,
            required: false,
            default: defaultRotorMapping,
        },
    },
    data() {
        return {
            notch: 'a',
            mapping: this.mapping,
        };
    },
    methods: {
        stepThroughAlphabet(direction: 'forward' | 'backward' = 'forward'): void {
            const alphabet = 'abcdefghijklmnopqrstuvwxyz';
            let currentIndex = alphabet.indexOf(this.notch);            
            if (direction === 'forward') {
                currentIndex += 1;
                if (currentIndex > 25) {
                    currentIndex = 0;
                }
            } else {
                currentIndex -= 1;
                if (currentIndex < 0) {
                    currentIndex = 25;
                }
            }
            this.notch = alphabet[currentIndex];
        },
        shift() {
            return this.mapping[this.notch];
        }
    }
});

</script>

<template>
    <div class="rotor">
        <button @click="stepThroughAlphabet('forward')">+</button>
        <div>{{ notch }}</div>
        <button @click="stepThroughAlphabet('backward')">-</button>
    </div>
</template>

<style>
.rotor {
    display: flex;
    flex-direction: column;
    border: 5px solid;
    border-color: blue;
}
</style>
