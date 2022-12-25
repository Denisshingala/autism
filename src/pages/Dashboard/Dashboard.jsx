import React from 'react'
import DashBoardOptionComponent from '../../components/DashBoardOptionComponent/DashBoardOptionComponent'
import FooterComponent from '../../components/Footer/FooterComponent'
import Navbar from '../../components/Navbar/NavbarComponent'
import './Dashboard.css'
import { Chart as ChartJS, ArcElement, Tooltip, Legend,LinearScale,BarElement,Title,CategoryScale } from 'chart.js';
import { Doughnut,Bar } from 'react-chartjs-2';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import InfoIcon from '@mui/icons-material/Info';
import {Game1,Game2} from "../../images/images"
ChartJS.register(ArcElement, Tooltip, Legend,CategoryScale,LinearScale,BarElement,Title);



const data = {
    labels: [
        "completed",
        "remaining"
      ],
      datasets: [{
        label: 'Weekly Performance',
        data: [300, 50],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 4,
        tooltips:"false",
        cutout:"70%",
      }],
      tooltips:false
  };
//  const options= {
//     aspectRatio: 1,
//     layout: {
//         padding: {
//             left: 0,
//             right: 0,
//             top: 0,
//             bottom: 0,
//         }
//     },
//     responsive: true,
//     cutoutPercentage: 90,
//     legend: {
//         display: false,
//     },
//     title: {
//         display: false,
//     },
// }
  const plugins = [{
    beforeDraw: function(chart) {
     var width = chart.width,
         height = chart.height,
         ctx = chart.ctx;
         ctx.restore();
         var fontSize = (height / 160).toFixed(2);
         ctx.font = fontSize + "em sans-serif";
         ctx.textBaseline = "top";
         var text = "88%",
         textX = Math.round((width - ctx.measureText(text).width) / 2),
         textY = height / 2;
         ctx.fillText(text, textX, textY);
         ctx.save();
    } 
  }]
  const data2 = {
    labels: ["January","February","March","April","May","June","July"],
    datasets: [{
      label: 'Screening time',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1,
      hoverOffset: 4,
    }]
  };
    const options2 = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Game Name',
      },
    },
  };
const Dashboard = () => {
  return (
    <>
    <Navbar/>
    <div className='container top-0'>
        <div className='row dashboard-title'>
            <div className='col-md-4 p-3'>
                <div className='dashboard-weekly d-flex align-items-center'>
                    <div>
                    Weekly Performance
                    </div>
                </div>
                <div className='dashboard-card'>
                    <div className='p-3'>
                        <div className='d-flex text-muted justify-content-between align-items-center'>
                            <div>
                                overall game usage
                            </div>
                            <div className='d-flex align-items-center'>
                                <InfoIcon className="dashboard-icon" onClick={()=>{console.log("hi")}}/>
                            </div>
                        </div>
                        <div className='d-flex align-items-center border-bottom border-3 '>
                            <h4>2 Hour</h4><span className='dashboard-time-tag'>&#9652;2 hour</span>
                        </div>
                    </div>
                    <div className='chart-section'>
                        <Doughnut className='charts-width' data={data} plugins={plugins} />
                    </div>
                </div>
            </div>
            <div className='col-md-8 p-3'>
                
                <div className='dashboard-screen-time d-flex justify-content-between align-items-center'>
                    <div className=''>
                        Screening time on activity
                    </div>
                    <div className='d-flex align-items-center'>
                        Game name <DashBoardOptionComponent/>
                    </div>
                </div>
                <div className='dashboard-card'>
                    <div className='p-3'>
                        <div className='d-flex justify-content-between align-items-center'>
                            <div>
                                Match the cards
                            </div>
                            <div className='d-flex text-muted align-items-center'>
                                <InfoIcon className="dashboard-icon" onClick={()=>{console.log("hi")}}/>
                            </div>
                        </div>
                        <div className='d-flex text-muted align-items-center border-bottom border-3 '>
                            <h6>color matching game of card</h6>
                        </div>
                    </div>
                    <div className='chart-section'>
                        <Bar className='charts-width' data={data2} options={options2}/>
                    </div>
                </div>
            </div>
        </div>
        <div className='row p-3'>
            Most Played Game
        </div>
        <div className='p-3'>
        <Swiper
        slidesPerView={4}
        spaceBetween={30}
        slidesPerGroup={4}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='most-played-game-card'>
                <img src={Game1}/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='most-played-game-card'>
                <img src={Game2}/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='most-played-game-card'>
                <img src={Game1}/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='most-played-game-card'>
                <img src={Game2}/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='most-played-game-card'>
                <img src={Game1}/>
            </div>
        </SwiperSlide>
      </Swiper>
        </div>
    </div>
    <FooterComponent/>
    </>
  )
}

export default Dashboard