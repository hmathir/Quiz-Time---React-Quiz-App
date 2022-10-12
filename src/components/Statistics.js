import { useContext } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import { QuizContex } from "../layout/layout";

const Statistics = () => {
  const data = useContext(QuizContex);

  return (
    <div className="w-9/12 mx-auto mt-10">
      <div className="text-3xl">
        <h1>Chart for Quiz Amount and ID:</h1>
      </div>
      <div className="md:flex gap-5 justify-between">
        <div className="mt-20 md:hidden">
          <ResponsiveContainer width={"100%"} height={350}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis dataKey="total" />
              <Tooltip />
              <Legend />
              <Bar dataKey="total" fill="#8823d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="hidden md:block">
        <BarChart width={700} height={350} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis dataKey="total" />
              <Tooltip />
              <Legend />
              <Bar dataKey="total" fill="#8823d8" />
            </BarChart>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
