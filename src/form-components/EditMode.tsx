import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [userName, setUserName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);
    const [editMode, setEditMode] = useState<boolean>(false);

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setUserName(event.target.value);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <div>
                {isStudent ? (
                    <div>{userName} is a student</div>
                ) : (
                    <div>{userName} is not a student</div>
                )}
                <Form.Check
                    type="switch"
                    id="editMode"
                    label="edit?"
                    checked={editMode}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setEditMode(event.target.checked)
                    }
                ></Form.Check>
                {editMode ? (
                    <div>
                        <Form.Group controlId="editFormName">
                            <Form.Label>Change Name:</Form.Label>
                            <Form.Control type="text" onChange={updateName} />
                        </Form.Group>
                        <Form.Group controlId="editFormStudent">
                            <Form.Label>Not a Student</Form.Label>
                            <Form.Check
                                type="checkbox"
                                onChange={() => setIsStudent(!isStudent)}
                            />
                        </Form.Group>
                    </div>
                ) : (
                    <div></div>
                )}
            </div>
        </div>
    );
}
