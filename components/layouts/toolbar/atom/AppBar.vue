<script setup lang="ts"></script>

<template>
  <v-app-bar class="px-6" color="background">
    <v-avatar class="mr-4">
      <v-img contain max-height="40" max-width="40" src="/logo/student-market-logo.png" />
    </v-avatar>

    <v-spacer />

    <v-toolbar-title class="header-tool-bar-title">
      <template #default>
        <div>
          <v-container class="d-flex border-solid border-gray tw-shadow-none">
            <v-text-field
              class="header-search-bar"
              color="white"
              density="compact"
              :flat="true"
              hide-details
              :placeholder="$t('common.action.search')"
              prepend-inner-icon="mdi-magnify"
              single-line
              variant="solo"
            />
          </v-container>
        </div>
      </template>
    </v-toolbar-title>

    <v-spacer />

    <v-btn icon>
      <v-icon size="large">mdi-bell-outline</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon size="large">mdi-chat-processing-outline</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-cart-plus</v-icon>
    </v-btn>

    <v-btn class="text-none tw-text-sm" :ripple="false">
      <template #prepend>
        <v-icon class="ml-0" size="x-large">mdi-message-processing-outline</v-icon>
      </template>
      <span class="hidden-sm-and-down">{{ $t('common.action.post') }}</span>
    </v-btn>

    <v-btn class="text-none" :ripple="false">
      <template #prepend>
        <v-icon size="x-large">mdi-account-circle-outline</v-icon>
      </template>
      <template #append>
        <v-icon class="ml-0" size="x-large">mdi-chevron-down</v-icon>
      </template>
      <span class="hidden-sm-and-down tw-text-xs">{{ $t('common.action.account') }}</span>
    </v-btn>

    <v-btn class="bg-primary" color="white" prepend-icon="mdi-square-edit-outline">
      <span class="hidden-sm-and-down">{{ $t('common.action.postMessage') }}</span>
    </v-btn>
  </v-app-bar>
</template>

<style scoped lang="scss"></style>
