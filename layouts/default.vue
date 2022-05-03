<template>
  <div class='layout-default'>
    <TheHeader />
    <main
      id='main'
      role='main'
    >
      <Nuxt />
    </main>
    <TheFooter />
  </div>
</template>


<script>
  import TheHeader from '~/components/layout/TheHeader';
  import TheFooter from '~/components/layout/TheFooter';

  export default {
    name: 'DefaultLayout',
    components: {
      TheHeader,
      TheFooter,
    },
  };
</script>

<style lang='scss'>

</style>
