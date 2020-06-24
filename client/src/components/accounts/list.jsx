import React from "react";
import "./list.css";
import moment from "moment";
import comment from "./comment.png";
import retweet from "./retweet.png";

class List extends React.Component {
  kFormatter = (num) => {
    return Math.abs(num) > 999
      ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
      : Math.sign(num) * Math.abs(num);
  };
  render() {
    const data = this.props.data;
    console.log(data);
    return (
      <div className="shadow-sm p-3 mb-5 bg-white rounded">
        <div className="row list-row">
          {data &&
            data.map((account, idx) => (
              <div
                className="col-md-4 pt-2 shadow m-3 px-3 pb-2 mb-5 bg-white rounded "
                key={idx}
              >
                <div className="account">
                  <img src={account.user.profile_image_url_https} alt="user" />
                  <p className="user">
                    {account.user.name}
                    <br />@{account.user.screen_name}
                  </p>
                  <p className="date">
                    {moment(account.created_at).format("DD MMM, YYYY")}
                  </p>
                </div>
                <div>
                  <p className="tweet">{account.text}</p>
                </div>
                <div className="comment">
                  <span>
                    <img src={comment} alt="comment" />
                    {this.kFormatter(account.user.statuses_count)}
                  </span>
                  <span>
                    <img src={retweet} alt="retweet" />
                    {this.kFormatter(account.retweet_count)}
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default List;
