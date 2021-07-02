import React from "react";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

class SelectedBeast extends React.Component {
    


  render() {
    return (
      <>
        <Modal show={this.props.show} onHide={this.props.hide}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.modalData.title}</Modal.Title>
          </Modal.Header>
          <Card.Img
              variant="top"
              src={this.props.modalData.image_url}
              alt={this.props.modalData.title}
            />
          <Modal.Body>{this.props.modalData.description}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.hide}>
              Close
            </Button>
            <Button variant="primary" onClick={this.props.hide}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default SelectedBeast;