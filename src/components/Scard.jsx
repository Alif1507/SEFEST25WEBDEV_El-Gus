import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Bar, Doughnut } from "react-chartjs-2";
// Import required components from Chart.js
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LineElement,
  LinearScale,
  PointElement,
  ArcElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Scard() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-in-out",
      once: false,
    });
  });

  return (
    <>
      <div className="flex gap-20 justify-center">
        <div className="mt-10" data-aos="fade-right">
          <Bar
            data={{
              labels: ["Akses Falitas Kesehatan", "Belum Akses Kesehatan"],
              datasets: [
                {
                  label: "Akses Kesehatan",
                  data: [80, 20, 100],
                  backgroundColor: [
                    "rgba(20,184, 166, 0.8)",
                    "rgba(33,97, 140, 0.8)",
                  ],
                },
              ],
            }}
          />
        </div>
        <div data-aos="fade-left">
          <Doughnut
            data={{
              labels: ["Sudah Vaksinasi", "Belum Belum Vaksinasi"],
              datasets: [
                {
                  label: "Akses Kesehatan",
                  data: [85, 15],
                  backgroundColor: [
                    "rgba(20,184, 166, 0.8)",
                    "rgba(33,97, 140, 0.8)",
                  ],
                },
              ],
            }}
          />
        </div>
        
      </div>
    </>
  );
}

export default Scard;
