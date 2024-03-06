import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [userChoice, setUserChoice] = useState<string>(options[0]);

    function updateUserChoice(event: React.ChangeEvent<HTMLSelectElement>) {
        setUserChoice(event.target.value);
    }

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="questionOptions">
                <Form.Label>Pick an Option</Form.Label>
                <Form.Select value={userChoice} onChange={updateUserChoice}>
                    {options.map((choice: string) => (
                        <option key={choice} value={choice}>
                            {choice}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            {userChoice === expectedAnswer ? <div>✔️</div> : <div>❌</div>}
        </div>
    );
}
