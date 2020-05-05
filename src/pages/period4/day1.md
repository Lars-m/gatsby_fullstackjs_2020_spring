---
period: "Flow-4"
title: "GraphQL Server Side 1"
date: "29-04-2020"
pageintro: |
  An introduction to GraphQL
  Setting up a simple GraphQL backend with an Express Server and a Mongo Database
---

## Vigtig info om brug af linkedin.com/learning

Mange af jer har haft problemer med at komme på: https://www.linkedin.com/learning

Når I trykker på link til video herunder, følg så følgende vejledning

- sign in --> brug jeres cphbusiness mail
- Your organization requires you to sign in with Single Sign-On --> sign in igen, nu via EFIF

I burde nu være på, og kunne se videoen

**Hvis Ikke** Kontakt: helpdesk@cphbusiness.dk

_Jeg har skrevet til dem og bedt om at det bliver fixet for hele klassen (skolen) men melding er at det skal løses explicit pr. student._

---

### Before this lesson you should:

- :tv: Watch this first! [My intro to this period](https://youtu.be/wEcz2PdfEpE)
- :book: First part of this tutorial [How to GraphQL (42 min.)](https://www.howtographql.com/) (Skip the Advanced part, we are doing this as in the tutorial below)
- :tv: Watch and CODE ALONG this GREAT [tutorial (90 min)](https://www.linkedin.com/learning/graphql-essential-training/server-setup-with-es6-support?u=57077785) (It will give you all most everything you need to design the miniproject GraphQL backend). **IMPORTANT!!** Read the section below, "Hints for the Lynda-tutorial", before you start

<!--BEGIN readings ##-->

<!--END readings ##-->

<!--BEGIN guides ##-->

<!--END guides ##-->

## Exercises

<!--BEGIN lectures ##-->

- [Complete the video tutorial above](#)
- [My Solution updated to 2020, BUT DO CODE ALONG, if you want to learn](https://github.com/fullStackJavaScript-dat/lynda-video-mongodb-only)

<!--END lectures ##-->

<!--BEGIN exercises ##-->

<!--END exercises ##-->

## Videos recorded in the class

[Video of this lecture (thanks to Simon)](https://www.youtube.com/watch?v=SxN6Y0__Wpc&feature=youtu.be)

## Slides

<!--BEGIN slides ##-->

[GraphQL day1](https://docs.google.com/presentation/d/1xQUl6ftiCZGmqtGOvBQ6m1jKg3zjmLHqI370RjbeYAI/edit?usp=sharing)

<!--END slides ##-->

## Hints for the Lynda-tutorial (read this before you start)

- The tutorial uses two databases, to really illustrate the power of GraphQL. SKIP the part related to relational databases (SQL) and anything related to the _Aliens_ model (chapter 3_3), and focus only on the parts related to **MongoDB**
- The tutorial includes a section related to, how you set up a local instance of MongoDB (chap 3 part 1). I suggest you stick to your Cloud Based MongoDB Atlas Account and create a new database, up there, for this exercise.
- You must still install mongoose in chap 3 part 1 (npm install mongoose), see my video for what it is
- Also skip the part (4.1) that install Robo 3T, since Atlas provides a fine enough GUI
- It seems like the authour haven't noticed that mongoose now support promises. So when you get to the "mongoose-part" instead of doing something like this:

```javascript
return new Promise((resolve, object) => {
  newFriend.save((err) => {
    if (err) reject(err);
    else resolve(newFriend);
  });
});
```

you can just do this (but please observe that the example above, nicely illustrates how you can convert a callback-based design into a promise-based):

```javascript
return newFriend.save();
```

**When Connecting to your Atlas DB** In chapter 3_1 use this code to connect, instead of the (outdated) suggestion in the video

```
import mongoose from 'mongoose'
const CONNECTION = "CONNECTION STRING OBTAINED FROM YOU ATLAS ACCOUNT"
mongoose.connect(CONNECTION,{useUnifiedTopology:true, useNewURLParser:true})

....
```
