import React from "react";
import Data from "./data.json";
import HornedBeast from "./HornedBeast";
import CardColumns from "react-bootstrap/CardColumns";
import SelectedBeast from "./SelectedBeast";
import Form from 'react-bootstrap/Form'

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      modalData: {},
      beastData: Data,
      filteredArr: {}
    };
  }

  showBeasts = (data) => {
    this.setState({
      showModal: true,
      modalData: data,
    });
  };

  handleClose = () => {
    this.setState({
      showModal: false,
    });
  };

  filterBeasts = (value) => {
    let filteredArr = Data.filter(item => {
      if(Number(item.horns) === Number(value)){
        return item;
      } else if (value === 'all'){
        return item;
      }
    })
    this.setState({
      beastData: filteredArr
    })
  }

  handleChange = (event) => {
    let value = event.target.value;

    this.filterBeasts(value)
  }

  render() {
    return (
      <>
        <Form onSelect={this.handleChange}>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Select number of horns:</Form.Label>
            <Form.Control as="select" onChange={this.handleChange}>
              <option value="all" name="all" >All</option>
              <option value="1" name="1" >1</option>
              <option value="2" name="2" >2</option>
              <option value="3" name="3" >3</option>
              <option value="100" name="100" >Wow..</option>
            </Form.Control>
          </Form.Group>
        </Form>
        <CardColumns>
          {this.state.beastData.map((item, index) => {
            return (
              <HornedBeast
                title={item.title}
                image_url={item.image_url}
                description={item.description}
                key={index}
                show={this.showBeasts}
                modalData={this.state.modalData}
              />
            );
          })}
        </CardColumns>
        <SelectedBeast
          show={this.state.showModal}
          hide={this.handleClose}
          modalData={this.state.modalData}
        />
      </>
    );
  }
}

export default Main;
