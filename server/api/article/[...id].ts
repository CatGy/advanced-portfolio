export default defineEventHandler(async (event) => {
  const { apiSecret, apiUrl, apiArticlesEndpoint  } = useRuntimeConfig();
  console.log('New request: ' + getRequestURL(event).pathname.split('/').pop());                                                                                                                                                                                            
  const result = await $fetch(apiUrl + apiArticlesEndpoint + '?populate=*&filters[page_name][$eq]=' + getRequestURL(event).pathname.split('/').pop(), {
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
