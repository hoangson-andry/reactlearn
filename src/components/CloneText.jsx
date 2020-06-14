import React, { Component } from "react";

class CloneText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cloneValue: "",
    };
  }
  textSelection = () => {
    this.setState({ cloneValue: window.getSelection().toString() });

    // console.log(window.getSelection());
  };

  componentDidMount() {}

  getSelectionHtml = () => {
    var html = "";
    if (typeof window.getSelection != "undefined") {
      var sel = window.getSelection();
      if (sel.rangeCount) {
        var container = document.createElement("div");
        for (var i = 0, len = sel.rangeCount; i < len; ++i) {
          container.appendChild(sel.getRangeAt(i).cloneContents());
        }

        html = container.innerHTML;
      }
    } else if (typeof document.selection != "undefined") {
      if (document.selection.type == "Text") {
        console.log(2);
        html = document.selection.createRange().htmlText;
      }
    }

    console.log("bo", html);
    html.replace(/<\/?mark[^>]*>/g, "");
    console.log("ao", html.replace(/<\/?mark[^>]*>/g, ""));
    return { toRelpace: html.replace(/<\/?mark[^>]*>/g, ""), location: html };
  };
  makeBold = () => {
    var highlight = getSelectionHtml();
    var span = "<mark>" + highlight.toRelpace + "</mark>";
    console.log("highlight", highlight.toRelpace);
    console.log(new RegExp(highlight.location, "g"));
    // console.log(highlight.selectAllChildren());

    myarea.innerHTML = myarea.innerHTML.replace(
      new RegExp(highlight.location, "g"),
      span
    );
    console.log("myarea.innerHTML", myarea.innerHTML);
  };

  render() {
    return (
      <div id="CloneText">
        <p id="test">
          Select me: <i>italic</i> and <b>bold</b>
        </p>
        Cloned:
        <span id="cloned" style={{ background: "yellow" }}>
          {this.state.cloneValue}
        </span>
        <br />
        As text: <span id="astext"></span>
        <div
          id="myarea"
          onMouseMoveCapture={this.textSelection}
          contentEditable="true"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quam
          orci, ornare
          <span style={{ fontWeight: "bold" }}>
            sed ullamcorper id, eleifend in quam. Nulla facilisi. Aliquam vitae
            orci arcu. Aenean a nulla volutpat ante
          </span>
          ultrices euismod ut et magna. Nulla vitae vulputate urna. Donec
          tempus, nisi a pharetra placerat, diam nisi aliquam elit, a
          consectetur magna enim sed ligula. Aliquam iaculis rutrum dui et
          tristique. Nulla facilisi. Cras eu ante fringilla erat convallis
          rutrum in ac <b>magna</b>. Praesent porta bibendum augue sit amet
          rhoncus. Vestibulum nibh quam, posuere non consectetur eget, pharetra
          sit amet lectus.
        </div>
        <button>Get HTML</button>
      </div>
    );
  }
}

export default CloneText;
