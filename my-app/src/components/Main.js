import React from "react";
import Data from "./data.json";
import HornedBeast from "./HornedBeast";
import CardColumns from "react-bootstrap/CardColumns";
import SelectedBeast from "./SelectedBeast";

class Main extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            showModal: false,
            modalData: {}
        }
    }

    showBeasts = (data) => {
        this.setState({
            showModal: true,
            modalData: data
        })
    }

    handleClose = () => {
        this.setState({
            showModal: false
        })
    }

  render() {
    return (
      <>
        <CardColumns>
          {Data.map((item, index) => {
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
        <SelectedBeast show={this.state.showModal} hide={this.handleClose} modalData={this.state.modalData}/>
      </>
    );
  }
}

export default Main;
