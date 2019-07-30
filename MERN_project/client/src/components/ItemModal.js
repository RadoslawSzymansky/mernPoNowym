import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';
class InterModal extends Component {
    state = {
        modal: false,
        name: ''
    }
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }
    onSubmit = e => {
        e.preventDefault();
        const newItem = {
            name: this.state.name
        }
        //Adding item via addItem actions
        this.props.addItem(newItem)
        this.toggle();
    }

    render() {
        return (
            <div>
                <Button
                    color="datk"
                    style={{ marginBottom: '2rem' }}
                    onClick={this.toggle}
                >Add item</Button>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}></ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for='item'>Item</Label>
                                <Input
                                    type='text'
                                    name='name'
                                    id='item'
                                    placeholder='Add shooping item0'
                                    onChange={this.onChange}
                                />
                            </FormGroup>
                            <Button
                                color="dark"
                                style={{ marginTop: "2 rem" }}
                                block
                            >Add item</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    item: state.item
})
export default connect(mapStateToProps, { addItem })(InterModal)