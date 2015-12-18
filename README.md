[![Stories in Ready](https://badge.waffle.io/OpenBCI/OpenEXP.png?label=ready&title=Ready)](https://waffle.io/OpenBCI/OpenEXP)
# OpenEXP

[![Join the chat at https://gitter.im/OpenBCI/OpenEXP](https://badges.gitter.im/OpenBCI/OpenEXP.svg)](https://gitter.im/OpenBCI/OpenEXP?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
OpenEXP is an open-source browser-based web app for running experiments and collecting EEG data with OpenBCI. This is supported with [jsPsych](https://github.com/jodeleeuw/jsPsych) for the stimulus presentation backend.

This software is currently in alpha stage but it is being rapidly optimized and improved. To get started, please follow the following steps:

# 1. Download OpenEXP repo
This repo is currently using a submodule, which requires the `--recursive` flag for proper downloading.

```
git clone --recursive https://github.com/OpenBCI/OpenEXP.git
```

# 2. Install NPM
Download or use [NodeJS](https://nodejs.org/en/) to support js dependencies.

# 3. Install the dependencies
```
npm install --all
```

# 4. Plug it in
Plug in your OpenBCI dongle :)

# 5. Deploy
This will launch a browser window and it will begin your OpenEXP session.

```node server.js```

# 6. Connect
Click the Connect tab, load devices with `List Devices`, and click `Connect`.

# A special thank you
Thanks Josh DeLeeuw for sharing [jsPsych](https://github.com/jodeleeuw/jsPsych), the force behind the stimulus presentation and behavioral data collection/organization

(tested in chrome 46.0.2490.86 (64-bit) with mac osx yosemite 10.10.3)
