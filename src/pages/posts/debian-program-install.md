---
title: "Installing program from binaries on Debian Linux"
category: "posts"
date: "2020-04-30"
---

Althought there are a few different ways to install software on your Debian system, this method allows you to place the files for the program wherever you'd like, and also you can name it whatever you'd like too.

For this example I'm going to install Firefox. More than likely your installation of Debian came with Firefox installed, but the default used is the Extended Support Release(Firefox ESR), which doesn't have all the lastest features.

First things first, you need to download the software. For Firefox the link is [https://www.mozilla.org/en-US/firefox/new/](https://www.mozilla.org/en-US/firefox/new/). The download will be a .tar.bz2 compressed file. We need to extract it to the location it will be executed from. If you are wanting it to be available system wide(other users have it installed too), which is the preferred method, the standard place to install is in the /opt. The /opt folder is teh location for system wide programs that are not a part of the default installation. If you only want the current user to be able to use it, then extract to /home/%username% with username being the name of the user account that the installation will available to.

Next you'll need to make a .desktop file for the application launcher to show in your list of applications. This file will be the same whether you are making it system wide or for a single user, it will just be located in a different directoy. For a system wide installation it should be placed in /usr/share/applications, for single user it should be placed in /home/%username%/.local/share/applications. If you do not see the .local directory it is because you do not have "Show Hidden Files" check in your file explorer. Create the file "firefox.desktop" in the directory and copy the content below.

```
   [Desktop Entry]
    Name=Firefox
    Comment=Web Browser
    Exec=/opt/firefox/firefox
    Terminal=false
    Type=Application
    Icon=/opt/firefox/browser/chrome/icons/default/default128.png
    Categories=Network;WebBrowser;
    MimeType=text/html;text/xml;application/xhtml+xml;application/xml;application/vnd.mozilla.xul+xml;application/rss+xml;application/rdf+xml;image/gif;image/jpeg;image/png;x-scheme-handler/http;x-scheme-handler/https;
    StartupNotify=true
```
Once you save the file you can search for the application in the application list.
