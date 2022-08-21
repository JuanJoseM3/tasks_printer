//Get a random number between 1 and 20 (included) to determine the number of pages to print for each task
const random = Math.floor(Math.random() * 20) + 1;

class Task {

    //Constructor method executed when creating an instance object of Task. Receives the time as parameter which, 
    //which corresponds to the second in which the task was created 
    constructor(time) {

        //Property to represent the actual second in which the task was created.
        this.timestamp = time;

        //Declaring the number of pages of the task. Random number between 1 and 20.
        this.pages = random;
    }

    //Getter method to return the actual second in which the task was created
    get_stamp() {
        return this.timestamp;
    }

    //Getter method to return the total pages of the task
    get_pages() {
        return self.pages;
    }

    //Calculating the time required to complete the task
    wait_time(current_time) {
        return current_time - this.timestamp;
    }
}

//Export the class Task to be used in other file
export { Task };
