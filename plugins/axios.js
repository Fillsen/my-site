export default function ({ $axios, error: nuxtError, $config }, inject) {
  // Create a custom axios instance
  const api = $axios.create({
    params: {
      key: $config.apiSecretKey,
    },
  });
  // Set baseURL to something different
  // api.setBaseURL('https://')

  // Inject to context as $api
  api.onRequest((config) => {
    console.log('Making request to ' + config.url);
  });

  // api.onError((error) => {
  //   nuxtError({
  //     statusCode: error.response.status,
  //     message: error.message,
  //   });
  //   return Promise.resolve(false);
  // });

  inject('api', api);
}
