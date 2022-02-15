<template>
  <textarea :id="tinymceId" cols="30" rows="10"></textarea>
</template>

<script>
export default {
  data() {
    return {
      tinymceId: "editor" + Date.now(),
    };
  },
  mounted() {
    window.tinymce.baseURL = "/util/tinymce";
    window.tinymce.init({
      selector: "#" + this.tinymceId,
    });
  },
};
</script>

<style>
</style>