# Prerequisites for React & Redux training

* Install Chrome browser (https://www.google.com/chrome/browser/desktop/)
  along with the following extensions:
  - React Developer Tools (https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
  - Redux DevTools (https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)

* Install Node.js (https://nodejs.org/). The LTS version should work fine.

* Install Yarn (https://yarnpkg.com/). After installing, check that running
  `yarn --version` from the command line works.

* Install create-react-app by running `yarn global add create-react-app`.

* Create a new React project by running `create-react-app react-training`. If `create-react-app` command is not found you probably need to add the directory given by `yarn global bin` to your PATH. If for some reason that doesn't help, you can always install create-react-app using npm with the command `npm install -g create-react-app`.

* Then command `cd react-training` and `yarn start` and the React application should
  open in browser.

* Open developer tools in Chrome (F12 on Windows, Cmd-Option-i on macOS) and
  check that you see a React tab along with the others (Elements, Console, etc).
  Notice that you may need to expand the tab list to see all the tabs.

# Editor support

## Common tasks

Add `.eslintrc.js` file
to the project root with the following content

```js
module.exports = {
  "extends": "react-app"
};
```

## IntelliJ IDEA or Webstorm

The IDE can be installed from https://www.jetbrains.com/idea/ or
https://www.jetbrains.com/webstorm/, respectively.

Check that you are using the latest IDE version (2016.3), and enable ESLint support from
settings (Languages and Frameworks | JavaScript | Code Quality Tools | ESLint). Choose
ESLint package under the project node modules (react-training/node_modules/eslint).

## Atom

The editor can be installed from https://atom.io/.

Install the following Atom packages:

* linter
* linter-eslint
* react

Installation can be done from Atom UI or from command line

```
apm install linter linter-eslint react

```
From react package settings, tick the "Enabled for All Javascript files" checkbox. 


## Visual Studio Code

The editor can be installed from https://code.visualstudio.com/.

Install the ESLint extension (dbaeumer.vscode-eslint).

## Other

You are free to choose any editor you like, but we may not be able to help
you if you encounter any editor specific issues.