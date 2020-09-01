# Protection Poker ![](https://github.com/janniclas/protection-poker/workflows/SonarCloud%20Check/badge.svg)

This project is currently in a pre alpha state and is used by me as a playground, for first experiments.

---

This is a basic implementation of the protection poker game as described by
Laurie Williams & Catherine Louis in their [article](https://opensource.com/article/19/3/protection-poker-agile-security-game).

---

### Used technology

- React-Native CLI for project setup
- socket.io for live updates from the server (during games)

### Notes / Cheat-Sheet

- How to install / setup the repository: `npm install`
- How to run the application: `npx react-native start` and `npx react-native run-ios` to start backend and app simulator. Make sure the [protection-poker-backend](https://github.com/janniclas/protection-poker-backend) is running aswell.
- To update React Native version follow guide at https://reactnative.dev/docs/upgrading. Run pod update in ios folder afterwards. Open ios folder in xcode and check for possible errors there.
