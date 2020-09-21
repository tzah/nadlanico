<template>
    <v-btn fab small class="actionButton">
        <v-icon>
            {{'$'+icon}}
        </v-icon>
    </v-btn>
</template>

<script>
    export default {
        name: "actionBtn",
        props:{
            icon:{
                type: String,
                default: 'home'
            }
        }
    }
</script>

<style scoped>
    .actionButton:hover {
        border-radius: 100% !important;
    }
</style>
