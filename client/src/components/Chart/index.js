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
  //   console.log(props);

  // console.log(props.data[name]);
  //  Sort keys in ascending order
  let keysSorted = Object.keys(props.data[name]).sort(function (a, b) {
    return props.data[name][b] - props.data[name][a];
  });
  // console.log(keysSorted);

  // Sort values in ascending order
  let values = [];
  keysSorted.forEach((item) => {
    values.push(props.data[name][item]);
  });
  // console.log(values);

  // Not displaying more than 20 items

  keysSorted.length = 15;
  values.length = 15;

  // console.log(window.innerWidth);
  let labelsize = (window.innerWidth > 800) ? 14 : 8;

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
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
          text: "Foods",
        },
        ticks: {
          font: {
            family: "Times New Roman",
            size: labelsize,
          },
        },
      },
      y: {
        title: {
          display: true,
          text: "Occurences",
        },
        ticks: {
          stepSize: 1,
          font: {
            size: labelsize,
          },
        },
      },
    },
  };

  const labels = keysSorted;

  const data = {
    labels: labels,

    datasets: [
      {
        data: values,
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
      <div className="chart">
        <Bar className="bar" options={options} data={data} />
      </div>
    </>
  );
}
