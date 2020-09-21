<template>
    <div style="width: fit-content">
            <v-img class="profileImage"
                   :src="imageUrl"
            />
        <div class="userName">
            {{userName}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProfileImage",
        components: {},
        props: {
            imageUrl: {
                type: String,
                default: require('../../assets/UserProfile.png')
            },
            userName: {
                type: String,
                default: 'Tzahi Nakash'
            }
        }
    }
</script>

<style scoped lang="scss">
    .profileImage {
        border-radius: 90px;
        border: 1px solid #9cc5e8;
        width: 110px;
        height: 110px;
    }

    .userName {
        cursor: default;
        color: #295A84;
        font-weight: 500;
        font-family: 'Poppins', sans-serif;
        width: fit-content;
        margin: auto;
        padding: auto;
        position: relative;
        top: 14px;
    }
</style>
