import GoogleMap from "@/components/GoogleMap";
import Sidebar from "@/components/Sidebar";
import { Card } from "@/components/ui/card";
import { IconMenu2 } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { BarChartDashboard } from "./BarChartDashboard";
import { LightCovrageChart } from "./LightCovrageChart";

const Dashboard = () => {
  const [toggle, setToggle] = useState(false);

  const toggleCardVisibility = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    const handleBodyOverflow = () => {
      document.body.classList.toggle('overflow-hidden', toggle);
      // document.body.classList.toggle('mr-1', toggle);
    };

    handleBodyOverflow();
    document.addEventListener('DOMContentLoaded', handleBodyOverflow);
    return () => {
      document.removeEventListener('DOMContentLoaded', handleBodyOverflow);
    };
  }, [toggle]);
  return (
    <>
      {toggle && <div onClick={toggleCardVisibility} className="bg-black/50 fixed inset-0 z-30 lg:hidden"></div>}
      <div className="bg-home-image font-inter">
        <div className="mx-auto min-h-screen grid lg:grid-cols-[344px_1fr] 2xl:max-w-[1600px] p-3 sm:p-5 lg:py-16 lg:gap-10 2xl:gap-14">
          <div>
            <Sidebar toggleCardVisibility={toggleCardVisibility} className={toggle ? 'flex' : 'hidden'} />
          </div>
          <div>
            <div className="text-right flex items-center justify-end gap-4 sm:mr-8">
              <IconMenu2 onClick={toggleCardVisibility} className="text-white cursor-pointer lg:hidden" />
              <p className="text-white-100/90 text-14 md:text-16 font-500">nradwin</p>
            </div>
            <div className="mt-12 sm:mt-7 lg:mt-16 xl:mt-24 grid grid-cols-12 gap-4 sm:gap-6">
              <div className="col-span-12 xl:col-span-7 2xl:col-span-8">
                <Card className="col-span-8 h-full pl-0 md:pl-0 pr-4 py-4 md:py-7 md:pr-7">
                  <div className="flex flex-wrap justify-between items-center ps-5 gap-2 mb-2">
                    <h2 className="text-black-main text-20 md:text-26 font-700">Light Coverage</h2>
                    <div className="flex items-center gap-6">
                      <div className="flex">
                        <span className="hover:text-black-main text-black-main/50 font-500 text-12 px-2 cursor-pointer">7d</span>
                        <span className="hover:text-black-main text-black-main/50 font-500 text-12 px-2 cursor-pointer">2w</span>
                        <span className="hover:text-black-main text-black-main font-500 text-12 px-2 cursor-pointer">1m</span>
                        <span className="hover:text-black-main text-black-main/50 font-500 text-12 px-2 cursor-pointer">3m</span>
                        <span className="hover:text-black-main text-black-main/50 font-500 text-12 px-2 cursor-pointer">2023</span>
                      </div>
                      <div>
                        <img src="../images/svg/weather.svg" alt="image" />
                      </div>
                    </div>
                  </div>
                  <LightCovrageChart />
                </Card>
              </div>
              <div className="col-span-12 xl:col-span-5 2xl:col-span-4 grid grid-cols-12 gap-4">
                <div className="col-span-12 sm:col-span-5 grid gap-4">
                  <Card className="card-bg pt-12 pb-6 px-4 flex flex-wrap gap-3 justify-between sm:block">
                    <div>
                      <h2 className="text-black-main text-18 md:text-20 font-700 leading-7">05</h2>
                      <h4 className="text-black-main/40 text-12 font-500">Daily</h4>
                    </div>
                    <div className="sm:pt-12">
                      <BarChartDashboard />
                    </div>
                  </Card>
                  <Card className="card-bg pt-12 pb-6 px-4 flex flex-wrap gap-3 justify-between sm:block">
                    <div>
                      <h2 className="text-black-main text-18 md:text-20 font-700 leading-7">05</h2>
                      <h4 className="text-black-main/40 text-12 font-500">Daily</h4>
                    </div>
                    <div className="sm:pt-12">
                      <BarChartDashboard />
                    </div>
                  </Card>
                </div>
                <div className="col-span-12 sm:col-span-7 grid gap-4">
                  <Card className="card-bg px-6 py-9 flex flex-wrap flex-row-reverse sm:flex-col justify-between items-center sm:items-start gap-3">
                    <img className="h-14 " src="../images/svg/map-test2.svg" alt="image" />
                    <div className="">
                      <h2 className="text-black-main text-18 md:text-20 font-700 leading-7">3</h2>
                      <h4 className="text-black-main/40 text-12 font-500">Total Tasks</h4>
                    </div>
                  </Card>
                  <Card className="card-bg px-6 py-4 flex items-center flex-wrap gap-3 sm:items-start sm:flex-col justify-between">
                    <div>
                      <h2 className="text-black-main text-18 md:text-20 font-700 leading-7">3</h2>
                      <h4 className="text-black-main/40 text-12 font-500">Total Tasks</h4>
                    </div>
                    <div className="w-full flex justify-end">
                      <BarChartDashboard />
                    </div>
                  </Card>
                </div>

              </div>
            </div>
            <div className="flex flex-col xl:grid grid-cols-12 gap-4 lg:gap-7 2xl:gap-14 mt-4 lg:mt-8">
              <div className="col-span-12 xl:col-span-7 grid gap-4 lg:gap-9">
                <div>
                  <Card className="py-5 px-3 sm:py-7 sm:px-5">
                    <h2 className="text-black-main text-18 md:text-20 font-700">Critical Condition</h2>
                    <div className="mt-2">
                      <div className="border-b border-[#979797]/10 py-5 items-center gap-3 justify-between grid grid-cols-12">
                        <div className="flex gap-4 col-span-12 sm:col-span-4">
                          <div>
                            <img className="h-14 w-14" src="../images/svg/demo-white.svg" alt="image" />
                          </div>
                          <div className="">
                            <h4 className="text-black-main/40 text-12 font-500 uppercase">GEO INFO</h4>
                            <h3 className="text-black-main text-16 font-700 uppercase">Cell 5</h3>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 col-span-12 sm:col-span-8">
                          <div className="hidden md:block ml-2 border-l border-[#979797]/30 h-[14px]"></div>
                          <div className="flex gap-2 2xl:gap-5 items-center flex-wrap sm:flex-nowrap w-full justify-between">
                            <div>
                              <div className="w-10 h-10">
                                <CircularProgressbar
                                  value={20}
                                  text={`${20}%`}
                                  styles={buildStyles({
                                    trailColor: 'transparent',
                                    pathColor: '#2196F3',
                                    textSize: '30px',
                                    textColor: 'rgba(0, 0, 0, 0.60)',
                                  })}
                                />
                              </div>
                            </div>
                            <div>
                              <div className="bg-red-200 p-1 px-2 sm:px-3 text-[13px] font-roboto font-400 rounded-full text-white whitespace-nowrap">
                                <span>Last Seen: 4 Weeks</span>
                              </div>
                            </div>
                            <div className="flex gap-2 cursor-pointer">
                              <h4 className="text-14 text-orange-100 font-700 whitespace-nowrap">See More</h4>
                              <img src="../images/svg/right-arrow-icon.svg" alt="image" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="py-5 items-center gap-3 justify-between grid grid-cols-12">
                        <div className="flex gap-4 col-span-12 sm:col-span-4">
                          <div>
                            <img className="h-14 w-14" src="../images/svg/demo-white.svg" alt="image" />
                          </div>
                          <div className="">
                            <h4 className="text-black-main/40 text-12 font-500 uppercase">GEO INFO</h4>
                            <h3 className="text-black-main text-16 font-700 uppercase">Cell 06</h3>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 col-span-12 sm:col-span-8">
                          <div className="hidden md:block ml-2 border-l border-[#979797]/30 h-[14px]"></div>
                          <div className="flex gap-2 2xl:gap-5 items-center flex-wrap sm:flex-nowrap w-full justify-between">
                            <div>
                              <div className="w-10 h-10">
                                <CircularProgressbar
                                  value={66}
                                  text={`${66}%`}
                                  styles={buildStyles({
                                    trailColor: 'transparent',
                                    pathColor: '#2196F3',
                                    textSize: '30px',
                                    textColor: 'rgba(0, 0, 0, 0.60)',
                                  })}
                                />
                              </div>
                            </div>
                            <div>
                              <div className="bg-yellow-100 p-1 px-2 sm:px-3 text-[13px] font-roboto font-400 rounded-full text-white whitespace-nowrap">
                                <span>Last Seen: 4 Weeks</span>
                              </div>
                            </div>
                            <div className="flex gap-2 cursor-pointer">
                              <h4 className="text-14 text-orange-100 font-700 whitespace-nowrap">See More</h4>
                              <img src="../images/svg/right-arrow-icon.svg" alt="image" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <Card className="px-4 py-5 pb-7 grid gap-8 sm:gap-12">
                    <h4 className="text-black-main/40 text-12 font-500 uppercase text-end">Echo</h4>
                    <h3 className="text-black-main text-16 font-700">Bennett Hermanoff</h3>
                  </Card>
                  <Card className="px-4 py-5 pb-7 grid gap-8 sm:gap-12">
                    <h4 className="text-black-main/40 text-12 font-500 uppercase text-end">Charles</h4>
                    <h3 className="text-black-main text-16 font-700">Maddie Wisinski</h3>
                  </Card>
                  <Card className="px-4 py-5 pb-7 grid gap-8 sm:gap-12">
                    <h4 className="text-black-main/40 text-12 font-500 uppercase text-end">Bravo</h4>
                    <h3 className="text-black-main text-16 font-700">Alex Motyka</h3>
                  </Card>
                </div>

              </div>
              <div className="col-span-12 xl:col-span-5 rounded-2xl">
                <GoogleMap />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard