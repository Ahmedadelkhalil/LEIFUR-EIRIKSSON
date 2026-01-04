import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
export type SocialAccounts = {
  id: number;
  platformName: String;
  platformLink: String;
  icon: IconDefinition;
  followers: String;
}[];
