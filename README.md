# FairPay Backend

Backend for the FairPay App
---
## Requirements

For development, you will only need Node.js and a node global package, NPM, installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v14.17.0
    
    $ npm --version
    6.14.13

If you need to update `npm`, you can make it using `npm`!

    $ npm install npm -g



## Install

    $ git clone https://github.com/Zeroluffs/fairpay-backend.git
    $ cd fairpay-backend
    $ npm install

## Configure app

Dependencies used in this project are cors dotenv express mongoose morgan. In case these werent properly installed just run npm install with the name of the dependencies.
Make sure to also install nodemon 

$ npm install -D nodemon

## Running the project

    $ npm start or npm run dev

## Simple build for production

    $ npm build
