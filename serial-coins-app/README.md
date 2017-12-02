If you have not installed Node or Meteor, follow the steps in [Setting up your development environment](https://github.com/areaofeffect/hello-world/blob/master/week8/README.md#setting-up-your-development-environment) before running this application.

# How to run super-coins-app
## 1 
Download these files to your computer

## 2

Connect your Arduino to your computer via USB and run the sendCoins app in the Arduino folder

How to find the path to your serial port

	ls -al /dev/cu*


## 3
Edit the `server/main.js` files on [line 29](https://github.com/kandizzy/piggy-bank/blob/master/serial-coins-app/server/main.js#L29) with your serial port from step 2

## 4
In Terminal, `cd` into this directory (serial-coins-app) and then run the following commands:

	meteor npm install serialport --save
	meteor npm install react-p5-wrapper --save
	meteor npm install --save react react-dom
	meteor add react-meteor-data
	meteor
	
## 5
View the application in your browser at `http://localhost:3000`
