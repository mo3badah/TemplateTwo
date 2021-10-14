var name,
    age,
    hire;
function theFunc(a, b, c){
    if(typeof a === "string"){
        name = a;
        if(typeof b === "number"){
            age = b;
            hire = c;
        }else{
            age = c;
            hire = b;
        }
    }else if(typeof a === "number"){
        age = a;
        if(typeof b === "string"){
            name = b;
            hire = c;
        }else{
            name = c;
            hire = b;
        }
    }else{
        hire = a;
        if(typeof b === "string"){
            name = b;
            age = c;
        }else{
            name = c;
            age = b;
        }
    }
    if(hire){console.log("Hello "+name+", Your Age Is "+age+", You Are Available For Hire")}else{
        console.log("Hello "+name+", Your Age Is "+age+", You Are not Available For Hire")
    }

}
theFunc("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
theFunc(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
theFunc(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
theFunc(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
