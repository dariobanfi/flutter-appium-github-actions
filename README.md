# 🤖 Functional Testing of a Flutter App using a GitHub Actions Pipeline with Appium

Just playing with some new toys to keep up with the times

## Setup

### Install Flutter

https://flutter.dev/docs/get-started/install/macos

### Install Appium

http://appium.io/docs/en/about-appium/getting-started/

TIP: Don't get lazy and make sure to have all the "optional" dependencies listed when running the command `appium-doctor` otherwise you will end up having to go back and fix things (like I had to 😛)

### Build the app for Android & iOS

`flutter build apk`

`flutter build ios`

The iOS build will probably fail because you need to generate the certificates / login with your developer id -> follow the handy instructions that your command line will spit out to do that.

### Test locally using Appium

`cd appium && npm i`

Now, before testing, make sure that you have the correct config for your iOS simulator and Android Emulator inside `appium/helpers/config.js`

Open the Android emulator (somehow Appium doesn't do it automatically)

Run: `npm test`

Hopefully it's all green!

## GitHub actions

// in progress
