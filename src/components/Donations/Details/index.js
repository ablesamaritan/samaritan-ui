import React, { Fragment } from "react";
import { connect } from "react-redux";
// import { PayPalButtons } from "@paypal/react-paypal-js";

import { getADonation, getDonations } from "../../../actions";
import "./styles.scss";

class Details extends React.Component {
  state = { donation: {} };
  componentDidMount() {
    this.props.getDonations();
    this.props.getADonation(this.props.match.params.id);
  }

  componentDidUpdate(prevPros, prevState) {
    if (prevPros.donation !== this.props.donation) {
      this.setState({ donation: this.props.donation });
    }
  }

  render() {
    const { donation } = this.props;
    return (
      <Fragment>
        <div className="container padded-container">
          <h1 className="padded-header">Donation Details</h1>
          <div className="card card-item-details shadow">
            <img
              className="card-img-top"
              src={donation && donation.image}
              alt={donation && donation.image}
            />
            <div className="card-body">
              <h4 className="card-title">{donation && donation.name}</h4>
              {/* <p className="card-text">
                Current Amount: {donation && donation.currentAmount}
              </p>
              <p className="card-text">
                Target Amount: {donation && donation.target}
              </p> */}
              {/* <PayPalButtons style={{ layout: "horizontal" }} /> */}
              <form
                action="https://www.paypal.com/donate"
                method="post"
                target="_top"
              >
                <input
                  type="hidden"
                  name="hosted_button_id"
                  value="D5DQUC6UR8PW4"
                />
                <input
                  type="image"
                  src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
                  border="0"
                  name="submit"
                  title="PayPal - The safer, easier way to pay online!"
                  alt="Donate with PayPal button"
                />
                <img
                  alt=""
                  border="0"
                  src="https://www.paypal.com/en_KE/i/scr/pixel.gif"
                  width="1"
                  height="1"
                />
              </form>

              <div className="pay-card-container">
                <div className="pay-card-content">
                  <div>Bank Account:</div>
                  <div>0120172159397 (Edwin Mariita)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return {
    donation: state.donations[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { getADonation, getDonations })(
  Details
);
