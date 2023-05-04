import React, { useEffect, useState } from "react";
import ReactToPdf from "react-to-pdf"
import "./style.scss"
import Column from "../src/Column";
import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";


const WorkoutFile = (props: any) => {
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
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start" }} ref={ref}>
                        <div style={{ position: "relative", height: "2245px", width: "120vw" }} className="back-image">
                            <img style={{ opacity: 0.25, height: "2245px", width: "120vw", backgroundSize: "cover" }} src="./eladalaluf.jpeg"></img>
                            <div className="list">
                                <h1 style={{ direction: "rtl", textDecoration: "underline", letterSpacing: "1px" }}>תכנית אימונים</h1>

                                <div className="list2" style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start" }}>
                                    <h1 style={{ letterSpacing: "1px", textDecoration: "underline" }}>FBW</h1>
                                    {props.data.filter((d: any) => d.day === "FBW").length === 0 ? null :
                                        <>
                                            <div className="rows">
                                                <div>תרגיל</div>
                                                <div>סטים/ק״מ</div>
                                                <div>חזרות</div>
                                                <div>מנוחה</div>
                                                <div>קטגוריה</div>
                                                <div>קבוצת שריר</div>
                                            </div>

                                            {props.data.filter((d: any) => d.day === "FBW").map((da: any) => {
                                                return (
                                                    <>


                                                        <div style={{ fontSize: "25px", letterSpacing: "1px" }} >

                                                            <Column exercise={da.exercise} rest={da.rest} reps={da.reps} km={da.km} sets={da.sets} category={da.category} group={da.group} />
                                                        </div>

                                                    </>
                                                )



                                            })}
                                        </>}

                                    <h1 style={{ letterSpacing: "1px", textDecoration: "underline" }}>A</h1>
                                    {props.data.filter((d: any) => d.day === "A").length === 0 ? null :
                                        <>
                                            <div className="rows">
                                                <div>תרגיל</div>
                                                <div>סטים/ק״מ</div>
                                                <div>חזרות</div>
                                                <div>מנוחה</div>
                                                <div>קטגוריה</div>
                                                <div>קבוצת שריר</div>
                                            </div>

                                            {props.data.filter((d: any) => d.day === "A").map((da: any) => {
                                                return (
                                                    <>


                                                        <div style={{ fontSize: "25px", letterSpacing: "1px" }} >

                                                            <Column exercise={da.exercise} rest={da.rest} reps={da.reps} km={da.km} sets={da.sets} category={da.category} group={da.group} />
                                                        </div>

                                                    </>
                                                )



                                            })}
                                        </>}
                                    <h1 style={{ letterSpacing: "1px", textDecoration: "underline" }}>B</h1>
                                    {props.data.filter((d: any) => d.day === "B").length === 0 ? null :
                                        <>
                                            <div className="rows">
                                                <div>תרגיל</div>
                                                <div>סטים/ק״מ</div>
                                                <div>חזרות</div>
                                                <div>מנוחה</div>
                                                <div>קטגוריה</div>
                                                <div>קבוצת שריר</div>
                                            </div>

                                            {props.data.filter((d: any) => d.day === "B").map((da: any) => {
                                                return (
                                                    <>


                                                        <div style={{ fontSize: "25px", letterSpacing: "1px" }} >

                                                            <Column exercise={da.exercise} rest={da.rest} reps={da.reps} km={da.km} sets={da.sets} category={da.category} group={da.group} />
                                                        </div>

                                                    </>
                                                )



                                            })}
                                        </>}
                                    <h1 style={{ letterSpacing: "1px", textDecoration: "underline" }}>C</h1>

                                    {props.data.filter((d: any) => d.day === "C").length === 0 ? null :
                                        <>
                                            <div className="rows">
                                                <div>תרגיל</div>
                                                <div>סטים/ק״מ</div>
                                                <div>חזרות</div>
                                                <div>מנוחה</div>
                                                <div>קטגוריה</div>
                                                <div>קבוצת שריר</div>
                                            </div>

                                            {props.data.filter((d: any) => d.day === "C").map((da: any) => {
                                                return (
                                                    <>


                                                        <div style={{ fontSize: "25px", letterSpacing: "1px" }} >

                                                            <Column exercise={da.exercise} rest={da.rest} reps={da.reps} km={da.km} sets={da.sets} category={da.category} group={da.group} />
                                                        </div>

                                                    </>
                                                )



                                            })}
                                        </>}

                                    <div style={{ wordSpacing: "5px", letterSpacing: "1px", display: "flex", justifyContent: "flex-end", position: "absolute", bottom: 0, flexDirection: "column" }}>
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

export default WorkoutFile;