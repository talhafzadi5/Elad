import React, { useEffect, useState } from "react";
import ReactToPdf from "react-to-pdf"
import "./style.scss"
import Column from "./Column";
import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import { Page } from "@react-pdf/renderer";


const File = (props: any) => {


    const ref: any = React.createRef();
    const options = {

        unit: 'px',
        width:3840,
        height:2160,
        format: "a4",
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
                        <div className="refWrapper" style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", height: '70em' }} ref={ref}>
                            <div style={{ position: "relative", height: '70em', width: "100%" }} className="back-image">
                                <img style={{ opacity: 0.25, backgroundSize: "cover", height: '70em', width: "100%" }} src="./eladalaluf.jpeg"></img>
                                <div className="list">
                                    <h4 style={{ direction: "rtl", textDecoration: "underline", letterSpacing: "1px" }}>תפריט תזונה</h4>

                                    <div className="list2tafrit" style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start" }}>
                                        <div> <h2 style={{ fontSize: "20px" }}>ארוחת-בוקר</h2>

                                            {props.data.filter((d: any) => d.meal === "בוקר").map((da: any) => {
                                                if (da.quantity > 1) {
                                                    return (
                                                        <>
                                                            <div style={{ fontSize: "15px", letterSpacing: "1px", width: "50vw" }} key={da.name}>• X{da.quantity} {da.name}
                                                                -
                                                                חלבון  - {da.proteinGram},
                                                                פחמימות -  {da.carbonGram},
                                                                שומנים -  {da.fatGram},
                                                                קלוריות -  {da.calories}
                                                            </div>
                                                        </>
                                                    )
                                                }
                                                else {
                                                    return (
                                                        <>
                                                            <div style={{ fontSize: "15px", letterSpacing: "1px", width: "50vw" }} key={da.name}>•{da.name} -
                                                                חלבון  - {da.proteinGram},
                                                                פחמימות -  {da.carbonGram},
                                                                שומנים -  {da.fatGram},
                                                                קלוריות -  {da.calories}
                                                            </div>
                                                        </>
                                                    )
                                                }

                                            })}</div>
                                        <div><h2 style={{ fontSize: "20px" }}>ארוחת-ביניים-ראשונה</h2>
                                            {props.data.filter((d: any) => d.meal === "ביניים ראשונה").map((da: any) => {
                                                if (da.quantity > 1) {
                                                    return (
                                                        <>
                                                            <div style={{ fontSize: "15px", letterSpacing: "1px", width: "50vw" }} key={da.name}>• X{da.quantity} {da.name}
                                                                -
                                                                חלבון  - {da.proteinGram},
                                                                פחמימות -  {da.carbonGram},
                                                                שומנים -  {da.fatGram},
                                                                קלוריות -  {da.calories}
                                                            </div>
                                                        </>
                                                    )
                                                }
                                                else {
                                                    return (
                                                        <>
                                                            <div style={{ fontSize: "15px", letterSpacing: "1px", width: "50vw" }} key={da.name}>•{da.name} -
                                                                חלבון  - {da.proteinGram},
                                                                פחמימות -  {da.carbonGram},
                                                                שומנים -  {da.fatGram},
                                                                קלוריות -  {da.calories}
                                                            </div>
                                                        </>
                                                    )
                                                }
                                            })}</div>
                                        <div><h2 style={{ fontSize: "20px" }}>ארוחת-צהריים</h2>
                                            {props.data.filter((d: any) => d.meal === "צהריים").map((da: any) => {
                                                if (da.quantity > 1) {
                                                    return (
                                                        <>
                                                            <div style={{ fontSize: "15px", letterSpacing: "1px", width: "50vw" }} key={da.name}>• X{da.quantity} {da.name}
                                                                -
                                                                חלבון  - {da.proteinGram},
                                                                פחמימות -  {da.carbonGram},
                                                                שומנים -  {da.fatGram},
                                                                קלוריות -  {da.calories}
                                                            </div>
                                                        </>
                                                    )
                                                }
                                                else {
                                                    return (
                                                        <>
                                                            <div style={{ fontSize: "15px", letterSpacing: "1px", width: "50vw" }} key={da.name}>•{da.name} -
                                                                חלבון  - {da.proteinGram},
                                                                פחמימות -  {da.carbonGram},
                                                                שומנים -  {da.fatGram},
                                                                קלוריות -  {da.calories}
                                                            </div>
                                                        </>
                                                    )
                                                }
                                            })}</div>
                                        <div> <h2 style={{ fontSize: "20px" }}>ארוחת-ביניים-שניה</h2>
                                            {props.data.filter((d: any) => d.meal === "ביניים שנייה").map((da: any) => {
                                                if (da.quantity > 1) {
                                                    return (
                                                        <>
                                                            <div style={{ fontSize: "15px", letterSpacing: "1px", width: "50vw" }} key={da.name}>• X{da.quantity} {da.name}
                                                                -
                                                                חלבון  - {da.proteinGram},
                                                                פחמימות -  {da.carbonGram},
                                                                שומנים -  {da.fatGram},
                                                                קלוריות -  {da.calories}
                                                            </div>
                                                        </>
                                                    )
                                                }
                                                else {
                                                    return (
                                                        <>
                                                            <div style={{ fontSize: "15px", letterSpacing: "1px", width: "50vw" }} key={da.name}>•{da.name} -
                                                                חלבון  - {da.proteinGram},
                                                                פחמימות -  {da.carbonGram},
                                                                שומנים -  {da.fatGram},
                                                                קלוריות -  {da.calories}
                                                            </div>
                                                        </>
                                                    )
                                                }
                                            })}</div>
                                        <div> <h2 style={{ fontSize: "20px" }}>ארוחת-ערב</h2>
                                            {props.data.filter((d: any) => d.meal === "ערב").map((da: any) => {
                                                if (da.quantity > 1) {
                                                    return (
                                                        <>
                                                            <div style={{ fontSize: "15px", letterSpacing: "1px", width: "50vw" }} key={da.name}>• X{da.quantity} {da.name}
                                                                -
                                                                חלבון  - {da.proteinGram},
                                                                פחמימות -  {da.carbonGram},
                                                                שומנים -  {da.fatGram},
                                                                קלוריות -  {da.calories}
                                                            </div>
                                                        </>
                                                    )
                                                }
                                                else {
                                                    return (
                                                        <>
                                                            <div style={{ fontSize: "15px", letterSpacing: "1px", width: "50vw" }} key={da.name}>•{da.name} -
                                                                חלבון  - {da.proteinGram},
                                                                פחמימות -  {da.carbonGram},
                                                                שומנים -  {da.fatGram},
                                                                קלוריות -  {da.calories}
                                                            </div>
                                                        </>
                                                    )
                                                }
                                            })}</div>
                                        <div> <h2 style={{ fontSize: "20px" }}>סך-הכל</h2>
                                            {props.data.filter((d: any) => d.name === "סך הכל").map((da: any) => {
                                                if (da.quantity > 1) {
                                                    return (
                                                        <>
                                                            <div style={{ fontSize: "15px", letterSpacing: "1px", width: "50vw" }} key={da.name}>• X{da.quantity} {da.name}
                                                                -
                                                                חלבון  - {da.proteinGram},
                                                                פחמימות -  {da.carbonGram},
                                                                שומנים -  {da.fatGram},
                                                                קלוריות -  {da.calories}
                                                            </div>
                                                        </>
                                                    )
                                                }
                                                else {
                                                    return (
                                                        <>
                                                            <div style={{ fontSize: "15px", letterSpacing: "1px", width: "50vw" }} key={da.name}>•{da.name} -
                                                                חלבון  - {da.proteinGram},
                                                                פחמימות -  {da.carbonGram},
                                                                שומנים -  {da.fatGram},
                                                                קלוריות -  {da.calories}
                                                            </div>
                                                        </>
                                                    )
                                                }
                                            })}</div>
                                        <div> <h2 style={{ fontSize: "20px" }}>אחוז-קלורי</h2>
                                            {props.data.filter((d: any) => d.name === "אחוז קלורי").map((da: any) => {
                                                if (da.quantity > 1) {
                                                    return (
                                                        <>
                                                            <div style={{ fontSize: "15px", letterSpacing: "1px", width: "50vw" }} key={da.name}>• X{da.quantity} {da.name}
                                                                -
                                                                חלבון  - {da.proteinGram},
                                                                פחמימות -  {da.carbonGram},
                                                                שומנים -  {da.fatGram},
                                                                קלוריות -  {da.calories}
                                                            </div>
                                                        </>
                                                    )
                                                }
                                                else {
                                                    return (
                                                        <>
                                                            <div style={{ fontSize: "15px", letterSpacing: "1px", width: "50vw" }} key={da.name}>•{da.name} -
                                                                חלבון  - {da.proteinGram},
                                                                פחמימות -  {da.carbonGram},
                                                                שומנים -  {da.fatGram},
                                                                קלוריות -  {da.calories}
                                                            </div>
                                                        </>
                                                    )
                                                }
                                            })}</div>


                                    <div style={{ wordSpacing: "3px", letterSpacing: "1px", fontSize: "10px", display: "flex", justifyContent: "flex-end", position: "absolute", bottom: 0, flexDirection: "column" }}>
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

            </div>

        </>
    )
}

export default File;