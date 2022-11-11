<template lang="pug">
ReposItem(v-for="repos in repositories" :key="repos.id")
</template>
<script>
import ReposItem from '@/components/ReposItem.vue'
import { mapState } from 'vuex';
export default {
    components: { ReposItem },

    computed: {
        ...mapState(['repositories'])
    },


}
</script>
<style lang="scss">

</style>