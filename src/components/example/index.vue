<template>
  <section :id="cssPrefix">
    <h1>Example</h1>
    <img src="/assets/img/example.jpg" alt="img">
  </section>
</template>

<script>
export default {
  props: {
    cssPrefix: {
      type: String,
      required: false,
      default: 'example',
    },
  },

  data() {
    return {

    };
  },
};
</script>
