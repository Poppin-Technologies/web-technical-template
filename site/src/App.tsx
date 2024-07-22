import { useEffect } from "react";
import "./App.css";
import { generateEvents } from "./events";

function App() {
    useEffect(() => {
        generateEvents(10).then((events) => {
            console.log(events);
        });
    }, []);

    return (
        <div className="w-full h-full flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-center"> Hello world! </h1>
        </div>
    );
}

export default App;
