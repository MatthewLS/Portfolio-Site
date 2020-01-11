import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Card from "../components/Card";
import thanos from "../assets/images/thanos.png";
import turkey from "../assets/images/turkey.jpg";
import { tsNumberKeyword } from "@babel/types";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "sample",
          subTitle: "short description",
          imgSrc: thanos,
          //1000pxwide by 1600px tall
          link: "",
          selected: false
        },
        {
          id: 1,
          title: "another",
          subTitle: "one",
          imgSrc: tsNumberKeyword,
          link: "",
          selected: true
        }
      ]
    };
  }

  handleCardClick = (id, card) => {
    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach(item => {
      if (item.id !== id) {
        item.selected = false;
      }
    });

    this.setState({
      items
    });
  };

  makeItems = items => {
    return items.map(item => {
      return (
        <Card
          item={item}
          click={e => this.handleCardClick(item.id, e)}
          key={item.id}
        />
      );
    });
  };

  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-around">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}

export default Carousel;
