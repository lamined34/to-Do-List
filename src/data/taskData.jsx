class TaskObj {
    constructor(id, title, description, status, start, end) {     
        this.id = id;
        this.title = title;
        this.description = description;
        this.status = status;
        this.start = start;
        this.end = end;
    }
   
}



export const tasks = [
    new TaskObj('1', 'Lecture', 'lire 2 pages de livre sur React', 'En cours', '2025-02-01', '2025-02-02'),
    new TaskObj('2', 'Task 2', 'Description 2', 'Terminée', '2025-02-01', '2025-02-02')
];