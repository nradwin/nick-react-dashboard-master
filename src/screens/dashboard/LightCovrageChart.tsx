import IconChartRedSvg from '@/components/icons/IconChartRedSvg';
import 'react-circular-progressbar/dist/styles.css';
import {
  CartesianGrid,
  Label,
  Legend,
  Line,
  LineChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';

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

export const LightCovrageChart = () => {

  const entryWithName21: any = data.find(entry => entry.name === '21');
  const maxPv = Math.max(...data.map(entry => entry.pv));
  const scalingFactor = 0.89;
  return (
    <ResponsiveContainer className="m-auto !w-full !h-64 rounded-br-3xl">
      <LineChart
        className="!w-full !h-64 mx-auto rounded-br-3xl"
        data={data}
        margin={{
          top: 50,
          right: 20,
          left: 20,
          bottom: 20,
        }}
      >
        <defs>
          <linearGradient id="colorGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#FF7940', stopOpacity: 1 }} />
            <stop offset="30%" style={{ stopColor: '#DB0019', stopOpacity: 1 }} />
            <stop offset="80%" style={{ stopColor: '#DB0019', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#FF7940', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <CartesianGrid vertical={false} stroke="#D84E1314" />
        <XAxis
          dy={12}
          axisLine={{ stroke: '#D84E1314' }}
          tickLine={false}
          tick={{ fill: '#73739E', fontSize: '10px', fontWeight: '500' }}
          dataKey="name"
        />
        <YAxis
          dy={-5}
          dx={-12}
          axisLine={{ stroke: 'transparent' }}
          tickLine={false}
          tick={{ fill: '#73739E', fontSize: '10px', fontWeight: '500' }}
        />
        <Tooltip cursor={false} />
        <Legend
          wrapperStyle={{ top: 0 }}
          verticalAlign="top"
          align="left"
          content={(props) => {
            const { payload } = props;
            if (!payload) {
              return null;
            }
            return (
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {payload.map((entry, index) => (
                  <li key={`item-${index}`} style={{ color: "#00000066", fontSize: "14px" }}>
                    1 Month &nbsp;
                    {entry.value}
                  </li>
                ))}
              </ul>
            );
          }}
        />
        <ReferenceLine x="21" stroke="#DB0019" strokeWidth={0} label={<Label fill="#2A01B0" fontWeight={700} className="rechart-top-label" style={{ outline: '3px solid #F1F4F7', padding: '5px' }}>75% 89%</Label>} />
        <foreignObject x="20" width="100%" height="100%">
          <div className="absolute  w-full bg-[#eef2f699] left-[50%]  bottom-0 h-[83%]"></div>
        </foreignObject>
        <foreignObject x="20" width="100%" height="100%">
          <div className="absolute left-[50%] w-1 sm:w-10 -translate-x-1/2 bottom-[16%] h-2/3 bg-[#DAE2EA] rounded-bl-full rounded-br-full">
            <div className='bg-red-100 h-1/2 rounded-bl-full rounded-br-full absolute bottom-0 w-full'
              style={{ height: `${(entryWithName21?.pv / maxPv) * scalingFactor * 100}%` }}></div>
            <div className='hidden sm:block h-1/2 rounded-bl-full rounded-br-full absolute bottom-0 w-full'
              style={{ height: `${(entryWithName21?.pv / maxPv) * scalingFactor * 100 + 4}%` }}>
              <IconChartRedSvg />
            </div>
          </div>
        </foreignObject>
        <Line
          className="w-full"
          type="monotone"
          dataKey="pv"
          strokeWidth={3}
          dot={false}
          stroke="url(#colorGradient)"
        />
        {/* <ReferenceLine x="20" stroke="#DB0019" label={<Label fill="#2A01B0" fontWeight={700} className="rechart-top-label" style={{ outline: '3px solid #F1F4F7', padding: '5px' }}>75% 89%</Label>} />
        <Line
          className="w-full"
          type="monotone"
          dataKey="pv"
          strokeWidth={3}
          dot={false}
          stroke="url(#colorGradient)"
        /> */}
      </LineChart>
    </ResponsiveContainer >
  )
}