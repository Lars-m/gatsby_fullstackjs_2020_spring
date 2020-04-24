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

Når I trykker på linket herunder, følg så følgende vejledning

- sign in --> brug jeres cphbusiness mail
- Your organization requires you to sign in with Single Sign-On --> sign in igen, nu via EFIF

I burde nu være på, og kunne se videoen

**Hvis Ikke** Kontakt: helpdesk@cphbusiness.dk

_Jeg har skrevet til dem og bedt om at det bliver fixet for hele klassen (skolen) men hvis det ikke virker, så skriv selv, for at speede processen op._

---

### Before this lesson you should:

- :book: First part of this tutorial [How to GraphQL (42 min.)](https://www.howtographql.com/) (Skip the Advanced part, we are doing this as in the tutorial below)
- :tv: Watch and CODE ALONG this GREAT [tutorial (90 min)](https://www.linkedin.com/learning/graphql-essential-training/server-setup-with-es6-support?u=57077785) (It will give you all most everything you need to design the miniproject GraphQL backend)

#### Hints for the Lynda-tutorial (read this before you start)

- The tutorial uses two databases, to really illustrate the power of GraphQL. Skip the part related to relational databases (SQL) and anything related to the _Aliens_ model, and focus only on the parts related to **MongoDB**
- The tutorial includes a section related to, how you set up a local instance of MongoDB. I suggest you stick to your Cloud Based MongoDB Atlas Account and create a new database, up there, for this exercise.
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

<!--BEGIN readings ##-->

<!--END readings ##-->

<!--BEGIN guides ##-->

<!--END guides ##-->

## Exercises

<!--BEGIN lectures ##-->

[Complete the video tutorial above](#)

<!--END lectures ##-->

<!--BEGIN exercises ##-->

<!--END exercises ##-->

## Videos recorded in the class

<!--BEGIN slides ##-->

<!--END slides ##-->
