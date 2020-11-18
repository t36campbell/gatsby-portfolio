---
path: /blog/9900k-hackintosh
category: blog
published: "2020-05-06"
title: 9900K Hackintosh
author: Tyler Campbell
image: https://ik.imagekit.io/t36campbell/Portfolio/blog-1_rbK4YAxj4.png
---

### Intro
Build the most stable Hackintosh possible, running macOS Catalina and even outperform the 27” iMac and the 8-core Mac Pro. 

### Summary
1. Download macOS Catalina 
2. Create a Bootable USB drive
3. Catalina EFI Partition & Drop Files
4. Generating a DSDT table
5. Catalina Desktop EC Spoofing (Optional)
6. Configuring Clover Bootloader
7. BIOS Configuration
8. Install macOS
9. Post Install
> _I was able to get this working without following the optional steps. Your mileage may vary._  

### Part List 
1. **CPU:** Intel Core i9-9900K 3.6 GHz 8-Core Processor
2. **Motherboard:** ASRock Z390 Phantom Gaming-ITX/ac Mini ITX LGA1151
3. **Video Card:** MSI Radeon RX VEGA 56 8 GB Air Boost
4. **Power Supply:** Corsair SF 600 W 80+ Gold Certified Fully Modular 
5. **CPU Cooler:** Noctua NH-U12S chromax.black 55 CFM CPU Cooler 
6. **Memory:** Kingston HyperX Predator 32 GB (2 x 16 GB) DDR4-3000
7. **Storage:** ADATA XPG SX8200 Pro 512 GB M.2-2280 NVME SSD
8. **WiFi:** Padarsey BCM94360CS2 Wifi Bluetooth Airport Wireless Card
9. **Custom:** BCM94360CS2/BCM943224PCIEBT2 Card To NGFF(M.2) Key A/E Adapter 

