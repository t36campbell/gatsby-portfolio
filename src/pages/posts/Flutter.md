---
path: "/flutter"
category: "blog"
featured: "true"
published: "2020-04-28"
title: "Flutter"
author: "Tyler Campbell"
---

### Prerequisites 
Things you should know before you begin:
1. Step 1
2. Step 2
3. Step 3

### Summary
Cut to the chase with these steps:
1. Step 1
2. Step 2
3. Step 3

### Install on macOS
Cut to the chase with these steps:
1. Download SDK
2. `cd ~/`
3. `mdkir Development && cd Development`
4. `unzip ~/Downloads/flutter_macos_v1.12.13+hotfix.9-stable.zip`

### Make Flutter a global command
If you zsh config skip to step , otherwise follow these steps:
1. `nano ~/.zshrc`
2. add the export path 
```
export PATH="$PATH:$Home/flutter/bin"
```

> This should be `/Users/username/Development`  

3. start a new terminal window
4. `source ~/.zshrc`
5. `echo $path`
6. `which flutter`

### Install Xocde
Cut to the chase with these steps:
1. Download the latest version from the App Store
2. Setup Xcode command line tools
```
sudo xcode-select --switch /Applications/Xcode.app/Contents/Developer
sudo xcodebuild -runFirstLaunch
```

### Start iOS Simulator & Run Your App
Cut to the chase with these steps:
1. `open -a Simulator`
2. cd into your projects folder
3. `flutter create flutter_hello_world`
4. `cd flutter_hello_world`
5. `flutter run`

