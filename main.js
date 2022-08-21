//Import the classes for the main function
import { Queue } from './queue';
import { Printer } from './printer';
import { Task } from './task';

//Defining the main function that calculates the average time that will take each student's task.
function simulation(num_seconds, pages_per_minute) {

    //Create an instance of the class Printer. Receives the pages printed per minute by the printer.
    lab_printer = new Printer(pages_per_minute);

    //Creates an instance of the class Queue. 
    //It will receive each task and it will add it at the end of the queue.
    //When the task in the first position is completed, it will be removed.
    print_queue = new Queue();

    //Array to store the time taken by each task
    waiting_times = [];

    //Iterating on the 3600 seconds of an hour. 
    for (currentSecond of num_seconds) {

        //Conditional to evaluate if a task was created.
        //In case a task is created, it will be added to the last position of the queue.
        if (new_print_task()) {
            let task = new Task(currentSecond);
            print_queue.enqueue(task);
        }

        //Check if the printer is not busy and the list of task to be printed is not empty.
        //In that case, the task at the first position will be removed, the time it took to be completed will be added to the array of times records and the printer will be advised to continue with the next task.
        if (!lab_printer.busy() && !print_queue.is_empty()) {
            next_task = print_queue.dequeue();
            waiting_times.push(next_task.wait_time(currentSecond));
            lab_printer.start_next(next_task);
        }

        //Discount one second to the remaining time to complete the task.
        lab_printer.tick()
    }

    //Calculate the average time of a task to be completed by adding all the times of all tasks and dividing it by the number of tasks completed.
    let average_wait = sum(waiting_times) / waiting_times.length;
    console.log("Average Wait %6.2f secs %d tasks remaining." % (average_wait, print_queue.size()));
}

//Function to check if a random number obtained is equal to 180, which means that a task was created.
function new_print_task() {
    const num = Math.floor(Math.random() * 180) + 1;
    if (num == 180) {
        return True
    } else {
        return False
    }
}

//Loop to get the current time at which a task was send to the printer queue.
for( let i = 1; i <= 10; i++) {
    simulation(3600, 5);
}