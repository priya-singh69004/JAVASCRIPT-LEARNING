function one(){
    const username = "priya"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
// one()


if(true){
    const username = "priya"
    if(username === "priya"){
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);


// +++++++++++++++++++++ interesting concept ++++++++++++++

addOne(5)
function addOne(num){
    return num + 1
} // this will run


addTwo(5)
const addTwo = function(num){
    return num + 2
}// this will not run
