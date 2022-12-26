<script lang="ts">
import Vue, { defineComponent, ref } from "vue";
import Rotor from "../components/Rotor.vue";

interface reflectorMapping {
    [key: string]: string;
}

const defaultreflector: reflectorMapping = {
    'a': 'z',
    'b': 'y',
    'c': 'x',
    'd': 'w',
    'e': 'v',
    'f': 'u',
    'g': 't',
    'h': 's',
    'i': 'r',
    'j': 'q',
    'k': 'p',
    'l': 'o',
    'm': 'n',
    'n': 'm',
    'o': 'l',
    'p': 'k',
    'q': 'j',
    'r': 'i',
    's': 'h',
    't': 'g',
    'u': 'f',
    'v': 'e',
    'w': 'd',
    'x': 'c',
    'y': 'b',
    'z': 'a'
}

class Reflector {
    private _reflector: reflectorMapping;
    constructor(reflector: reflectorMapping = defaultreflector) {
        this._reflector = reflector;
    }
    public get reflector(): reflectorMapping {
        return this._reflector;
    }
    public passThroughReflector (letter: string): string {
        return this._reflector[letter];
    }
}

export default defineComponent({
    components: {
        Rotor,
    },
    data() {
        return {
            reflector: new Reflector(),
            rotors: ref<typeof Rotor[]>([]),
        };
    },
    mounted() {
        this.rotors = this.$refs.$children as typeof Rotor[];
    },
    methods: {
        step(rotor: typeof Rotor) {
            this.rotors[0].step('forward');
            rotor.notch = (rotor.notch) % rotor.alphabet.length;
            const rotorIndex = this.rotors.findIndex(rotor => rotor === rotor);
            if (rotor.notch === 'z' && this.rotors[rotorIndex + 1] !== undefined) {
                this.step(this.rotors[rotorIndex + 1]);
            }
        },
        passThroughRotors(letter: string, direction: 'in' | 'out') {
            let value = letter;
            let rotors: typeof Rotor[] = [
                ...this.rotors as typeof Rotor[],
            ];
            rotors = direction === 'in' ? rotors : rotors.reverse();
        
            rotors.forEach((rotor) => {
            value = rotor.shift(value);
            });
            return value;
        },
        passThroughAll(letter: string) :void{
            let value = letter;
            value = this.passThroughRotors(value, 'in');
            value = this.reflector.passThroughReflector(value);
            value = this.passThroughRotors(value, 'out');
            this.$emit('rotors', value);
        },
    }
});
</script>

<template>
    <div class="rotors">
        <Rotor ref="rotor1"/>
        <Rotor ref="rotor2"/>
        <Rotor ref="rotor3"/>
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
