<template lang="pug">
.container.search
  .search-box
    input.search-box__input(
      type="text",
      placeholder="Введите имя пользователя",
      v-model="search",
      @keydown.enter="getUserInfo"
    )
    img(@click="clear" src="./../assets/img/close.jpg", alt="alt", v-show="search")
  button.search__btn(@click="getUserInfo") НАЙТИ
</template>
<script>
import { mapActions, mapMutations } from 'vuex'
export default {
  data() {
    return {
      search: '',
    }
  },
  methods: {
    ...mapActions(['userInfo']),
    ...mapMutations(['userReset']),
    getUserInfo() {
      this.userInfo(this.search)
    },
    clear() {
      this.search = ''
      this.userReset()
    }
  },
}
</script>
<style lang="scss">
.search {
  display: flex;
  justify-content: center;
  margin-top: 20px !important;
  &-box {
    max-width: 600px;
    width: 100%;
    position: relative;
    img {
      position: absolute;
      top: 0;
      right: 0;
      width: 5%;
    }
    &__input {
      width: 100%;
      padding: 10px 20px;
      background: white;
      border: none;
      outline: none;
      font-size: 14px;
      line-height: 120%;
      color: #c2c2c5;
    }
  }
  &__btn {
    background: #3f3f3f;
    border-radius: 0px 4px 4px 0px;
    color: #ffffff;
    font-size: 14px;
    line-height: 120%;
    border: none;
    outline: none;
    padding: 10px;
    cursor: pointer;
  }
}
</style>
