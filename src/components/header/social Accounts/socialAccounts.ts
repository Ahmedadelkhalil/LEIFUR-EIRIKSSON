// ICONS
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTumblr } from "@fortawesome/free-brands-svg-icons";
// TYPES
import { SocialAccounts } from "../../../types/socialAccountsTypes";

export const socialAccounts: SocialAccounts = [
  {
    id: 1,
    platformName: "FACEBOOK",
    platformLink: "https://www.facebook.com/leifurhotel/",
    icon: faFacebook,
    followers: "771K",
  },
  {
    id: 2,
    platformName: "INSTAGRAM",
    platformLink: "https://www.instagram.com/hotelleifureiriksson/",
    icon: faInstagram,
    followers: "335K",
  },
  {
    id: 3,
    platformName: "TUMBLER",
    platformLink: "",
    icon: faTumblr,
    followers: "176K",
  },
];
