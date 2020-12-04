<template>
  <v-container class="navBar">
    <v-row style="padding-top: 1vh">
      <v-col cols="3" class="settingIcon">
        <SettingsIcon />
      </v-col>
      <v-spacer />
      <v-col cols="1" class="homeIcon">
        <v-icon>$home</v-icon>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <profile-image class="userDetails" />
      </v-col>
    </v-row>
    <v-row v-for="item in navBarMenu" :key="item.id">
      <v-col>
        <nav-bar-button
          :icon="item.icon"
          :text="item.text"
          class="navBarMenuItem"
          :linkTo="item.linkTo"
          :notifications="item.notifications"
        />
      </v-col>
    </v-row>
    <div class="footerContainer">
      <v-row class="footer">
        <v-col>
          <div class="footerSpacer"></div>
        </v-col>
      </v-row>
      <v-row class="socialMenu">
        <v-col v-for="item in socialMenu" :key="item.id">
          <img :src="item.src" class="image" />
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import ProfileImage from "../ProfileImage";
import NavBarButton from "./navBarButton";
import SettingsIcon from "../../Icons/SettingsIcon";

export default {
  name: "navBar",
  components: { SettingsIcon, NavBarButton, ProfileImage },
  data() {
    return {
      navBarMenu: [
        {
          id: 1,
          icon: "megaPhone",
          text: "Map",
          linkTo: "Map",
          notifications: 4,
        },
        {
          id: 2,
          icon: "myCards",
          text: "My-Cards",
          linkTo: "MyCardsPage",
          notifications: 0,
        },
        {
          id: 3,
          icon: "heart",
          text: "Favorite",
          linkTo: "FavoritePage",
          notifications: 0,
        },
        {
          id: 4,
          icon: "group",
          text: "Groups",
          linkTo: "GroupsPage",
          notifications: 3,
        },
      ],
      socialMenu: [
        { id: 1, src: require("../../../assets/LinkdinLogo.svg") },
        { id: 2, src: require("../../../assets/OneNoteLogo.svg") },
        { id: 3, src: require("../../../assets/InstegramLogo.svg") },
        { id: 4, src: require("../../../assets/YouTubeLogo.svg") },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.homeIcon {
  padding-left: 3vw;
  padding-top: 17px;
}

.settingIcon {
  padding-left: 2vw;
}

.navBar {
  background-color: #f8f8f8;
}

.userDetails,
.navBarMenuItem,
.footer,
.socialMenu {
  margin-left: auto;
  margin-right: auto;
  width: 80%;
}

.socialMenu{
width: 70%;
}

.footerSpacer {
  height: 5px;
  border: 1px solid #295a84;
}

.image {
  width: 2vw;
  height: 3.5vh;
  max-height: 30px;
  max-width: 30px;
}

::v-deep a {
  text-decoration: none;
}

.footerContainer {
  position: relative;
  width: 100%;
  top: 28vh;
  right: auto;
  left: auto;
  bottom: 0;
}
</style>
