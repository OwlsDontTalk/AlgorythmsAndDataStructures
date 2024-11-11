class EventBus {
    constructor() {
        this.queue = new Queue();
        this.subscribers = {};
        this.processing = false;
    }

    subscribe(eventType, callback) {
        if (!this.subscribers[eventType]) {
            this.subscribers[eventType] = [];
        }
        this.subscribers[eventType].push(callback);
    }

    publish(eventType, data) {
        this.queue.enqueue({ eventType, data });
        if (!this.processing) {
            this.processQueue();
        }
    }

    async processQueue() {
        this.processing = true;

        while (!this.queue.isEmpty()) {
            const { eventType, data } = this.queue.dequeue();
            if (this.subscribers[eventType]) {
                for (const callback of this.subscribers[eventType]) {
                    await callback(data);
                }
            }
        }

        this.processing = false;
    }
}

global.EventBus = EventBus;
