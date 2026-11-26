# POLAR POP

A fountain-dispenser colouring app for Android. Milestone 1: the opening screen — 16 drink valves and three cup sizes, each selectable independently.

## Getting the APK

Every push to `main` builds a debug APK on GitHub Actions and publishes it under **Releases** as `PolarPop.apk`. Open the release on your phone, download the APK, and allow "Install unknown apps" for your browser when Android asks.

## Project layout

```
app/src/main/assets/www/      the app screen (HTML/CSS/JS)
  js/drinks.js                the single, central list of all 16 drinks
  js/cups.js                  Small / Medium / Large
  js/state.js                 independent drink + cup selection
  js/render.js                dispenser valves and cup buttons
  js/colouring.js             stub for the next stage (colouring)
  css/style.css               dispenser look
app/src/main/java/...         MainActivity: full-screen WebView host
.github/workflows/build-apk.yml   builds the APK
```

## Adding real label artwork

Labels are currently clearly marked placeholders (brand colour + drink name). To use real artwork, put the image in `app/src/main/assets/www/img/labels/` and set `art` on that drink in `js/drinks.js`, e.g. `art: "img/labels/pepsi.png"`. Colouring outlines go in `colouringArt`, kept separate from the original label.

## Building locally

Open the folder in Android Studio, or run `./gradlew assembleDebug` with the Android SDK installed.
