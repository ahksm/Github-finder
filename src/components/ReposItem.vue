<template lang="pug">
.repos-item
    .repos-item-left
        h3 {{ repos.name }}
        p Кол-во звёзд: {{ repos.stargazers_count }} ⭐
        p Дата добавления: {{ new Date(repos.creared_at).toLocaleDateString() }}
    a(:href="repos.html_url" target="_blank") ПОСЕТИТЬ
</template>
<script>
export default {
  props: {
    repos: Object
  },
}
</script>
<style lang="scss">
    .repos-item {
        max-width: 585px;
        width: 100%;
        padding: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #ffffff;
        border-radius: 4px;
        margin: 10px auto;

        &-left {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        h3 {
            font-size: 18px;
        }

        p {
            font-size: 14px;
        }

        a {
            background: #3F3F3F;
            border-radius: 6px;
            padding: 9px 15px;
            color: white;
            font-weight: 300;
        }
    }
</style>