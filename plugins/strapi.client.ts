import type { Strapi4Error } from '@nuxtjs/strapi/dist/runtime/types/v4'
import useToast from '~/composables/useToast'

export default defineNuxtPlugin((nuxt) => {
  nuxt.hook('strapi:error' as any, (e: Strapi4Error) => {
    const toast = useToast()
    toast.error({ title: e.error.name, description: e.error.message })
  })
})