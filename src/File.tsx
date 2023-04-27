import React, { useEffect, useState } from "react";
import ReactToPdf from "react-to-pdf"
import "./style.scss"
import Column from "./Column";
import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";


const File = (props: any) => {


    const ref: any = React.createRef();
    const options = {

        unit: 'in',
        format: "a2",
        color: "black",

    };
    return (
        <>
            <div className="File">
                <ReactToPdf charSpace={300} targetRef={ref} options={options}>
                    {({ toPdf }: any) =>
                        <Button icon={<DownloadOutlined />} onClick={toPdf}>ייצוא ל-pdf</Button>}
                </ReactToPdf>
                <div style={{ position: "absolute", zIndex: -1000, opacity: 0 }}>
                    <div className="tafrit" ref={ref}>
                        <div style={{ position: "relative", height: "2200px", width: "100vw"}} className="back-image">
                            <img style={{ opacity: 0.25, height: "2200px", width: "100vw", backgroundSize:"cover" }} src="./eladalaluf.jpeg"></img>
                            <div className="list">
                            <h1 style={{ direction: "rtl", textDecoration: "underline" }}>תפריט-תזונה</h1>

                                <div className="list2">
                                    <div> <h2 style={{fontSize:"30px"}}>ארוחת-בוקר</h2>
                                    
                                        {props.data.filter((d: any) => d.meal === "בוקר").map((da: any) => {
                                            return (
                                                <>
                                                       <div style={{fontSize:"25px", letterSpacing:"1px"}} key={da.name}>•{da.name} -
                                                        חלבון  - {da.proteinGram},
                                                        פחמימות -  {da.carbonGram},
                                                        שומנים -  {da.fatGram},
                                                        קלוריות -  {da.calories}
                                                    </div>
                                                </>
                                            )
                                        })}</div>
                                    <div><h2 style={{fontSize:"30px"}}>ארוחת-ביניים-ראשונה</h2>
                                        {props.data.filter((d: any) => d.meal === "ביניים ראשונה").map((da: any) => {
                                            return (
                                                <>
                                                    <div style={{fontSize:"25px", letterSpacing:"1px"}}>•{da.name} -
                                                        חלבון  - {da.proteinGram},
                                                        פחמימות -  {da.carbonGram},
                                                        שומנים -  {da.fatGram},
                                                        קלוריות -  {da.calories}
                                                    </div>                                    </>
                                            )
                                        })}</div>
                                    <div><h2 style={{fontSize:"30px"}}>ארוחת-צהריים</h2>
                                        {props.data.filter((d: any) => d.meal === "צהריים").map((da: any) => {
                                            return (
                                                <>
                                                    <div style={{fontSize:"25px", letterSpacing:"1px"}}>•{da.name} -
                                                        חלבון  - {da.proteinGram},
                                                        פחמימות -  {da.carbonGram},
                                                        שומנים -  {da.fatGram},
                                                        קלוריות -  {da.calories}
                                                    </div>
                                                </>
                                            )
                                        })}</div>
                                    <div> <h2 style={{fontSize:"30px"}}>ארוחת-ביניים-שניה</h2>
                                        {props.data.filter((d: any) => d.meal === "ביניים שנייה").map((da: any) => {
                                            return (
                                                <>
                                                    <div style={{fontSize:"25px", letterSpacing:"1px"}}>•{da.name} -
                                                        חלבון  - {da.proteinGram},
                                                        פחמימות -  {da.carbonGram},
                                                        שומנים -  {da.fatGram},
                                                        קלוריות -  {da.calories}
                                                    </div>
                                                </>
                                            )
                                        })}</div>
                                    <div> <h2 style={{fontSize:"30px"}}>ארוחת-ערב</h2>
                                        {props.data.filter((d: any) => d.meal === "ערב").map((da: any) => {
                                            return (
                                                <>
                                                    <div style={{fontSize:"25px", letterSpacing:"1px"}}>•{da.name} -
                                                        חלבון  - {da.proteinGram},
                                                        פחמימות -  {da.carbonGram},
                                                        שומנים -  {da.fatGram},
                                                        קלוריות -  {da.calories}
                                                    </div>
                                                </>
                                            )
                                        })}</div>
                                    <div> <h2 style={{fontSize:"30px"}}>סך-הכל</h2>
                                        {props.data.filter((d: any) => d.name === "סך הכל").map((da: any) => {
                                            return (
                                                <>
                                                    <div style={{fontSize:"25px", letterSpacing:"1px"}} key={da.name}>
                                                        חלבון  - {da.proteinGram},
                                                        פחמימות -  {da.carbonGram},
                                                        שומנים -  {da.fatGram},
                                                        קלוריות -  {da.calories}
                                                    </div>
                                                </>
                                            )
                                        })}</div>
                                    <div> <h2 style={{fontSize:"30px"}}>אחוז-קלורי</h2>
                                        {props.data.filter((d: any) => d.name === "אחוז קלורי").map((da: any) => {
                                            return (
                                                <>
                                                    <div style={{fontSize:"25px", letterSpacing:"1px"}}>
                                                        חלבון  - {da.proteinGram},
                                                        פחמימות -  {da.carbonGram},
                                                        שומנים -  {da.fatGram},
                                                        קלוריות -  {da.calories}
                                                    </div>
                                                </>
                                            )
                                        })}</div>


                                </div>
                                <div style={{ wordSpacing: "5px",letterSpacing:"1px", display:"flex", justifyContent:"flex-end",position:"absolute", bottom:0, flexDirection:"column"}}>
                                    <div >
                                        מסמך זה אינו מהווה תחליף להתוויות או הנחיות רפואיות למיניהן
                                    </div>
                                    <div>
                                        יש להיבדק ולהיוועץ עם רופא לפני תחילת התוכנית והייעוץ התזונתי הנ"ל על מנת לוודא בריאות מלאה ויכולת לבצע את התוכנית בנוסף יש להיוועץ בחדר הכושר במאמן על מנת ללמוד את ביצוע התרגילים כראוי ולמנוע פגיעה אפשרית
                                    </div>
                                    <div>
                                        ע"פ חוק אין להתחיל תוכנית אימונים חדשה ללא אישור ובדיקה של מאמן הכושר בחדר הכושר בו את/ה מתאמן/ת בנוסף לאישור רפואי מרופא ההמלצות הנ"ל אינן בגדר חובה או באות לטפל או להחליף טיפול רפואי בבעיות בריאותיות/רפואיות למיניהן התפריט ותוכנית האימונים הנם בגדר המלצה וייעוץ בלבד ובאחריות המתאמן
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default File;