<template>
    <v-container fluid fill-height>
        <v-row no-gutters>
            <v-col cols="2" class="navBar">
                <slot name="navBar"/>
            </v-col>
            <v-col cols="10" class="content">
                <router-view/>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "shell"
    }
</script>

<style scoped lang="scss">
    .navBar{
        height: 100vh;
    }
    .content{
        height: 100vh;
    }
    .container{
        padding: unset;
    }
</style>
