export default defineEventHandler(async (event) => {
  const { apiSecret, apiUrl, apiArticlesEndpoint  } = useRuntimeConfig();
  const result = await $fetch(apiUrl + apiArticlesEndpoint + "?populate=*", {
    headers: {
      "method": "GET",
      "Authorization": `Bearer ${apiSecret}`,
      "Accept": "application/json",
      "WithCredentials": "false",
      "Cross-Origin-Resource-Policy": "same-site | same-origin | cross-origin",
      "Cross-Origin-Embedder-Policy": "require-corp",
      "Referrer-Policy": "origin-when-cross-origin"
    }
  });
  return result;
})
