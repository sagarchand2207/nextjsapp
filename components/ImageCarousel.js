import React, { PureComponent } from "react";
import $ from "jquery";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/lib/styles.css";

export default class ImageCarousel extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      mounted: false,
    };
  }
  componentDidMount() {
    this.setState({ mounted: true });
  }
  componentWillUnmount() {
    this.setState({ mounted: false });
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
