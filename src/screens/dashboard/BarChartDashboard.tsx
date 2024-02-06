import { FC } from 'react'; // Import FC (Functional Component) type
import { Bar, BarChart } from "recharts";

interface BarChartDashboardProps {
  className?: string; // Define className as an optional string prop
}
const data = [
  { name: '15', pv: 240 },
  { name: '16', pv: 139 },
  { name: '17', pv: 20 },
  { name: '18', pv: 190 },
  { name: '19', pv: 100 },
  { name: '20', pv: 200 },
  { name: '21', pv: 250 },
  { name: '22', pv: 210 },
  { name: '23', pv: 400 },
  { name: '24', pv: 220 },
  { name: '25', pv: 150 },
  { name: '26', pv: 250 },
  { name: '27', pv: 200 },
  { name: '28', pv: 300 },
];

export const BarChartDashboard: FC<BarChartDashboardProps> = ({ className }) => {
  return (
    <BarChart className={`max-w-[66px] !w-full !h-full ${className}`} width={730} height={250} data={data}>
      <Bar dataKey="pv" fill="#FA9980" radius={999} barSize={25} spacing={20} width={2} />
    </BarChart>
  );
};
