# OpenEXP
OpenEXP is an open-source browser-based web app for running experiments and collecting EEG data with OpenBCI.

# download repo
git clone --recursive [URL]

# install npm
https://nodejs.org/en/

# install dependencies
npm install

# plug it in 
plug in your openbci dongle
change "/dev/tty.usbserial-DNXXXXXX" to the name of your dongle on line 37 in index.js (we'll change this soon)

# to deploy
node index.js

# to view
point your browser (tested in chrome) to: http://localhost:5000 
