export enum Category {
  ALL = "All",
  MUSICPLAYER = "Music player",
  BROWSER = "Browser",
  ONLINEMUSIC = "Music Service",
  FIREWALL = "Firewall",
  GAME = "Game",
  APPSTORE = "App store",
}

export enum Platform {
  ANDROID,
  LINUX,
  WINDOWS,
  MACOS,
  IOS,
}

export type App = {
  name: string;
  description: string;
  category: Category;
  pros: string[];
  cons: string[];
  url: string;
  rating: number;
  platform: Platform[];
};

export const apps: App[] = [
  {
    name: "Fennec",
    description: "A privacy-focused web browser.",
    category: Category.BROWSER,
    pros: ["Debloated", "Firefox based", "Browser extension support"],
    cons: ["Not always up to date compared to Firefox", "Build can be unstable sometimes", "Weaker containerization compared to Chromium-based browsers"],
    url: "https://f-droid.org/packages/org.mozilla.fennec_fdroid/",
    platform: [Platform.ANDROID],
    rating: 3.5,
  },
  {
    name: "Lune",
    description: "Modern open source local music player for Android.",
    category: Category.MUSICPLAYER,
    rating: 4.5,
    pros: ["Good UI", "Good lyrics support", "Material design", "Good playlist support"],
    cons: ["UX is a bit strange"],
    platform: [Platform.ANDROID],
    url: "https://f-droid.org/es/packages/com.demonlab.lune/",
  },
  {
    name: "Netguard",
    description: "A simple way to block access to the internet per application.",
    category: Category.FIREWALL,
    pros: ["Stable","Good battery usage","Decent UX"],
    cons: ["Paid wall features", "UI look dated"],
    url: "https://f-droid.org/en/packages/eu.faircode.netguard/",
    platform: [Platform.ANDROID],
    rating: 3.5,
  },
  {
    name: "Chocola",
    description: "A cute and powerful offline music player app for Android!",
    category: Category.MUSICPLAYER,
    pros: ["Decent lyrics support","Material UI"],
    cons: ["Weird UX", "Buggy during my one month usage"],
    url: "https://f-droid.org/en/packages/com.sosauce.cutemusic/",
    platform: [Platform.ANDROID],
    rating: 4,
  },
  {
    name: "Opentune",
    description: "A YouTube Music client with Material Design 3, for Android.",
    category: Category.ONLINEMUSIC,
    pros: ["PEAK UI","Material UI","Okay Lyrics support"],
    cons: ["A bit buggy"],
    url: "https://f-droid.org/en/packages/com.Arturo254.opentune/",
    platform: [Platform.ANDROID],
    rating: 4.5,
  },
  {
    name: "Gramophone",
    description: "Simple offline music player with minimalistic design.",
    category: Category.MUSICPLAYER,
    pros: ["Material UI","Good Lyrics support"],
    cons: ["Broken playlist support"],
    url: "https://f-droid.org/en/packages/org.akanework.gramophone/",
    platform: [Platform.ANDROID],
    rating: 4,
  },
  {
    name: "Shattered Pixel Dungeon",
    description: "A roguelike game based on Pixel Dungeon.",
    category: Category.GAME,
    pros: ["It is a foss game","It is fun"],
    cons: ["Can be a bit hard"],
    platform: [Platform.ANDROID, Platform.IOS, Platform.MACOS, Platform.WINDOWS, Platform.LINUX],
    url: "https://github.com/00-Evan/shattered-pixel-dungeon",
    rating: 5,
  },
  {
    name: "F-Droid Basic",
    description: "The minimal client app for the app store that respects freedom and privacy.",
    category: Category.APPSTORE,
    pros: ["Material UI","More secure than the normal F-Droid client","Official client"],
    cons: ["Current 2.0-alpha11 does not have permission metadata"],
    url: "https://f-droid.org/en/packages/org.fdroid.basic/",
    platform: [Platform.ANDROID],
    rating: 4.5,
  },
  {
    name: "Droid-ify",
    description: "Clutterfree F-Droid client.",
    category: Category.APPSTORE,
    pros: ["Material UI","Have a list of repo"],
    cons: ["Bad UX(navigator on top)"],
    url: "https://f-droid.org/en/packages/com.looker.droidify/",
    platform: [Platform.ANDROID],
    rating: 4.5,
  },
  {
    name: "Aurora Store",
    description: "An unofficial FOSS client to Google Play with an elegant design and privacy.",
    category: Category.APPSTORE,
    pros: ["Material UI","shizuku support"],
    cons: ["Can be slow/buggy","Depends on the Google Play Store servers"],
    url: "https://f-droid.org/en/packages/com.aurora.store/",
    platform: [Platform.ANDROID],
    rating: 4,
  },
]
