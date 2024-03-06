import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [userAttempts, setUserAttempts] = useState<number>(3);
    const [moreAttempts, setMoreAttempts] = useState<number>(0);

    return (
        <div>
            <h3>Give Attempts</h3>
            <div>Number of Attempts: {userAttempts}</div>
            <Form.Group controlId="formUserAnswer">
                <Form.Label>Add Attempts?</Form.Label>
                <Form.Control
                    type="number"
                    value={moreAttempts}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setMoreAttempts(parseInt(event.target.value) || 0)
                    }
                />
            </Form.Group>
            <Button
                onClick={() => setUserAttempts(userAttempts + moreAttempts)}
            >
                gain
            </Button>
            <Button
                onClick={() => setUserAttempts(userAttempts - 1)}
                disabled={userAttempts < 1}
            >
                use
            </Button>
        </div>
    );
}
