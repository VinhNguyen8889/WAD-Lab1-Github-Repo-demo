//creating file
//read content
//delete file
//rename file
//update file

//create a file and write content
const fs = require("fs/promises");
const createFile = async(filename, data) => {
    try {
        await fs.writeFile(filename, data);
        console.log("file was successfully created!");
    } catch (error){
        console.log(error);
    }
};

createFile("f1.txt", "Welcome to my first node js code");

//Read file
const readfile = async (Filetoread) => {
    try{
        const data = await fs.readFile(Filetoread);
        console.log(data.toString());
    } catch (error){
        console.log(error);
    }
};

readfile("f1.txt");