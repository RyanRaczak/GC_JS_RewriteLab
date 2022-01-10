function RoomCalculator(){
    let length = parseInt(prompt("Please enter Length"));
    let width = parseInt(prompt("Please enter width"));
    let height = parseInt(prompt("Please enter height"));

    let area = length * width;
    let perimeter = 2 * (length + width); 
    let volume = length * width * height;

    //Method 1 calculating
    let carpet = area / 5;
    let paint = perimeter / 5;

    console.log("Method 1 results: \n" + 
    "\nArea: " + area +
    "\nPerimeter: " + perimeter +
    "\nVolume: " + volume +
    "\nCarpet: " + carpet +
    "\nPaint: " + paint);

    //Method 2 calculating
    let longWallPaint = (length * height) * 2;
    let shortWallPaint = (width * height) * 2;
    let ceilingFloor = width * length;
    let realPaint = (longWallPaint + shortWallPaint + ceilingFloor) / 25;
    let realCeilingFloor = ceilingFloor / 5;

    console.log("Method 2 results: \n" + 
    "\nArea: " + area +
    "\nPerimeter: " + perimeter +
    "\nVolume: " + volume +
    "\nCarpet: " + realCeilingFloor +
    "\nPaint: " + realPaint);
}

let students = [
    {
        "Name": "Phillip",
        "Hometown": "Canton, MI",
        "FavoriteFood": "Fried Chicken"
    },
    {
        "Name":"Andy",  
        "Hometown": "Berkely, MI",
        "Favorite Food": "French Fries"
    },
    {
        "Name":"Cassly",
        "Hometown": "Detroit, MI",
        "FavoriteFood": "Steak"
    },
    {
        "Name":"Zachary",  
        "Hometown": "Wyandotte, MI",
        "FavoriteFood": "Sushi"
    },
    {
        "Name":"Cortez",  
        "Hometown": "Detroit, MI",
        "FavoriteFood": "Chicken Fettuccine Alfredo"
    },
    {
        "Name":"Richard",  
        "Hometown": "Canton, MI",
        "FavoriteFood": "Sushi"
    },
    {
        "Name":"Erin",  
        "Hometown": "Troy, MI",
        "FavoriteFood": "Tacos"
    },
    {
        "Name":"James",  
        "Hometown": "Yap, FSM",
        "FavoriteFood": "Katsu"
    },
    {
        "Name":"Cullin",  
        "Hometown": "Fowlerville, MI",
        "FavoriteFood": "Pad Thai"
    },
]

function StudentDatabase(){
    let input = parseInt(prompt("Select from the list\n" +
                    "1)Search by Name\n 2)Search by Index\n 3)View all"));
    switch (input){
        case 1:
            let name = prompt("Input name to search");
            console.log(SearchByName(name));
        break;
        case 2:
            let index = parseInt(prompt("There are currently " + students.length + " students." + 
                                        "Please enter the student number to look up"))
            console.log(SearchByIndex(index));
        break;
        case 3:
            ViewAll();
        break;
        default:
            console.log("Invalid input");
    }

}
function SearchByName(name){
    let student = students.find(student => student.Name.toLowerCase() === name.toLowerCase());
    if(student != null){
        return "\nName: " + student.Name + "\nHometown: " + student.Hometown + 
        "\nFav Food: " + student.FavoriteFood + "\n";
    }
    else{
        return "No student found";
    }
}
function SearchByIndex(index){
    try{
        if(index < 0 || index > students.length){
            return "Invalid input";
        }
        return "\nName: " + students[index].Name + "\nHometown: " + students[index].Hometown + 
            "\nFav Food: " + students[index].FavoriteFood + "\n";
    }
    catch{
        return "Invalid input";
    }
}
function ViewAll(){
    console.log("\n:::List of all students:::\n")
    students.forEach(element => {
        console.log("\nName: " + element.Name + "\nHometown: " + element.Hometown + 
        "\nFav Food: " + element.FavoriteFood + "\n");
    });
}