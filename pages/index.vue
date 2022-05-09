<template>
  <div>{{ creatorRoles.count }}</div>
</template>

<script>
  import RolesService from 'api/services/RolesService';

  export default {
    name: 'MainPage',
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
          const params = {
            page: 1,
            page_size: 10,
          };
          const api = new RolesService(this.$axios);
          this.creatorRoles = await api.getCreatorRoles(params);
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
