import React, { PureComponent } from "react";
import $ from "jquery";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/lib/styles.css";

export default class ImageCarousel extends PureComponent {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    window.jQuery = $;
    window.$ = $;
  }
  shouldComponentUpdate() {
    return false;
  }
  render() {
    return (
      <OwlCarousel
        className={this.props.className}
        options={this.props.options}
      >
        {this.props.children}
      </OwlCarousel>
    );
  }
}
