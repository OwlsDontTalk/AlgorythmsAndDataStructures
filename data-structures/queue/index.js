require('./Queue.js');
require('./EventBus.js');

const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
console.log(queue.dequeue());

const eventBus = new EventBus();
eventBus.subscribe("taskCompleted", async (data) => {
    console.log("Task completed:", data);
});
eventBus.publish("taskCompleted", { taskId: 1, status: "success" });
