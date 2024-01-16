// var express = require("express");
// var app =express();
// var mongoose = require("mongoose");
// var bodyParser=require("body-parser");
// var details;
// // mongoose.connect("mongodb://localhost:27017/entries", {useUnifiedTopology: true, useNewUrlParser: true});
// mongoose.connect("mongodb://localhost:27017/entries", { useUnifiedTopology: true, useNewUrlParser: true }, function(error) {
//   if (error) {
//     console.error("Error connecting to MongoDB:", error);
//   } else {
//     console.log("Connected to MongoDB");
//   }
// });


// // app.set("view engine","ejs");

// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());
// mongoose.set('useFindAndModify', false);
// const SendOtp = require('sendotp');
// const sendOtp = new SendOtp('This is a test run');


// var User = new mongoose.Schema({                                                            
//     username: String, 
//     phoneno: Number,
//     travelexp: Number,
//     telecomexp: Number,
//     totalexp:Number
// });


// var employee = mongoose.model("employee", User);                 

// module.exports = mongoose.model("User", User);

// app.get("/",function(req,res){
//     res.render("'Start.js'");                                       
// });

// app.post("/submit",function(req,res){                               
//     res.render("SubmitDetailsForm.js");
// });

// app.post("/",function(req,res){                                  
//     var empname = req.body.empname;
//     var empphone = req.body.empphone;
//     var typeofexp = req.body.typeofexp;
//     var amount = req.body.amount;
//     employee.find({phoneno : empphone},function(err,doc){        //using mobile number as primary key
//         var n = doc.length;
//         if(err)
//         {
//             console.log("error\n");
//             res.redirect("/");
//         }
//         else{                                                          //assigning flag variable with type of expense
            
//             var flag=0;
//             if(typeofexp === "Travel")
//                 flag=1;
//             else if(typeofexp === "Telecom")
//                 flag=2;
//             else
//                 flag=3;
//             if(doc[n-1]===undefined)                                     //if no such employee data is present then add the data 
//             {
//                 if(flag===1)
//                 {
//                     details = {username : empname, phoneno : empphone, travelexp : amount, telecomexp : 0, totalexp: amount};
//                     employee.create(details, function(err,doc1){
//                         if(err)
//                         {
//                             console.log("error\n");
//                             res.redirect("/");
//                         }
//                     });
//                 }
//                 else if(flag===2)
//                 {
//                     details = {username : empname, phoneno : empphone, travelexp : 0, telecomexp : amount,totalexp:amount};
//                     employee.create(details, function(err,doc1){
//                         if(err)
//                         {
//                             console.log("error\n");
//                             res.redirect("/");
//                         }
//                     });
//                 }
//                 else if(flag===3)
//                 {
//                     console.log("Such field does not exist\n");
//                 }
//                 res.redirect("/");
//             }
        
//             else if(doc[n-1]!==undefined)                         //if employee's expense is present then update those expenses to new value
//             {
//                 if(flag===1)
//                 {
//                     var x = doc[n-1].travelexp;
//                     var y = doc[n-1].totalexp;
//                     employee.update({phoneno:empphone},{$set: {travelexp:parseInt(amount)+parseInt(x),totalexp:parseInt(amount)+parseInt(y)}},function(err,doc1){
//                         if(err)
//                         {
//                             console.log("error\n");
//                             res.redirect("/");
//                         }
//                     });
//                 }
//                 else if(flag===2)
//                 {
//                     var x = doc[n-1].telecomexp;
//                     var y = doc[n-1].totalexp;
//                     employee.update({phoneno:empphone},{$set: {telecomexp:parseInt(amount)+parseInt(x),totalexp:parseInt(amount)+parseInt(y)}},function(err,doc){
//                         if(err)
//                         {
//                             console.log("error\n");
//                             res.redirect("/");
//                         }
//                     });
//                 }
//                 else if(flag===3)
//                 {
//                     console.log("Such field does not exist");
//                 }
//                 res.redirect("/");
//             }
//         }
  
