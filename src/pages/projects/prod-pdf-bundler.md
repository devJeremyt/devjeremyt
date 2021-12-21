---
title: "PDF Bundler"
category: "projects"
date: "2020-04-14"
tags: "Java, Desktop, PDF"
technologies: "Java, JavaFX, PDFBox"
image: ../../images/pdfbundler.png
---


## The Purpose
There is a product line that requires drawings for every fabricated piece of metal. For custom structures, the engineer that created the final structure would place all the drawings into one job folder. However for standard products, someone would have to manually print the drawings for each component. The purpose of this software is to remove the manual process of pulling drawings based off a production report.

## The Application
This application has evolved some from the intial implementation, specifically from being able to process one structural job at a time to a whole days worth of production drawings all at once. The production system provides a csv of all the sales orders and the break down of components per sales order. The software is an executable jar file that looks through the directory tree where it is placed for PDF files.

The user provides the csv containing the sales order numbers and parts per sales order into the software. The software scans the directory it is in and the subdirectories for PDF file names that match the production parts names from the file. It then creates individual PDFs for each sales order and includes all the found production drawings.

## The Result
The reduction of manually processing production reports to print all of the drawings required for a day worth of production has saved hours per day of labor required to manually compile the files to be printed.