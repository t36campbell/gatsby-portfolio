---
path: "/flutter"
category: "blog"
featured: "false"
published: "2020-04-28"
title: "Flutter"
author: "Tyler Campbell"
---
### Intro
Setting up the Flutter SDK in macOS to start making cross-platform mobile apps.

### Summary
1. Install Flutter SDK on macOS
2. Make `flutter` a global command
3. Install Xcode dev tools
4. Test the environment

### Install on macOS
Cut to the chase with these steps:
1. Download the [Flutter SDK](https://flutter.dev/docs/get-started/install/macos)
2. `cd ~/`
3. `unzip ~/Downloads/flutter_macos_v1.12.13+hotfix.9-stable.zip`
	* This will unzip the flutter SDK in the `$Home` located at `/Users/username` creating a folder named `flutter`
	* Unlike NPM and Node.js, Flutter is not hidden by default.
		* _If you’d like it to be hidden add a ‘.’ to the beginning of the folder name. Make sure you also add that to the path later_
> _note: Flutter stores info in a hidden file called/ `.flutter` So I named the SDK folder `.flutter-sdk`_ 

### Make` flutter` a global command
1. add the export path to your shell’s rc file 
> _I use oh my zsh, located at:_`~/.zshrc` 
```
export PATH="$PATH:$Home/flutter/bin"
```
2. start a new terminal window
3. Update the shell config with `source ~/.zshrc`
4. Make sure your path is listed when you `echo $path`
> If `which flutter` returns “flutter not recognized as a command” the path is not correct. Verify your rc file has the correct path, if that’s correct, there may be a permission issue with your `$Home` folder. 

### Install Xcode
Cut to the chase with these steps:
1. Download the latest version from the App Store
2. Setup Xcode command line tools
```
sudo xcode-select --switch /Applications/Xcode.app/Contents/Developer
sudo xcodebuild -runFirstLaunch
```

### Start iOS Simulator & Run Your App
1. Start Simulator with `open -a Simulator`
2. While your virtual device starts up. cd into your projects folder
3. Run `flutter create flutter_hello_world`
> this creates a new flutter project with the named `flutter_hello_world`
5. `cd flutter_hello_world`
6. Once your Simulator Device is booted run`flutter run`
> This will compile and transfer your app into the Simulator Device for testing. Flutter features hot-reload, so all your projects will have their changes shown on save, this significantly reduces the compile time after its first ran.

