class Queue {

    //Method executed when creating an object instance. Creates an empty array that represents our queue.
    constructor() {
        this.queue = [];
    }

    //Method to add Task to the waiting queue of the printer. The task is added to the end of the queue
    enqueue(item) {
        this.queue.push(item);
    }

    //This method removes the task at the first position of the queue. 
    //This task is the one that has been in the queue the longest time.
    dequeue() {
        return this.queue.shift();
    }

    //This method allows us to know if this method is empty. 
    //This result will be used to know if the printer is busy or if we can start a task.
    isEmpty() {
        return this.queue.length === 0;
    }
    
    //Returns the number of elements contained in the queue. 
    size() {
        return this.queue.length;
    }
}

//Export the class Queue to be used in other files
export { Queue };