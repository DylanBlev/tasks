import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "yellow",
    "white",
    "magenta"
];

export function ChangeColor(): JSX.Element {
    const [chosenColor, setChosenColor] = useState<string>("");

    return (
        <div>
            <h3>Change Color</h3>
            {COLORS.map((color: string) => (
                <Form.Check
                    inline
                    style={{ backgroundColor: color }}
                    key={color}
                    type="radio"
                    name="colors"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setChosenColor(event.target.value)
                    }
                    label={color}
                    value={color}
                />
            ))}
            {chosenColor ? (
                <div>
                    You have chosen{" "}
                    <span
                        data-testid="colored-box"
                        style={{ backgroundColor: chosenColor }}
                    >
                        {chosenColor}
                    </span>
                    .
                </div>
            ) : (
                <div data-testid="colored-box"></div>
            )}
        </div>
    );
}
