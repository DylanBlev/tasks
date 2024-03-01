import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { render } from "react-dom";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [rightDice, setRightDice] = useState<number>(1);
    const [leftDice, setLeftDice] = useState<number>(2);

    // beforeEach(() => {
    //     render(
    //         <>
    //             <span data-testid="left-die"></span>
    //             <span data-testid="right-die"></span>
    //         </>
    //     );
    // });

    return (
        <div>
            <p>
                <span data-testid="right-die">
                    <b>Right Dice:</b> {rightDice}
                </span>
                <span data-testid="left-die">
                    <b>Left Dice:</b> {leftDice}
                </span>
            </p>

            <Button onClick={() => setLeftDice(d6())}>Roll Left</Button>
            <Button onClick={() => setRightDice(d6())}>Roll Right</Button>

            {rightDice !== 1 && leftDice !== 1 && rightDice === leftDice ? (
                <p>Win</p>
            ) : leftDice === 1 && rightDice === 1 ? (
                <p>Lose</p>
            ) : (
                <p>Try again</p>
            )}
        </div>
    );
}
