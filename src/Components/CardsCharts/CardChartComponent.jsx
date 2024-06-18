import React from "react";
import "./styles.css";
import ChartBuilder from "./ChartBuilder";

const CardChartComponent = ({ CardChartData, id, header, text, text2 }) => {

 const cardLink =()=>{
  alert('clicked')
 }
  return (
    <>
      <section className="cc-container">
        <div className="cc-cont-border">
          <div className="cc-cont-content">
            <div className="cc-cont-content-left">
              <div className="cc-cont-header" onClick={cardLink}>{header}</div>
              <div className="cc-cont-text">{text}</div>
              <div className="cc-cont-text2">{text2}</div>
            </div>
            <div className="cc-cont-content-right">
              {/* <div className="cc-cont-chart"> */}
              <ChartBuilder id={id} advance={CardChartData}/>
              {/* </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CardChartComponent;
