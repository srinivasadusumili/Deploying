var express=require("express");
var app=express();
app.listen(process.env.PORT || 1345);
app.get("/",function(req,res){
	res.sendFile(__dirname+"/"+"EmployeeTable1.html");
});
var emp=[{
	empnumber: "1",
	employeename : "Chandrika",
	phone : "7737736565",
	address: "newyork",
	dob : "10-06-1995",
    maritalstatus : "Un-married"
	},{
	empnumber: "2",
	employeename : "Ravi",
	phone : "8765454545",
	address: "pune",
	dob : "15-08-95",
    maritalstatus : "Un-married"
	},{
	empnumber: "3",
	employeename : "Sidhu",
	phone : "8976533534",
	address: "Narsapur",
	dob : "27-08-95",
    maritalstatus : "Un-married"
	}];

app.get("/empdetails",function(req,res){
	res.send(emp);
	console.log('hiiii');
	console.log('hARI');
});
