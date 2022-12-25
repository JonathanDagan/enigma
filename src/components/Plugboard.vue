<template>
    <div class="plugboard">
        <span class="plug-row" v-for="row in rows">
            <div class="plug" v-for="key in row">
                <label for="key">{{key}}</label>
                <input type="radio" :value="key" />
            </div>
        </span>
        <button>plug</button>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'Plugboard',
    data() {
        return {
            rows: [
                ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
                ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
                ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
            ]
        };
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

.plug {
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
  