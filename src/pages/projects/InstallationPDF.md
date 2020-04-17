---
title: "Installation Packet"
category: "projects"
date: "2020-04-17"
tags: "Java, Desktop, PDF"
technologies: "Java, JavaFX, PDFBox"
image: ../../images/InstallationPacket.png
---

This is an application written as an executable jar file. The view was built using JavaFX, with SceneBuilder as the engine to create the xml layout. It's purpose is to eliminate the need for someone to manually merge installation manual pdfs for specific items on every order.

Before the application is ran an export of shippable components are created in a specific folder. The user can either manually select that file by clicking on the "Select a CSV" button, or by directly entering the order number in the "Sales Order Number" field. After that there are 3 options for adding static pdfs to the bundle. Finally, selecting "Create Installation Packet" merges all the required pdfs into a single file and saves out to a specific location.