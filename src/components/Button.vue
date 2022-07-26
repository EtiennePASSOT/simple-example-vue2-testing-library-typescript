<template>
  <div>
    <button @click="click">
      {{ label }}
    </button>
    <div>{{ result }}</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    label: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      result: '',
    };
  },

  methods: {
    click() {
      this.result = 'clicked';
    },
  },
});
</script>
