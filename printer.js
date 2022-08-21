class Printer {
    constructor(ppm) {
		//Number of pages printed by minute.
        this.page_rate = ppm; 
		
        //Flag to know if we have an active task or not.
        this.current_task = false;

        //Initializing the remaining time equal to zero as we do not have a current task by default.
        this.time_remaining = 0;
    }

    //Method to evaluate if the printer is busy with a task. Changes the printer status to available when the task has been completed. 
    tick() {
        if (this.current_task) {
            this.time_remaining -= 1;
            if (this.time_remaining <= 0) {
                this.current_task = false;
            }
        }
    }

    //Getter method that indicates if there is a task at the moment or not.
    busy() {
        if (this.current_task) {
            return true
        }
        else {
            return false
        }
    }

    //Method to assign a new task and calculate the time this task will take to be completed.
    start_next(new_task) {
        this.current_task = new_task
        this.time_remaining = new_task.get_pages() * 60 / this.page_rate
    }
}

export { Printer };