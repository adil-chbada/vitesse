<script setup lang="ts">
import { useTheme } from 'vuetify'
import { isDark } from '~/composables/dark'

const { APP_REPO } = import.meta.env
const { t, availableLocales, locale } = useI18n()
const theme = useTheme()
const toggleLocales = () => {
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}
const toggleTheme = () => {
  isDark.value = !isDark.value
  return theme.global.name.value = isDark.value ? 'dark' : 'light'
}
</script>

<template>
  <v-footer app>
    <nav text-xl mt-1>
      <RouterLink class="icon-btn mx-2" to="/" :title="t('button.home')">
        <div i-carbon-campsite />
      </RouterLink>

      <button class="icon-btn mx-2 !outline-none" :title="t('button.toggle_dark')" @click="toggleTheme()">
        <div i="carbon-sun dark:carbon-moon" />
      </button>

      <a class="icon-btn mx-2" :title="t('button.toggle_langs')" @click="toggleLocales()">
        <div i-carbon-language />
      </a>

      <RouterLink class="icon-btn mx-2" to="/about" :title="t('button.about')">
        <div i-carbon-dicom-overlay />
      </RouterLink>

      <a class="icon-btn mx-2" rel="noreferrer" :href="APP_REPO" target="_blank" title="Repo">
        <div i-carbon:code-reference />
      </a>
    </nav>
  </v-footer>
</template>
