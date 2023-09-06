<template>
  <div>
    <input type="file" ref="fileInput" @change="handleImageSelection" />
    <img
      v-if="coverPreview"
      :src="coverPreview"
      alt="Book Cover Preview"
      width="200"
    />
  </div>
</template>
<script>
export default {
  name: "BookCoverUploader",

  data() {
    return {
      coverPreview: null,
    };
  },

  methods: {
    handleImageSelection() {
      const fileInput = this.$refs.fileInput;
      if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const reader = new FileReader();

        reader.onload = (e) => {
          this.coverPreview = e.target.result;
          this.$emit("cover-changed", this.coverPreview);
        };

        reader.readAsDataURL(file);
      }
    },
  },
};
</script>
