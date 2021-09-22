---
title: "Installation Packet"
category: "projects"
date: "2020-04-17"
tags: "Java, Desktop, PDF"
technologies: "Java, JavaFX, PDFBox"
image: ../../images/InstallationPacket.png
---

## Purpose
This was a tool used to eliminate an administrative task of combining pdf documents. At the company the application was designed for, when an order was created a pdf packet of installation manuals made of individual pdf files based on the components of the order was compiled into one pdf document. This way a paper copy could be easily printed to ship with the order, and also it would be quickly emailable.

## The Application

This is a JavaFX program that utilizes Apache's PDFBox library to bundle pdfs. To use it, the user starts by clicking select a CSV, which opens a file chooser for choosing a csv that holds a list of components for an order. Next there is a field for entering a sales order number, which is ultimately there for being a prefix for the file that is created. Then they are 3 potential checkboxes that add a handful of generic packets at the beginning and/or end of the resulting pdf. Finally the user clicks the button to create the installation manual.

When the create button is clicked the program creates a hashmap of file names and file locations for the provided component list to be compared against for matches. The file containing file names and file locations acts as database for this application that is updated through other means. It then compiles a list of component name matches and merges the pdfs into one. The user is then prompted that the file is created and is provided a list of components who did not have a match.

## Results

This application was created to ease the task of a few people that were manually compiling and merging these pdfs every day. The implementation of using it saved the company about 3 man hours a day. 