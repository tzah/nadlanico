<template>
    <div style="width: fit-content" class="mt-5">
        <router-link :to="linkTo">
            <div class="iconContainer" style="width: fit-content">
                <v-badge
                        :value="notifications > 0"
                        :content="notifications"
                        color="green"
                >
                    <v-icon class="icon">
                        {{'$'+icon}}
                    </v-icon>
                </v-badge>
            </div>
            <div class="text">
                {{text}}
            </div>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "navBarButton",
        props: {
            icon: {
                type: String
            },
            text: {
                type: String
            },
            linkTo: {
                type: String
            },
            notifications: {
                type: Number
            }
        }
    }
</script>

<style scoped lang="scss">
    .iconContainer, .text {
        margin-right: auto;
        margin-left: auto;
    }

    .text {
        color: #79828B;
    }
</style>
