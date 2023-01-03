import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import "./style.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Chart(props) {
  let name = props.symtom;
  console.log(props);

  // console.log(props.data[name]);
  //  Sort keys in ascending order
  let keysSorted = Object.keys(props.data[name]).sort(function (a, b) {
    return props.data[name][b] - props.data[name][a];
  });
  //   console.log(keysSorted);
  // Sort values in ascending order
  let values = [];
  keysSorted.forEach((item) => {
    values.push(props.data[name][item]);
  });
  console.log(values);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: props.symtom.toUpperCase(),
      },
      animation: {
        duration: 1,
      },
    },
    scales: {
        x: {
          title: {
            display: true,
            text: 'Foods'
          }
        },
        y: {
          title: {
            display: true,
            text: 'Occurences'
          },
          ticks: {
            stepSize: 1
          }
        }
    
    },
  };

  const labels = keysSorted;

  const data = {
    labels: labels,
    datasets: [
      {
        label: "",
        data: values,
        // backgroundColor: "rgba(255, 99, 132, 0.5)",
        backgroundColor: "#76c072",
      },
      //   {
      //     label: "Dataset 2",
      //     data: [0,9,8,7,6,5,4],
      //     backgroundColor: "rgba(53, 162, 235, 0.5)",
      //   },
    ],
  };
  return (
    <>
      {/* <div style={{ width: "1200px", margin: "auto auto" }}> */}
      <div className="chart">
        <Bar className="bar" options={options} data={data} />
      </div>
    </>
  );
}
