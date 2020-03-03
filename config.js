module.exports = {
  title1: `FullStack JavaScript`,
  title2: `FullStack JavaScript - Spring 2020`,
  titleShort: `FullStack JS`,
  idLocalStorage: "fullstackspring2020",
  //classes: [{ value: 'a', label: 'A-class', backgroundColor: "#295683" },
  classes: [{ value: 'a', label: 'A-class', backgroundColor: "#5e5382" },
    //   { value: 'b', label: 'B-class',backgroundColor:"#700909" },
    //  { value: 'c', label: 'Bornholm',backgroundColor: "#cc6600" }
  ],
  showWeekInfoForEachDayInWeek: false,
  timeEdit: "https://cloud.timeedit.net/cphbusiness/web/student",
  topMenu: [
    {
      title: "StudyPoints",
      URL: "https://studypoints.info"
    },
    // {
    //   title: "Schedule",
    //   route: "/full-schedule"
    // },
    // {
    //   title:"Goals",
    //   route: "/all-goals"
    // },
    // {
    //   title:"Repos",
    //   route: "/github-links"
    // },
    {
      title: "Exercises",
      route: "/all-exercises"
    },
    {
      title: "Read",
      route: "/all-readings"
    },
    {
      title: "Links",
      //These are the only legal values, Update this if making changes
      // "guidelines","readings","exercises","admin","examprep","studypointex","ca","slides",
      include: ["goals", "readings","guidelines", "lectures", "exercises", "admin", "slides"],
      route: "/links"
    },
    {
      title: "About",
      route: "/"
    },
  ]
}