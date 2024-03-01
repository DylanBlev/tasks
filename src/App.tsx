import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>

            <p>
                <b>:Hello World:</b> Edit <code>src/App.tsx</code> and save.
                This page will automatically reload. <b>:DYLAN BLEVINS:</b>
            </p>

            <h1 style={{ backgroundColor: "yellow" }}>This is a new Header!</h1>

            <img
                style={{ width: 200, height: 200 }}
                src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg"
                alt="Random Picture of a Cat"
            />

            <ul>
                <li>This Cat is Cute</li>
                <li>This Cat is Small</li>
                <li>This Cat is Fluffy</li>
            </ul>

            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        <div
                            className="App"
                            style={{
                                width: 100,
                                height: 100,
                                backgroundColor: "red"
                            }}
                        />
                    </Col>
                    <Col>
                        <div
                            className="App"
                            style={{
                                width: 100,
                                height: 100,
                                backgroundColor: "red"
                            }}
                        />
                    </Col>
                </Row>
            </Container>
            
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
        </div>
    );
}

export default App;
