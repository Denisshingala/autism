import React from "react";
import "./dummy.css";
import { DragDropContainer, DropTarget } from "react-drag-drop-container";

class Dummy extends React.Component {
  state = {
    draggableVisibility: "block"
  };

  render() {
    return (
      <>
        <h1> Put the orange in the box and the apple in the basket </h1>
        <DropTarget
          id="my_target"
          targetKey="foo"
          style={{ display: "block" }}
          onHit={function (e) {
            alert("You put the orange in the box!");
          }}
        >
          <DragDropContainer
            targetKey="foo"
            style={{ display: "block" }}
            dropData={{ type: "Orange" }}
          >
            <img
              src="https://media.istockphoto.com/photos/orange-fruit-isolated-on-a-white-background-picture-id494037460?k=6&m=494037460&s=612x612&w=0&h=9CJ0RvlNLk3BMJ4ud2JmyQR7t_fUY7bLw8wl4Tk__kY="
              width="100px"
              alt=""
            />
          </DragDropContainer>
        </DropTarget>

        <DropTarget
          id="my_target"
          targetKey="Apple"
          onHit={function (e) {
            alert("You put the Apple in the box!");
          }}
        >
          <DragDropContainer
            targetKey="bar"
            style={{ display: "block" }}
            dropData={{ type: "Apple" }}
          >
            <img
              src="https://media.istockphoto.com/photos/bite-on-a-red-apple-picture-id475190475?k=6&m=475190475&s=612x612&w=0&h=9yexhsRfQ5-f-CKOMkkZiebbgOJuUq9wsbEfmeUmqGw="
              width="100px"
              alt=""
            />
          </DragDropContainer>
        </DropTarget>

        <DropTarget
          id="my_target"
          targetKey=""
          style={{ display: "block" }}
          onHit={function (e) {
            alert("You put the orange in the box!");
          }}
        >
          <DragDropContainer
            targetKey="bar"
            style={{ display: "block" }}
            dropData={{ type: "Apple" }}
          >
            <img
              src="https://media.istockphoto.com/photos/open-cardboard-box-isolated-on-white-with-clipping-path-picture-id504426400?k=6&m=504426400&s=170667a&w=0&h=k4uKpnGrPRDXVFjiXzMwqukovpixMuVZeArhy9e-GMM="
              width="100px"
              alt=""
            />
          </DragDropContainer>
        </DropTarget>

        <DropTarget
          targetKey="bar"
          id="a_target"
          style={{ visibility: "false" }}
          onHit={function () {
            alert("You put the apple in the basket!");
          }}
        >
          <DragDropContainer
            targetKey="Apple"
            style={{ display: this.state.draggableVisibility }}
            dropData={{ type: "bar" }}
          >
            <img
              src="https://media.istockphoto.com/photos/open-laundry-basket-picture-id613307728?k=6&m=613307728&s=612x612&w=0&h=gKYImHwIOWTqUTkWlHZoEb4ezbOVnVItF_68mpvM1cE="
              width="100px"
              alt=""
            />
          </DragDropContainer>
        </DropTarget>
      </>
    );
  }
}

export default Dummy;
