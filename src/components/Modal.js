import React, { Component } from "react";
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Input,
    Label

} from "reactstrap";

class CustomModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: this.props.activeItem
        };
    }

    // handle change when event is triggered
    handleChange = e => {
        let { name, value } = e.target;
        // target checkbox and collect it's value
        if (e.target.type === "checkbox") {
            value = e.target.checked;
        }
        // changes the state of targeted element in item using it's element name
        const activeItem = { ...this.state.activeItem, [name]: value};
        this.setState({ activeItem });
    };

    render() {
        // declare properties to be used in rendering view
        const { toggle, onSave } = this.props;
        return (
            // design modal view
            <Modal isOpen={ true } toggle={ toggle }>

                {/* Modal Header */}
                <ModalHeader toggle={toggle}>
                    Todo Item
                </ModalHeader>
                {/* Modal Header */}

                {/* Modal Body */}
                <ModalBody>
                    {/* Form */}
                    <Form>
                        {/* Title */}
                        <FormGroup>
                            <Label for="title">Title</Label>
                            <Input
                                type="text"
                                name="title"
                                value={this.state.activeItem.title}
                                onChange={this.handleChange}
                                placeholder="Enter Todo Title"
                            />
                        </FormGroup>
                        {/* Description */}
                        <FormGroup>
                            <Label for="description">Title</Label>
                            <Input
                                type="text"
                                name="description"
                                value={this.state.activeItem.description}
                                onChange={this.handleChange}
                                placeholder="Enter Todo description"
                            />
                        </FormGroup>
                        {/* Due Date */}
                        <FormGroup>
                            <Label for="due_date">Title</Label>
                            <Input
                                type="text"
                                name="due_date"
                                value={this.state.activeItem.due_date}
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        {/* Completed Checkbox */}
                        <FormGroup check>
                            <Label for="completed">
                                <Input
                                    type="checkbox"
                                    name="completed"
                                    checked={this.state.activeItem.completed}
                                    onChange={this.handleChange}
                                />
                                Completed
                            </Label>
                        </FormGroup>

                    </Form>
                    {/* Form */}
                </ModalBody>
                {/* Modal Body */}
                {/* Modal Footer */}
                <ModalFooter>
                    <Button color="success" onClick={() => onSave(this.state.activeItem)}>
                        Save
                    </Button>
                </ModalFooter>
                {/* Modal Footer */}
            </Modal>
        )
    }
}

export default CustomModal;