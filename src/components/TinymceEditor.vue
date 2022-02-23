<template>
  <textarea :id="tinymceId" cols="30" rows="10" v-model="value"></textarea>
</template>

<script>
export default {
  props: {
    value: String
  },
  data() {
    return {
      tinymceId: "editor" + Date.now(),
      flag: true,
    };
  },
  mounted() {
    window.tinymce.baseURL = "/util/tinymce";
    window.tinymce.init({
      selector: "#" + this.tinymceId,
      setup: (editor) => {
          editor.on('input undo redo execCommand change', () => {
            this.$emit('input', editor.getContent());
            this.flag = false;
          }) 
      }
    });
  },
  watch: {
    value: {
      handler(newVal) {
        this.flag && window.tinyMCE.activeEditor.setContent(newVal);
        this.flag = true;
      }
    }
  },
};
</script>

<style>
</style>