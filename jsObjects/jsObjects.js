// JS Objects -- Tom Compton

// Challenge 1

function printStudents(array) {
	for (var index of array) {
		console.log('Name: ' + index.name + ', ' + 'Cohort: ' + index.cohort);
	}
}

var Students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

printStudents(Students)

// Challenge 2

function printUsers(array2) {
    for (var userKey in array2) {
        console.log(userKey.toUpperCase());
        for (var x=0; x < array2[userKey].length; x++) {
            var label = x + 1;
            var firstName = array2[userKey][x].first_name;
            var lastName = array2[userKey][x].last_name;
            var fullName = firstName + lastName; 
            console.log(label + ' - ' + lastName + ', ' + firstName + ' - ' + fullName.length);
        }
    }
}

var users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

 printUsers(users);