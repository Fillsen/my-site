<template>
  <div>{{ creatorRoles.count }}</div>
</template>

<script>
  export default {
    data() {
      return {
        creatorRoles: {},
        isLoading: false,
        isError: false,
      };
    },
    async fetch() {
      await this.getCreatorRoles();
    },
    methods: {
      async getCreatorRoles() {
        try {
          this.isLoading = true;
          this.creatorRoles = await this.$api.$get('/creator-roles');
        } catch (err) {
          this.isError = true;
          throw new Error(err);
        } finally {
          this.isLoading = false;
        }
      },
    },
  };
</script>
