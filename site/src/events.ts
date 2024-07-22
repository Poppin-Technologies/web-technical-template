type User = {
    name: string;
    photo: string; // URL
};

type Event = {
    price: number; // in cents
    date: Date;
    attendees: User[];
    distance: number; // float
    views: number; // int
    host: User;
    name: string;
    image: string; // URL for event image
};

function getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomFloat(min: number, max: number): number {
    return Math.random() * (max - min) + min;
}

function getRandomElement<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
}

const names = ["Alice", "Bob", "Charlie", "David", "Eve", "Faythe", "Grace", "Heidi", "Ivan", "Judy"];
const eventNames = [
    "Tech Conference",
    "Music Festival",
    "Art Exhibition",
    "Food Fair",
    "Startup Pitch",
    "Science Workshop",
    "Hackathon",
    "Gaming Tournament",
    "Book Fair",
    "Health Seminar",
];
const aspectRatios = ["4:3", "16:9", "9:16"];

function generateUser(seed: number): User {
    return {
        name: getRandomElement(names),
        photo: `https://picsum.photos/seed/${seed}/200`,
    };
}

function generateEvent(seed: number): Event {
    const attendeesCount = getRandomInt(5, 10);
    const attendees: User[] = Array.from({ length: attendeesCount }, (_, i) => generateUser(seed + i + 1));
    const aspectRatio = getRandomElement(aspectRatios);
    const [width, height] = aspectRatio.split(":").map(Number);
    const imageWidth = getRandomInt(400, 800);
    const imageHeight = Math.floor((imageWidth / width) * height);

    return {
        price: getRandomInt(1000, 10000),
        date: new Date(),
        attendees: attendees,
        distance: getRandomFloat(1, 100),
        views: getRandomInt(0, 1000),
        host: attendees[0],
        name: getRandomElement(eventNames),
        image: `https://picsum.photos/seed/event${seed}/${imageWidth}/${imageHeight}`,
    };
}

// const events: Event[] = Array.from({ length: 10 }, (_, i) => generateEvent(i + 1));

export async function generateEvents(n: number): Promise<Event[]> {
    // resolve after 0.5s
    return new Promise((resolve) => {
        setTimeout(() => {
            const events: Event[] = Array.from({ length: n }, (_, i) => generateEvent(i + 1));
            resolve(events);
        }, 500);
    });
}
