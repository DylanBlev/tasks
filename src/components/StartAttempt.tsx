import React, { useState } from "react";
import { Button } from "react-bootstrap";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { start } from "repl";

export function StartAttempt(): JSX.Element {
    const [inProgress, setInProgress] = useState<boolean>(false);
    const [numOfAttempts, setNumOfAttempts] = useState<number>(4);

    function startProgress(): void {
        setInProgress(true);
        setNumOfAttempts(numOfAttempts - 1);
    }

    return (
        <div>
            <Button
                onClick={startProgress}
                disabled={inProgress || numOfAttempts < 1}
            >
                Start Quiz
            </Button>
            <Button onClick={() => setInProgress(false)} disabled={!inProgress}>
                Stop Quiz
            </Button>
            <Button
                onClick={() => setNumOfAttempts(numOfAttempts + 1)}
                disabled={inProgress}
            >
                Mulligan
            </Button>
            Number of Attempts: <span>{numOfAttempts}</span>
        </div>
    );
}