> Approximately: $1500 + peripherals   
>   
> Full List available at [PC Parts Picker](https://pcpartpicker.com/list/7frJx6)  

### Working Features 
1. Over-Clock: All Core Boost to 5.0GHz
2. AirDrop
3. Sleep/Wake
4. AppleID
	* App Store
	* Facetime
	* iMessage
	* iCloud Drive

## Lets Get Started
### Download macOS Catalina
* [Download Catalina 10.15 from the Mac App Store](https://itunes.apple.com/us/app/macos-catalina/id1466841314?ls=1&mt=12) 
* Alternatively you can obtain a copy of Catalina by downloading [macOS Catalina Patcher](http://dosdude1.com/catalina/)
		* Open & Run the utility
		* Then select Download a Copy 

> _Both of these methods will add Catalina to your Downloads folder_   

### Create a Bootable USB drive
#### Format USB 
* Insert a USB Flash Drive
* Open Disk Utility
* Select the Flash Drive on the left column
* Click Erase
* Set the following settings:
> Name:  Hackintosh  
> Format: Mac OS Extended (Journaled)  
> Scheme: GUID Partition Map  
> Click Erase  
> Click Done when finished  
#### Make USB Bootable 
* Verify Install macOS Catalina is in the /Applications folder
> _Drag Application from Downloads into Applications if necessary_  
* Open Terminal through spotlight or launchpad
* Paste the following into Terminal (enter your password if prompted):
* `sudo /Applications/Install\ macOS\ Catalina.app/Contents/Resources/createinstallmedia —volume /Volumes/Hackintosh /Applications/Install\ macOS\ Catalina.app —nointeraction`
> _Wait for this process to finish	 DO NOT CLOSE TERMINAL_  

### Catalina EFI Partition & Drop Files
* Mount EFI Partition:
	* Download [Clover Configurator](http://mackie100projects.altervista.org/download-clover-configurator/) 
	* Open Clover Configurator
	* Select Mount EFI under TOOLS
	* Click Mount Partition for Install macOS….
	* Click Open Partition
* Drop my EFI Folder in:
	* Delete the folder called EFI  in the partition you mounted (If it exists)
	* Download  [Hackintosher-Catalina-10.15-EFI.zip](https://hackintosher.com/wp-content/uploads/Hackintosher-Catalina-10.15-EFI.zip) 
	* Unzip Hackintosher-Catalina-10.15-EFI
	* Copy the unzipped EFI folder
	* Paste the downloaded EFI folder into the mounted EFI partition

### Generate DSDT Table
* Restart or boot the computer  you want to install Catalina on with the flash drive is plugged in
* Boot from the UEFI partition of the flash drive by either selecting it as a temporary boot device or setting it as priority in BIOS settings.
* You will be brought to the Clover Bootloader Menu
* Press F4 and that will generate an DSDT onto the EFI partition of your flash drive located in `/Volumes/EFI/EFI/CLOVER/ACPI/` origin
* Return to your other Mac 

### Catalina Desktop EC Spoofing (Optional)
*  [Download SSDT-Time](https://github.com/corpnewt/SSDTTime/archive/master.zip)  and unzip the folder
	*  [Read the instructions](https://github.com/corpnewt/SSDTTime) 
* Open SSDTTime-master folder
* Right-click open SSDTTime.command
* This will open Terminal
* Please make a selection: 2
* Drag and drop a DSDT.aml or origin folder of mounted EFI partition folder `/Volumes/EFI/EFI/CLOVER/ACPI/` origin 
* SSDTTime will automatically open it’s own Results folder
* Copy SSDT-EC.aml from the Results folder and place it in `/Volumes/EFI/EFI/CLOVER/ACPI/` patched of the flash drive
	* _note: The patched folder not the origins folder_

>  _If you are unable to get SSDTTime work    I’ve already included the rename patches in config.plist but they all set to disabled, just enable the one that’s right for you._ [try this rename method instead.](https://hackintosher.com/guides/ae_not_found-dealing-appleacpiec-catalina-hackintosh/#rename)   

### Configuring Clover config.plist for Install
* Navigate to `/Volumes/EFI/EFI/CLOVER/` 
* Right-click config.plist
* Select Open With Clover Configurator

**Step 6.1: Configuring ig platform id**
For graphics to work properly we need to manually tell macOS which way graphics is run by setting a property value toAAPL,ig-platform-id

AAPL,ig-platform-id can be found by Selecting Devices on the left-side column of Clover Configurator > Selecting the Properties tab > Clicking PciRoot(0x0)/Pci(0x2,0x0) > Double clicking Properties Value

* The Property Value is determined by the generation of Intel CPU and whether your Display/PC Monitorcable is connected to integrated graphics (iGPU) or a dedicated graphics card (dGPU): 
	* Coffee Lake Intel UHD Graphics 630
		* iGPU:
			* AAPL,ig-platform-id: 07009B3E
		* dGPU:
			* AAPL,ig-platform-id: 0300923E
* Save config.plist
**Step 6.2: Setting a proper SMBIOS**
> This allows the computer to display the correct model in “About this Mac.” The default config.plist is configured for a 8th or 9th Gen Intel CPU. We will set this to the desired model in the post install steps below.  
**Step 6.3 Extra Boot flags**
Certain setups require extras boot flags only needed for Z390 motherboards and AMD Navi graphics cards.
* Click Boot
* Click the “+” near the button of Arguments box
	* For Z390 Motherboard add: slide=0
	* AMD Navi RX 5xxx XT graphics add: agdpmod=pikera
* Save config.plist

### Bios Setup
Change the following settings:
* Virtualization : **Enabled**
* VT-d : **Disabled**
* XHCI Hand-Off : **Enabled**
* Legacy USB Support: **Auto/Enabled**
* IO SerialPort : **Disabled**
* Network Stack : **Disabled**
* XMP Profile : **Auto / Profile 1/Enabled**
* **UEFI Booting** set to **Enabled** and set **Priority** over Legacy
* Secure Boot : **Disabled**
* Fast Boot**: Disabled**
* OS Type**:** **Other OS**
* Wake on LAN**: Disabled**
* **Dedicated Graphics + Integrated graphics card:**
	* Integrated Graphics : **Enabled**
	* Primary Display Graphics: **PEG/PCIe Slot 1**
	* Initial Display Output : **PCIe 1 Slot**
	* DVMT Pre-Allocated : **128M or higher**

### Install macOS
* Boot to the USB we just configured
* You should now be in the Clover Menu. Use the arrow keys to verify Boot macOS Install from Install macOS Catalina is selected
* PressEnter
* **Configure Boot Drive**
	* Press Continue when the installer appears
	* Select your language
	* Select Disk Utility from the install menu
		* Select Show All Devices from the drop down menu by pressing the View button at the top left top left corner of the Disk Utility window. (Note:  [NVME drive not showing?](http://hackintosher.com/blog/get-nvme-m-2-ssds-show-high-sierra-hackintosh-install/) )
	* Select the disk you will be installing macOS and either select Partition to add space for macOS or Erase if you want to start clean
	* If you get the Apple File System Space Sharing popup select the Always partition checkbox and click Partition
	* Set the following settings:
> Name:  _Anything_  
> Format: Mac OS Extended (Journaled)  
> Scheme: GUID Partition Map  
> Click Erase  
> Click Done when finished
	* Quit Disk Utility after successfully reformatting or partitioning the drive for Catalina.
* **Install macOS**
	* Select Install macOS from the main menu
	* Click Continue
	* Click Agree for the Software Terms License Agreement
	* Click Agree second agreement prompt
	* Select the Drive macOS will be installed on:
	* Click Install and wait


### Post Install 
* **Complete Install**
	* There will be an automatic restart after the last step above is completed. When that happens make sure you boot back into the Clover Boot Manager to continue to with the install.
> If the first part of the install was successful there will be a second boot option in the Clover menu.  
* Select Boot macOS Install from “Hackintosh”
* _The installer will load up and you’ll see an apple logo and loading bar  briefly before an automatic restart happens:_
* Select Boot macOS from “Hackintosh”and the Catalina will begin booting for the first time
* Select Language and click Continue
* Select Keyboard and click Continue
* Click Continue for Data & Privacy
* If prompted select My computer does not connect to the Internet and click Continue
* Select Don’t transfer any information now
* (Option) Sign into an Apple ID or click Set Up Later at the top
* Click Agree to the Terms and Conditions
* Fill out Computer Account macOS login profile and click Continue
* (Optional) ChooseCustomize Settings at Express Set Up if you don’t want to be monitored through Location and Siri.
* Choose Your Look and click Continue

> _Welcome to macOS Catalina!_  

* **Move the EFI Partition**
	* Open  Clover Configurator
	* Mount the EFI of the USB Flash Drive
	* Press Open EFI or navigate to the EFI location of the flash drive in Finder
	* Copy the EFI Folder onto your desktop
	* Open Finder and Eject All the Flash Drive
	* Using Clover Configurator Mount the EFI of the drive disk you just installed Mac OS on
	* Press Open EFI or navigate to the EFI location of the drive in Finder
	* Delete the mostly empty EFI Folder located on the mounted drive
	* Paste or Move the EFI  from your Desktop to the EFI partition of the drive `/Volumes/EFI/` the existing EFI on the disk
* **SMBIOS Setup**
	* Serial Number
		* **iMac 19.1:** JV3Q, JV3P, JV3N and JV40
		* **Example:** C02Y9xxxJV3Q
	* Board Serial Number
		* **iMac 19.1:** LNV9, KDP0
		* **Example:** C02908xxxxxLNV9xx
	* Board ID
		* **iMac 19.1:** Mac-AA95B1DDAB278B95
	* EFI Version
		* 220.250.368.0.0
Use the lookup and generate buttons as needed to ensure your serial numbers are not being used currently for another system. If this happens you will not be able to any of the iCloud functions
* **Automatic Boot**
	* In the Boot Section:
		* Enter the name of boot volume in “Default Boot Volume”
			* _the name needs to be exact to automatically boot_
			* _note: using ‘LastBootedVolume’ did not work for me_
		* Set the timeout to 0
		* You can also select a logo to display when booting in the Custom Logo field
			* _I prefer ‘Alternate’ which is a black screen with a white logo._
* **AirDrop**
	* For this to work you will need to have SMBIOS configured and be signed into iCloud. The devices need to be on the same account and have bluetooth enabled.
	* The Hackintosh will need a wireless network card for a Mac. The option that was cheap was also one that many people have had success with. 
		* _Padarsey BCM94360CS2_
	* In most cases you will need an adapter card that will plug into your mother board and hold the NIC. The M.2 key E on my board required this adapter:
		* _BCM94360CS2_BCM943224PCIEBT2 Card To NGFF(M.2) Key A_E Adapter_
	* Once the new NIC is installed it should “Just Work”
* **Finishing Touches**
	* Once you are happy with the system, you may want to reduce the number of boot flags, specifically verbose (-v) output. I found that I only need 4:
```
keepsyms=1
dart=0
darkwake=0
slide=0 
```

### Conclusion
Creating a Hackintosh is a complex and time consuming process. It took me several attempts to get it running smoothly. Be prepared to do a lot of research and spend many hours working on this. My last words of advise would be to backup regularly and always before updating. 
