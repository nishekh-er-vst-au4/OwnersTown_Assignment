import React from "react";
import "./App.css";
import SearchBar from "./components/searchbar/searchbar";

class App extends React.Component {
  onSearchSubmit(term) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Authorization",
      'OAuth oauth_consumer_key="iIfnGPg6neDbA9i5dHxHzSu4O",oauth_token="4614481819-rZeJSavDE3uHnB4KWOi67f2P7JHo8fmyDcSqpvs",oauth_signature_method="HMAC-SHA1",oauth_timestamp="1592922389",oauth_nonce="KTUbwUeWgMT",oauth_version="1.0",oauth_signature="rKVjjCDg0Xvm21or57AYHKS3WrE%3D"'
    );

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
      mode: "no-cors",
    };

    fetch(
      `https://api.twitter.com/1.1/users/search.json?q=${term}&include_entities=true`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }
  render() {
    return (
      <div>
        <SearchBar searchSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
