[![Stories in Ready](https://badge.waffle.io/OpenBCI/OpenEXP.png?label=ready&title=Ready)](https://waffle.io/OpenBCI/OpenEXP)
[![Join the chat at https://gitter.im/OpenBCI/OpenEXP](https://badges.gitter.im/OpenBCI/OpenEXP.svg)](https://gitter.im/OpenBCI/OpenEXP?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
# OpenEXP
OpenEXP is an open-source desktop app for running experiments and collecting behavioral and physiological data.


![Screenshot of OpenEXP](https://github.com/openexp/OpenEXP/blob/master/home_screenshot.png)

This software is currently in ALPHA stage but it is being rapidly optimized and improved. To get started, please follow the following steps:

# 1. Download OpenEXP repo

```
git clone https://github.com/OpenBCI/OpenEXP.git
```

# 2. Install NPM
Download or use [NodeJS](https://nodejs.org/en/) to support js dependencies.

# 3. Install the dependencies
```
npm install --all
```

# 4. Deploy
This will launch the application and it will begin your OpenEXP session.

```npm run watch```

and in a separate terminal window...

```npm start```

# 5. Connect

Plug in your OpenBCI dongle :)

Click the Connect button on the top left of the app to auto-find your device.  If the device is not found it will return a list of available devices to connect to.

# A special thank you
Thanks Josh DeLeeuw for sharing [jsPsych](https://github.com/jodeleeuw/jsPsych), the force behind the stimulus presentation and behavioral data collection/organization

(tested in chrome 46.0.2490.86 (64-bit) with mac osx yosemite 10.10.3)

# Building for production

1. Comment out/in the marked lines in `index.html`
2. Comment out the devTools line in /electron/main.js if you don't want dev tools
2. If first time running, `npm install --all` to get the devDependencies (you might need to add electron-builder and electron-packager globally)
3. Now run `npm run deploy`
3. Then `npm run build:osx` (Sorry windows/linux fam)

Boom. Now navigate to /dist/build/osx and see your magical .dmg!
Note: If you are going to continually build/test MAKE SURE TO UNMOUNT YOUR .dmg EACH TIME!

To launch your app for the first time:
1. Navigate to Applications folder in Finder
2. ctrl + click (or two finger click / right click)
3. Select open
