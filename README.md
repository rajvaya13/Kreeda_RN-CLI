# Kreeda

A sports community mobile app for Indian sports enthusiasts. Kreeda (Sanskrit: "sports/game") lets users follow sports news, connect with other players, organize tournaments, and manage teams — all in one place.

---

## Features

- **News Feed** — Live Indian sports headlines powered by NewsAPI
- **Social Updates** — Post updates, like, comment, and view other player profiles
- **Tournament Management** — Create and track cricket/sports tournaments
- **Player Discovery** — Search and explore other players on the platform
- **Badminton Manager** — Manage badminton player pairs and matches
- **Scoreboard** — Track scores during games
- **Health Tips** — Hydration, diet, warm-up, and gear tips for athletes
- **Profile** — Personal stats, achievements, match history, and team management

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React Native 0.64 (CLI) |
| Authentication | Firebase Auth (email/password) |
| Database | Cloud Firestore |
| File Storage | Firebase Storage |
| Navigation | React Navigation (Stack, Drawer, Bottom Tabs) |
| UI Components | NativeBase, React Native Paper, React Native Elements |
| Icons | React Native Vector Icons |
| Animations | React Native Animatable, Reanimated |
| News API | NewsAPI.org |
| State Management | React Context API |

---

## Project Structure

```
Kreeda_RN-CLI/
├── android/            # Android native project
├── ios/                # iOS native project
├── assets/             # Images, fonts, and static files
├── components/         # Reusable UI components
├── navigation/         # Navigation configuration (stacks, tabs, drawer)
├── screens/            # App screens
│   ├── AuthScreens/    # Sign In, Sign Up
│   ├── HomeScreens/    # Feed, Updates, Explore, Profile
│   └── ...             # Tournament, Scoreboard, Health Tips, etc.
├── styles/             # Shared styles
├── App.js              # Root component
└── index.js            # App entry point
```

---

## Getting Started

### Prerequisites

- Node.js >= 14
- React Native CLI
- Android Studio (for Android) or Xcode (for iOS)
- A Firebase project with Auth and Firestore enabled

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd Kreeda_RN-CLI

# Install dependencies
yarn install

# Install iOS pods (macOS only)
cd ios && pod install && cd ..
```

### Running the App

```bash
# Start Metro bundler
yarn start

# Run on Android
yarn android

# Run on iOS
yarn ios
```

### Firebase Setup

1. Create a Firebase project at [console.firebase.google.com](https://console.firebase.google.com)
2. Enable **Email/Password** authentication
3. Create a **Firestore** database
4. Download `google-services.json` (Android) and `GoogleService-Info.plist` (iOS)
5. Place them in `android/app/` and `ios/` respectively

### NewsAPI Setup

Get a free API key from [newsapi.org](https://newsapi.org) and replace the key in the news feed screen.

---

## Firestore Collections

| Collection | Description |
|---|---|
| `users` | User profiles (name, email, avatar, createdAt) |
| `posts` | Social feed posts (text, image, likes, comments) |
| `tournamentPost` | Tournament details (name, overs, ground, location) |
| `bdmPlayers` | Badminton player pairs |

---

## Built With

This project was built as a graduation project to demonstrate a full-stack mobile application using React Native and Firebase.

---

## License

This project is for educational purposes.
