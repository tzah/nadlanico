<template>
    <action-btn
        :icon="actionBarButtons[0].icon"
    />
</template>

<script>
    import ActionBtn from "./actionBtn";
    export default {
        name: "ActionBar",
        components: {ActionBtn},
        data(){
            return{
                actionBarButtons :[
                    {
                        icon: 'home',
                        id: '1'
                    },
                    {
                        icon: 'settings',
                        id: '2'
                    },
                    {
                        icon: 'settings',
                        id: '3'
                    },
                    {
                        icon: 'settings',
                        id: '4'
                    },

                ]
            }
        }
    }
</script>

<style scoped lang="scss">

</style>
