// Load the http module to create an http server.
var http = require('http');

// Load the underscore module to use pluck, max and min functions
var _ = require('underscore');

// Configure our HTTP server to respond to all requests.
var server = http.createServer(function(request, response) {
    response.writeHead("200", {"Content-Type": "text/plain"});

    // stores first name, last name and age of students
    var students = [{first_name: "John", last_name: "Doe", age: 25}, 
                    {first_name: "Jane", last_name: "Snow", age: 21}, 
                    {first_name: "Harry", last_name: "Potter", age: 18}, 
                    {first_name: "Robert", last_name: "Baskin", age: 22}];

    // Using pluck to extract the first name property
    console.log("First Name of the students are: " + _.pluck(students, 'first_name'));
    response.write("First Name of the students are: " + _.pluck(students, 'first_name'));

    // Using max to find the maximum age among the students object
    var oldestStudent = _.max(students, function(student){ return student.age; });
    console.log("Full name of the oldest student is: " + oldestStudent.first_name + " " + oldestStudent.last_name + " and age is : " + oldestStudent.age);
    response.write("\nFull name of the oldest student is: " + oldestStudent.first_name + " " + oldestStudent.last_name + " and age is : " + oldestStudent.age);

    // Using min to find the minimum age among the students object
    var youngestStudent = _.min(students, function(student){ return student.age; });
    console.log("Full name of the youngest student is: " + youngestStudent.first_name + " " + youngestStudent.last_name + " and age is : " + youngestStudent.age);
    response.write("\nFull name of the youngest student is: " + youngestStudent.first_name + " " + youngestStudent.last_name + " and age is : " + youngestStudent.age);

    response.end();
});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000);