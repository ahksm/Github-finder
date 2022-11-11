<template lang="pug">
.container.user
    .user-content(v-if="user")
        .user-content-left
            img(:src="user.avatar_url", alt="alt")
            a(:href="user.html_url") ПОСЕТИТЬ
        .user-content-right
            h2 {{ user.login }}
            h3 Репозиториев: <span>{{ user.public_repos }}</span>
            h4 Создан: <span>{{ user.created_at }}</span>
            h5 Подписчиков: <span>{{ user.followers }}</span>
            h6 Подписок: <span>{{ user.following }}</span>
    .user-content(v-else)
        .user-content-left
            img(src="https://avatars.githubusercontent.com/u/108935589?v=4", alt="alt")
            a(href="https://github.com/ahksm") ПОСЕТИТЬ
        .user-content-right
            h2 ahksm
            h3 Репозиториев: <span>4000</span>
            h4 Создан: <span>2022.01.05</span>
            h5 Подписчиков: <span>10млрд</span>
            h6 Подписок: <span>0</span>
.sort
    .sort-box
        button.sort-box__btn(v-for="(btn, index) in btns", :key="btn.name" :class="{active: isActive == index}" @click="sort(index)") {{ btn.name }}
</template>
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      isActive: 0,
      btns: [{ name: 'ИМЯ' }, { name: 'ЗВЕЗДЫ' }, { name: 'ДАТА' }],
    }
  },
  computed: {
    ...mapState(['user']),
  },
  methods: {
    sort(index) {
        this.isActive = index
    }
  }
}
</script>
<style lang="scss">
.user-content {
  width: 337px;
  height: 164px;
  padding: 13px 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  border-radius: 6px;
  margin: 30px auto;
  gap: 10px;

  &-left {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 3px;

    img {
      width: 100px;
      height: 100px;
      border: 1px solid #3f3f3f;
      border-radius: 6px;
    }

    a {
      background: #3f3f3f;
      border-radius: 6px;
      width: 100px;
      height: 35px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      font-weight: 300;
    }
  }
}
.sort {
  display: flex;
  justify-content: center;

  &-box {
    background: #e0e0e0;
    padding: 2px;

    &__btn {
      color: #3f3f3f;
      font-weight: 700;
      background: #e0e0e0;
      border-radius: 4px;
      border: none;
      outline: none;
      width: 112px;
      height: 32px;
      cursor: pointer;

      &.active {
        background: #ffffff;
      }
    }
  }
}
</style>
