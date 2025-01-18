<script setup lang="ts">
import type {NavData} from "~/interface/fake";
import navItemsJson from "~/json/navItems.json";

const navItems: NavData[] = navItemsJson;
</script>

<template>
  <div class="flex flex-col">
    <nuxt-link class="font-bold flex items-center gap-x-2" v-for="(nav,i) in navItems" :key="i" :to="nav?.link">
      <Icon size="15" :name="nav?.icon" />
      <span>{{ nav?.title }}</span>
    </nuxt-link>
  </div>
</template>