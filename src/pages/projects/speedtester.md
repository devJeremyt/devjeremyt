---
title: "Speed Tester"
category: "projects"
date: "2021-01-01"
tags: "Node, Speed, CLI"
technologies: "NodeJS"
image: ../../images/SpeedTest.PNG
---

## Overview
This is a very small CLI app for testing internet speed. There is actually a simple GUI with just a button to get it started, but I never executed it that way. The GUI and CLI don't display anything interesting, they are just to get the application running. The application is just used to log speed tests every 30 minutes. This isn't a very impressive app, I have just included it to demostrate that I use technologies know to investigate or solve problems in my own way. It's [Speed-Tester](https://github.com/devJeremyt/Speed-Tester) on my github.

## Purpose
At one point my only source of internet was a mobile router that utilized cellular data. This was ok sometimes, but at other times it was unbearable to try to load anything. I had routinely ran speed tests from the google search results page, and on [Ookla's website](https://www.speedtest.net/), the results for download speeds would range from 25Mbps to 0.5Mbps. I knew the reasoning for this was because of tower conjestion, but thought about researching for the exact times that the speeds were the worst. So I decided to make a small app that could run the speed test for me and log the results for me to review after enough data had been collected.

## The Application
The application didn't take very long to write, it is only 34 lines. It utilizes the fast-speed-test api that was created by Netflix. Their api appears to work by measuring the speed at which a specified number of videos are downloaded. In my application I import their npm package and construct the FastSpeedTest object with my own parameters, then run the object's getSpeed function which returns a promise. I then run a function to write out the current date, time, and the speed test result to a new line on a log file.

## Results
My findings from this were pretty straight forward and what I expected. I imported my results into Excel delimiting by the characters I had logged. I was able to extrapolate that the fastest speed times were early in the morning between 1AM and 8AM. The slowest times were in the evenings between 5PM and 12PM.