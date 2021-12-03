//1.Find all the topics and tasks which are taught in the month of October
db.topics.aggregate([
 {
  $lookup: {
   from: "tasks",
   localField: "topicid",
   foreignField: "topicid",
   as: "taskinfo"
  }
 },
 {
  $project: {
   "taskinfo.submitted": 0,
   "taskinfo.userid": 0,
   "_id": 0,
   "taskinfo._id": 0
  }
 },
 {
  $match:{$and:[{topic_date:{$gt:new Date("2020-09-30")}},{topic_date:{$lt:new Date("2020-10-31")}}]}
        }

]).pretty();


//2.Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020
db.companydrives.find({ drive_date: { $lte: new Date("2020-10-31"), $gte: new Date("2020-10-15") } });

//3.Find all the company drives and students who are appeared for the placement

db.companydrives.aggregate([{
 $lookup: {
  from: "users", foreignField: "userid", localField: "userid",
  as:"userInfo"}
}, {
 $project: {
  "userInfo.name": 1,
  "drive_date": 1,
  "company": 1,
  "userInfo.email": 1,
  "_id":0
 }
 }
]).pretty()

//4.Find the number of problems solved by the user in codekata
db.codekata.aggregate([{ $lookup: {
  from: "users", foreignField: "userid", localField: "userid",
  as:"userInfo"}
}, {
 $project: {
  "userInfo.name": 1,
  "userInfo.email": 1,
  "problems": 1,
  "_id":0
 }
 }]).pretty()

//5.Find all the mentors with who has the mentee's count more than 1
db.users.aggregate([
   {$lookup: {
          from: "mentors",
          localField: "mentorid",
          foreignField: "mentorid",
          as: "mentorInfo"
        }},
 { $group: { _id: {mentorid:"$mentorInfo.mentorid",mentorname:"$mentorInfo.mentorname"}, mentee_count: { $count: {}}}},
   {$match:{mentee_count:{$gt:1}}}

   ]).pretty()
//6.Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020
db.attendance.aggregate([
    {$lookup: {
           from: "topics",
           localField: "topicid",
           foreignField: "topicid",
           as: "topics"
         }},
         {
             $lookup: {
                    from: "tasks",
                    localField: "topicid",
                    foreignField: "topicid",
                    as: "tasks"
                  }
         },
 { $match: { $and: [{ attended: false }, { "tasks.submitted": false }] } },
 {
  $match:{$and:[{"topics.topic_date":{$gt:new Date("2020-09-30")}},{"topics.topic_date":{$lt:new Date("2020-10-31")}}]}
        }
]).pretty()