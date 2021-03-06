//inserting data

use studentsdb;
db.users.insertMany([
    {
        userid:1,
        name:"Krishna",
        email:"krishna@gmail.com",
        mentorid:1
    },
     {
        userid:2,
        name:"Kavi",
        email:"kavi@gmail.com",
        mentorid:2
    },
     {
        userid:3,
        name:"Princy",
        email:"princy@gmail.com",
        mentorid:3
    },
     {
        userid:4,
        name:"Gowtham",
        email:"gowtham@gmail.com",
        mentorid:1
    },
     {
        userid:5,
        name:"Dev",
        email:"dev@gmail.com",
        mentorid:2
    }

    ])
/*.................................................................................................................................................*/
   /*codekata*/

db.codekata.insertMany([
    {
        userid:1,
        problems:10
    },
     {
        userid:2,
        problems:40
    },
     {
        userid:3,
        problems:20
    },
     {
        userid:4,
        problems:50
    },
     {
        userid:5,
        problems:70
    }
    ])

 /*....................................................................................................................................................*/
/*topics*/

db.topics.insertMany([
    {
        topicid:1,
        topic:"html",
        topic_date:new Date("2020-10-04")
    },
     {
         topicid:2,
        topic:"css",
        topic_date:new Date("2020-10-10")
    },
     {
         topicid:3,
        topic:"Javascript",
        topic_date:new Date("2020-10-15")
    },
     {
         topicid:4,
        topic:"React",
        topic_date:new Date("2020-10-20")
    },
     {
         topicid:5,
        topic:"NodeJs",
        topic_date:new Date("2020-10-25")
    }
    ])

/*..............................................................................................................................................................*/
/*tasks*/

db.tasks.insertMany([
    {
        taskid:1,
        topicid:1,
        userid:1,
        task:"html task",
        due_date:new Date("2020-10-04"),
        submitted:true
    },
    {
        taskid:2,
        topicid:2,
        userid:2,
        task:"css task",
        due_date:new Date("2020-10-10"),
        submitted:true
    },
     {
        taskid:3,
        topicid:3,
        userid:3,
        task:"Javascript task",
        due_date:new Date("2020-10-15"),
        submitted:false
    },
      {
        taskid:4,
        topicid:4,
        userid:4,
        task:"React task",
        due_date:new Date("2020-10-20"),
        submitted:false
    },
     {
        taskid:5,
        topicid:5,
        userid:5,
        task:"Node task",
        due_date:new Date("2020-10-25"),
        submitted:false
    }
    ])
/*....................................................................................................................................................*/
/*attendance*/

db.attendance.insertMany([
    {
        userid:1,
        topicid:1,
        attended:true
    },
     {
        userid:2,
        topicid:2,
        attended:true
    },
     {
        userid:3,
        topicid:3,
        attended:false
    },
    {
        userid:4,
        topicid:4,
        attended:false
    },
    {
        userid:5,
        topicid:5,
        attended:true
    }

    ])

 /*...................................................................................................................................................*/
/*mentors*/

db.mentors.insertMany([
    {
        mentorid:1,
        mentorname:"Ragav",
        mentor_email:"ragav@gmail.com"
    },
      {
        mentorid:2,
        mentorname:"Robin",
        mentor_email:"robin@gmail.com"
    },
      {
        mentorid:3,
        mentorname:"Rene",
        mentor_email:"rene@gmail.com"
    },
      {
        mentorid:4,
        mentorname:"Megha",
        mentor_email:"megha@gmail.com"
    },
      {
        mentorid:5,
        mentorname:"Sathish",
        mentor_email:"sathish@gmail.com"
    }
    ])

 /*.................................................................................................................................................*/
/*company drives*/

db.companydrives.insertMany([
    {
        userid:1,
        drive_date:new Date("2020-10-10"),
        company:"Google"
    },
     {
        userid:1,
        drive_date:new Date("2020-10-15"),
        company:"Amazon"
    },
     {
        userid:2,
        drive_date:new Date("2020-10-20"),
        company:"Flipkart"
    },
     {
        userid:3,
        drive_date:new Date("2020-10-25"),
        company:"Zoho"
    },
     {
        userid:4,
        drive_date:new Date("2020-10-27"),
        company:"Amazon"
    }
    ])