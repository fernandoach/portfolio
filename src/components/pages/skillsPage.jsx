import {
  Chart,
  Filler,
  Legend,
  LineElement,
  PointElement,
  RadialLinearScale,
  Tooltip,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import styles from "./skillsPage.module.css";

function SkillsPage() {
  Chart.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
  );

  const data = {
    labels: ["Express", "React", "TypeScript", "MongoDB", "My SQL", "SQL Server", "Git"],
    datasets: [
      {
        label: "(1-10)",
        data: [9, 8, 8, 8, 9, 9, 8],
        backgroundColor: "rgba(235, 30, 60, 0.1)",
        borderColor: "rgba(0, 0, 0, 0.8)",
        borderWidth: 2.5,
        pointBackgroundColor: [
          "rgba(0, 0, 0, 1)",
          "rgba(97, 218, 251, 1)",
          "rgba(51, 51, 51, 1)",
          "rgba(76, 175, 80, 1)",
          "rgba(0, 117, 143, 1)",
          "rgba(228, 0, 70, 1)",
          "rgba(240, 80, 41, 1)",
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      r: {
        angleLines: { display: true },
        suggestedMin: 0,
        suggestedMax: 10,
        ticks: {
          color: "rgba(60, 255, 100, 1)",
          backdropColor: "transparent",
          stepSize: 1,
        },
        grid: {
          color: "rgba(230, 230, 230, 0.3)",
        },
        pointLabels: {
          color: [
          "rgba(0, 0, 0, 1)",
          "rgba(97, 218, 251, 1)",
          "rgba(51, 51, 51, 1)",
          "rgba(76, 175, 80, 1)",
          "rgba(0, 117, 143, 1)",
          "rgba(228, 0, 70, 1)",
          "rgba(240, 80, 41, 1)",
        ],
          font: {
            size: 13,
            weight: "bold",
          },
        },
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
  };

  return (
    <div className={styles.skills}>
      <h1 className={styles.skills__title}>Habilidades</h1>
      <Radar data={data} options={options} className={styles.skills__graphic} />
    </div>
  );
}

export { SkillsPage };
