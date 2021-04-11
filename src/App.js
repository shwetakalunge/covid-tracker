import React from "react";

import { Cards,  CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";
import Chart from "../src/components/Chart/Chart.jsx";

class App extends React.Component {
  state = {
    data: {},
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  render() {
    const { data } = this.state;

    return (
      <div className={styles.container}>
        <Cards data={this.state.data} />
        <Chart />
        <CountryPicker />
      </div>
    );
  }
}
export default App;
