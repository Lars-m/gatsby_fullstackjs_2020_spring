---
period: "Flow-3"
title: "Android/IOS-Development with React native"
date: "15-04-2020"
pageintro: |
  An introduction to some of the alternatives to "cross platform" App Development
  An introduction to React Native and Expo
---

<!--
![Under construction](../../images/underconstruction.jpg)
-->

### Before this lesson you should:

- [:tv: WATCH THIS FIRST - My intro to this period and the strategy I have chosen (25 min.)](https://youtu.be/dVPD1fBDUAM)
- [:tv: Choosing the best mobile app framework (12 min.)](https://www.youtube.com/watch?v=4m7msadL5iA)
- [:tv: React Native Tutorial (see guidelines below for what to watch)](https://www.youtube.com/watch?v=qSRrxpdMpVc)

#### What you SHOULD watch, what you CAN skip, and what you SHOULD skip in the video tutorial

| Location                                                | Description                                                                                  |
| ------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| [00:00:00](https://www.youtube.com/watch?v=qSRrxpdMpVc) | You Should all watch this. It provides "all" required knowledge about how React native Works |
| [00:46:57](https://youtu.be/qSRrxpdMpVc?t=4225)         | Yellow/Red How to install an Emulator                                                        |
| [00:58:51](https://youtu.be/qSRrxpdMpVc?t=3531)         | SKIP this Intro to the FULL course                                                           |
| [01:16:48](https://youtu.be/qSRrxpdMpVc?t=4608)         | The project which is exercise two in todays exercises                                        |
| [03:10:14](https://youtu.be/qSRrxpdMpVc?t=11416)        | (YELLOW)/RED Debugging React Native Apps                                                     |
| [03:41:29](https://youtu.be/qSRrxpdMpVc?t=13289)        | ONLY as in ONLY if you really like to go deeper into React Native                            |

<!--BEGIN readings ##-->

<!--END readings ##-->

<!--BEGIN guides ##-->

<!--END guides ##-->

## Exercises

<!--BEGIN lectures ##-->

[Exercises - React Native Day-1](https://docs.google.com/document/d/1OW3sJH43y1LXiLEUrSRfV9xU-VSGfWj-X6N8vu_J31s/edit?usp=sharing)

<!--END lectures ##-->

<!--BEGIN exercises ##-->

<!--END exercises ##-->

## Videos recorded in the class

[Dagens lektion, optaget af Simon](https://youtu.be/rVUoI850lVU)

#### Chatten er vist herunder med nogle løsningsforslag hvis der er nogen der har problemer med at få setuppet til at virke

Christoffersen : Man skal kun installere appen expo også kan man scanne QR koden. (iOS)

08:56:20 From Asger Koch Bjarup : ^

08:57:21 From Mikkel Kornval Christoffersen : Færre problemer end hvad jeg kunne se folk havde med windows på slack ;)

08:58:40 From Jacob Folke Hildebrandt : Idd, tog kun den tid det tog at downloade appen :D

08:59:43 From Mikkel Kornval Christoffersen : #triggered :D

09:47:52 From Camilla Staunstrup : :D

09:48:35 From Simon Asholt Norup : Jeg kunne ikke initialisere et expo-projekt uden manuelt at angive en template. Hvis der er andre, der
har samme problem, så brug denne command i stedet:

expo init myFirstExpoProject --template blank

09:48:49 From Simon Asholt Norup : det virker vist, tror jeg

09:49:01 From Asger Koch Bjarup : Ellers skal man bare vælge den første option

09:49:04 From Asger Koch Bjarup : hvilket er blank

09:49:40 From Simon Asholt Norup : Den gav mig ikke nogen options -- den bad mig bare om at gøre det manuelt... ;)

09:51:24 From Malte : få hvad over

09:51:40 From Asger Koch Bjarup : Få appen over på telefonen

09:52:02 From Malte : har den der expo init på telefonen

09:52:25 From Malte : men ikke dette endnu https://github.com/fullStackJavaScript-dat/reactnative-many-demos

09:52:42 From Asger Koch Bjarup : Tror bare, det skal være templaten

09:52:50 From Asger Koch Bjarup : Ligesom Lars har på sin skærm

09:52:59 From Rúni Vedel Niclasen : ja, du skal bare have et nyt projekt

09:53:15 From Obaydah Elhaj-Moussa : skal man vælge blank eller minimal?

09:53:20 From Asger Koch Bjarup : blank

09:53:25 From Asger Koch Bjarup : den første option

09:53:32 From Obaydah Elhaj-Moussa : thank you

09:56:39 From Malte : jeg skal ryste telefonen og trykke reload før den den updater

09:56:54 From Malte : hvordan får man den til at gøre det automatisk

09:58:22 From Malte : man skal "enable fast refresh" før at det virker

10:06:26 From Ahmad Talha Noory : Malte, skal man være signed in, for at kunne refresh?

10:06:47 From Ahmad Talha Noory : altså aktivere "enable fast refresh"

10:09:04 From Malte : Signed in this hvad?

10:09:19 From Malte : Singed in i hvad?

10:09:42 From Malte : Hvad var det "det har i allerede gjort" man skulle installere? Han sagde "Det har i allerede gjort, men jeg så ikke
hvad det var"

10:10:29 From Simone : at vi skulle installere image picker

10:11:45 From Malte : fandt det: expo install expo-image-picker

10:13:25 From Malte : Hvor fandt han al det der kode henne? Hvor kopierede han det fra

10:13:45 From Mikkel Kornval Christoffersen : https://snack.expo.io/?platform=android&name=Image%20picker&sdkVersion=37.0.0&dependencies=expo-image-picker&sourceUrl=https%3A%2F%2Fdocs.expo.io%2Fstatic%2Fexamples%2Fv37.0.0%2Ftutorial%2Fimage-picker-log.js

10:14:50 From Malte : tak :)

10:16:21 From Malte : https://docs.google.com/document/d/1s-Uczqyj0AQG1Kc2pD43M-xr9en3DvPUxRv0rX27u0I/edit

10:16:24 From Malte : Snippet filen

10:23:30 From Malte : var det "expo install expo-sharing"?

10:23:40 From Asger Koch Bjarup : yas

10:30:44 From Malte : Not logged in. Use function(str) {

if (arguments.length === 0) return this.\_name;

this.\_name = str;

return this;

} login -u username -p password to log in.

10:35:29 From Malte : har nu lavet en bruger på expo.io

10:35:40 From Malte : hvordan logger man så ind på localhost så man kan publish?

10:35:50 From Obaydah Elhaj-Moussa : expo signin -u brugernavn -p kode

10:36:53 From Malte : bare i git bash?

10:37:01 From Obaydah Elhaj-Moussa : ja

10:38:01 From Rúni Vedel Niclasen : virus

10:38:05 From Malte : haha fuck jeg ved ikke hvad mit password er. jeg fik bare google password manager til at ordne det

10:38:35 From Obaydah Elhaj-Moussa : hahaha

10:38:42 From Hamad : haha nejnej bare min fejlbesked xd

10:38:49 From Mikkel Kornval Christoffersen : Bare installer xcode fra appstore

11:04:18 From Ahmad Talha Noory : fixet det ved at reinstall appen

11:04:54 From Simon Asholt Norup : Så lykkedes det også her.

11:05:07 From Simon Asholt Norup : Genstart alt

11:05:16 From Camilla Staunstrup : yay :D

11:20:47 From Renz de Chavez : hvor under documentation fandt han det med prop?

11:20:51 From Renz de Chavez : props\*

11:21:34 From Rúni Vedel Niclasen : han linkede til det i props.js

11:24:29 From Simon Asholt Norup : https://reactnative.dev/docs/intro-react#state

11:41:36 From Ahmad Talha

<!--BEGIN slides ##-->

<!--END slides ##-->
