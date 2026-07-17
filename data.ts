export enum Category {
  ALL = "All",
  MUSICPLAYER = "Music player",
  BROWSER = "Browser",
  ONLINEMUSIC = "Music Service",
  FIREWALL = "Firewall",
}

export type App = {
  name: string;
  description: string;
  category: Category;
  pros: string[];
  cons: string[];
  url: string;
  rating: number;
};

export const apps: App[] = [
  {
    name: "Fennec",
    description: "A privacy-focused web browser.",
    category: Category.BROWSER,
    pros: ["Debloated", "Firefox based", "Browser extension support"],
    cons: ["Not always up to date compared to Firefox", "Build can be unstable sometimes", "Weaker containerization compared to Chromium-based browsers"],
    url: "https://f-droid.org/packages/org.mozilla.fennec_fdroid/",
    rating: 3.5,
  },
  {
    name: "Lune",
    description: "Modern open source local music player for Android.",
    category: Category.MUSICPLAYER,
    rating: 5,
    pros: ["Good UI", "Good lyrics support", "Material design", "Good playlist support"],
    cons: ["UX is a bit strange"],
    url: "https://f-droid.org/es/packages/com.demonlab.lune/",
  },
  {
    name: "Netguard",
    description: "A simple way to block access to the internet per application.",
    category: Category.FIREWALL,
    pros: ["Stable","Good battery usage","Decent UX"],
    cons: ["Paid wall features", "UI look dated"],
    url: "https://f-droid.org/en/packages/eu.faircode.netguard/",
    rating: 3.5,
  },
  {
    name: "Chocola",
    description: "A cute and powerful offline music player app for Android!",
    category: Category.MUSICPLAYER,
    pros: ["Decent lyrics support","Material UI"],
    cons: ["Weird UX", "Buggy during my one month usage"],
    url: "https://f-droid.org/en/packages/com.sosauce.cutemusic/",
    rating: 4,
  },
  {
    name: "Opentune",
    description: "A YouTube Music client with Material Design 3, for Android.",
    category: Category.ONLINEMUSIC,
    pros: ["PEAK UI","Material UI","Okay Lyrics support"],
    cons: ["A bit buggy"],
    url: "https://f-droid.org/en/packages/com.Arturo254.opentune/",
    rating: 4.5,
  },
  {
    name: "Gramophone",
    description: "Simple offline music player with minimalistic design.",
    category: Category.MUSICPLAYER,
    pros: ["Material UI","Good Lyrics support"],
    cons: ["Broken playlist support"],
    url: "https://f-droid.org/en/packages/org.akanework.gramophone/",
    rating: 4,
  },
];