//     });
// });

// app.get("/data", function(req, res){                             //for displaying data log of expense of each individual employee
//     employee.find({}, function(err, found){
//       if(found.length == 0)
//       {
//         console.log("No data in the data log");
//         res.send("no data found");
//       }
//       else{
//         res.render("data", {data:found.reverse()});
//       }
    
//     });
    
//   });

// app.listen(3000,function(){
//     console.log("Server Started");    
// });


var express = require("express");
var app = express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var details;
const path = require('path');

mongoose.connect("mongodb://localhost:27017/entries", { useUnifiedTopology: true, useNewUrlParser: true }, function (error) {
  if (error) {
    console.error("Error connecting to MongoDB:", error);
  } else {
    console.log("Connected to MongoDB");
  }
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
mongoose.set('useFindAndModify', false);

const SendOtp = require('sendotp');
const sendOtp = new SendOtp('This is a test run');

var User = new mongoose.Schema({
  username: String,
  phoneno: Number,
  travelexp: Number,
  telecomexp: Number,
  totalexp: Number
});

var employee = mongoose.model("employee", User);

module.exports = mongoose.model("User", User);

app.get("/", function (req, res) {
  res.sendFile(path.join('Start.js'));
});

app.post("/submit", function (req, res) {
  res.sendFile(path.join('SubmitDetailsForm.js'));
});

app.post("/", function (req, res) {
  var empname = req.body.empname;
  var empphone = req.body.empphone;
  var typeofexp = req.body.typeofexp;
  var amount = req.body.amount;
  employee.find({ phoneno: empphone }, function (err, doc) {
    var n = doc.length;
    if (err) {
      console.log("error\n");
      res.sendFile("Start.js");
    } else {
      var flag = 0;
      if (typeofexp === "Travel")
        flag = 1;
      else if (typeofexp === "Telecom")
        flag = 2;
      else
        flag = 3;
      if (doc[n - 1] === undefined) {
        if (flag === 1) {
          details = { username: empname, phoneno: empphone, travelexp: amount, telecomexp: 0, totalexp: amount };
          employee.create(details, function (err, doc1) {
            if (err) {
              console.log("error\n");
              res.sendFile(path.join('Start.js'));
            }
          });
        } else if (flag === 2) {
          details = { username: empname, phoneno: empphone, travelexp: 0, telecomexp: amount, totalexp: amount };
          employee.create(details, function (err, doc1) {
            if (err) {
              console.log("error\n");
              res.sendFile(path.join('Start.js'));
            }
          });
        } else if (flag === 3) {
          console.log("Such field does not exist\n");
        }
        res.sendFile(path.join('Start.js'));
      } else if (doc[n - 1] !== undefined) {
        if (flag === 1) {
          var x = doc[n - 1].travelexp;
          var y = doc[n - 1].totalexp;
          employee.update({ phoneno: empphone }, { $set: { travelexp: parseInt(amount) + parseInt(x), totalexp: parseInt(amount) + parseInt(y) } }, function (err, doc1) {
            if (err) {
              console.log("error\n");
              res.sendFile(path.join('Start.js'));
            }
          });
        } else if (flag === 2) {
          var x = doc[n - 1].telecomexp;
          var y = doc[n - 1].totalexp;
          employee.update({ phoneno: empphone }, { $set: { telecomexp: parseInt(amount) + parseInt(x), totalexp: parseInt(amount) + parseInt(y) } }, function (err, doc) {
            if (err) {
              console.log("error\n");
              res.sendFile(path.join('Start.js'));
            }
          });
        } else if (flag === 3) {
          console.log("Such field does not exist");
        }
        res.sendFile(path.join('Start.js'));
      }
    }
  });
});

app.get("/data", function (req, res) {
  employee.find({}, function (err, found) {
    if (found.length == 0) {
      console.log("No data in the data log");
      res.send("no data found");
    } else {
      res.sendFile(path.join('Data.js'));
    }
  });
});

app.listen(3000, function () {
  console.log("Server Started");
});
