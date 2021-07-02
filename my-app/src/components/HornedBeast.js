import React from "react";
import CardColumns from "react-bootstrap/CardColumns";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class HornedBeast extends React.Component {


    clickMe = () => {
        this.props.show({
            title: this.props.title,
            image_url: this.props.image_url,
            description: this.props.description
        })
    }

  render() {
    return (
      <>
        <CardColumns>
          <Card style={{ width: "18rem", height: "30rem" }}>
            <Card.Img
              variant="top"
              src={this.props.image_url}
              alt={this.props.title}
            />
            <Card.Body>
              <Card.Title>{this.props.title}</Card.Title>
              <Card.Text>{this.props.description}</Card.Text>
              <Button variant="primary" onClick={this.clickMe}>
                ClickMe!
              </Button>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardColumns>
      </>
    );
  }
}

export default HornedBeast;
