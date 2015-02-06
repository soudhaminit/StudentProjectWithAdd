var express=require('express');
var app=express();

app.use(express.static(__dirname,'/'));

app.get('/studentList',function(req,res){
    res.json(studentList);
});

app.get('/studentDetails/:studNumber',function(req,res){
    var data={};
    var studNumber=parseInt(req.params.studNumber);
    for(var i=0,len=studentList.length;i<=len;i++){
        var studentNumber = parseInt(studentList[i].studentNumber);
        if(studNumber === studentNumber){
            data=studentList[i];
            break;
        }
    }
    res.json(data);
});

app.delete('/deleteStudent/:studNumber',function(req,res){
    var data={status:false};
    var studNumber=parseInt(req.params.studNumber);
    for(var i=0,len=studentList.length;i<=len;i++){
        var studentNumber = parseInt(studentList[i].studentNumber);
        if(studNumber === studentNumber){
            studentList.splice(i,1);
            data={status:true};
            break;
        }
    }
    res.json(data);
});

/*app.post('/post', function (req, res) {
    /* Handling the AngularJS post request
    console.log(req.body);
    res.setHeader('Content-Type', 'application/json');
    /*response has to be in the form of a JSON
    req.body.serverMessage = "NodeJS replying to angular"
        /*adding a new field to send it to the angular Client 
    res.end(JSON.stringify(req.body));*/
    
app.post('/createStudent',function(req,res){
    
     var data={status:false};
     var studentData=req.body;
   
        if(studentList.push(studentData)){
            data={status:true}; 
        }
    res.json(data);

});

app.listen(8080);
console.log('server is listening to port 8080');


var studentList=[
{
   // "_id" : ObjectId("53757a6c156695a10bcefcda"),
    "studentNumber" : "123832",
    "gender" : "MALE",
    "birthDate" : ISODate("2005-06-15T00:00:00.000+08:00"),
    "disability" : false,
    "firstName" : "Hock",
    "lastName" : "Chahine",
    "email" : "hock.chahine@river-district.com"
},
{
   // "_id" : ObjectId("53757a6c156695a10bcefcdb"),
    "studentNumber" : "717164",
    "preferredName" : "Christopher",
    "gender" : "MALE",
    "birthDate" : ISODate("2005-05-27T00:00:00.000+08:00"),
    "disability" : false,
    "firstName" : "Alborough",
    "lastName" : "Bocasan",
    "email" : "alborough.bocasan@river-district.com"
},
{
    //"_id" : ObjectId("53757a6c156695a10bcefcdc"),
    "studentNumber" : "286452",
    "preferredName" : "Aoife",
    "gender" : "FEMALE",
    "birthDate" : ISODate("2006-02-13T00:00:00.000+08:00"),
    "disability" : false,
    "firstName" : "Louise",
    "lastName" : "Gladdish-Fitzgerald",
    "email" : "louise.gladdish-fitzgerald@river-district.com"
},
{
    //"_id" : ObjectId("53757a6c156695a10bcefcdd"),
    "studentNumber" : "673361",
    "preferredName" : "Chantelle",
    "gender" : "FEMALE",
    "birthDate" : ISODate("2005-08-02T00:00:00.000+08:00"),
    "disability" : false, 
    "firstName" : "Marilu",
    "lastName" : "Mercado",
    "email" : "marilu.mercado@river-district.com"
}
];

function ISODate(d1){
    var date = new Date(d1);
    return date+'';    
}

