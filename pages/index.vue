<template>
  <div>
    {{ creatorRoles.count }}
    <div v-for="role in creatorRoles.results" :key="role.id">
      {{ role.name }}
    </div>
  </div>
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
      await this.getRoles();
    },
    methods: {
      async getRoles() {
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
