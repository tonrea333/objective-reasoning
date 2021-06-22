// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘
function isAdmin(user){


    console.log(userRole)
    if (user.userRole == "ADMIN"){
        return true("true")
   }else if (user.userRole !== "ADMIN"){
       return false("false")
}
    
}

//===========================================

function getEmail(user){

  
}

//===========================================

function getPlaylistLength(name, song){

let song = [];

for (let i =0; i < song.length; i++) {
    
}
return song;
}


//=============================================

function getHardestHomework(homework){

if (name !== "done"){
    let sum = 0
    
    averageScore 
}

    return homework;
}
return '';

//===============================================

function createPhonebook(names, phonenumbers){

    let phonebook = names + phonebook;

console.log(names[1],":", phonenumbers[1]);
console.log(names[2],":", phonenumbers[2]);
console.log(names[3],":", phonenumbers[3]);
return phonebook
}



// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};