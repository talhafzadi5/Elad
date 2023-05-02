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
        format: "a1",
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
                        <div style={{ position: "relative", height: "3150px", width: "100vw" }} className="back-image">
                            <img style={{ opacity: 0.25, height: "3150px", width: "100vw", backgroundSize: "cover" }} src="./eladalaluf.jpeg"></img>
                            <div className="list">
                                <h1 style={{ direction: "rtl", textDecoration: "underline", letterSpacing: "1px" }}>תכנית אימונים</h1>

                                <div className="list2" style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start" }}>
                                    <h1 style={{ letterSpacing: "1px", textDecoration: "underline" }}>יום ראשון</h1>
                                    {props.data.filter((d: any) => d.day === "יום ראשון").length === 0 ? null :
                                        <>
                                            <div className="rows">
                                                <div>תרגיל</div>
                                                <div>סטים</div>
                                                <div>חזרות</div>
                                                <div>מנוחה</div>
                                                <div>קטגוריה</div>
                                                <div>קבוצת שריר</div>
                                            </div>

                                            {props.data.filter((d: any) => d.day === "יום ראשון").map((da: any) => {
                                                return (
                                                    <>


                                                        <div style={{ fontSize: "25px", letterSpacing: "1px" }} >

                                                            <Column exercise={da.exercise} rest={da.rest} reps={da.reps} sets={da.sets} category={da.category} group={da.group} />
                                                        </div>

                                                    </>
                                                )



                                            })}
                                        </>}

                                    <h1 style={{ letterSpacing: "1px", textDecoration: "underline" }}>יום שני</h1>
                                    {props.data.filter((d: any) => d.day === "יום שני").length === 0 ? null :
                                        <>
                                            <div className="rows">
                                                <div>תרגיל</div>
                                                <div>סטים</div>
                                                <div>חזרות</div>
                                                <div>מנוחה</div>
                                                <div>קטגוריה</div>
                                                <div>קבוצת שריר</div>
                                            </div>

                                            {props.data.filter((d: any) => d.day === "יום שני").map((da: any) => {
                                                return (
                                                    <>


                                                        <div style={{ fontSize: "25px", letterSpacing: "1px" }} >

                                                            <Column exercise={da.exercise} rest={da.rest} reps={da.reps} sets={da.sets} category={da.category} group={da.group} />
                                                        </div>

                                                    </>
                                                )



                                            })}
                                        </>}
                                    <h1 style={{ letterSpacing: "1px", textDecoration: "underline" }}>יום שלישי</h1>
                                    {props.data.filter((d: any) => d.day === "יום שלישי").length === 0 ? null :
                                        <>
                                            <div className="rows">
                                                <div>תרגיל</div>
                                                <div>סטים</div>
                                                <div>חזרות</div>
                                                <div>מנוחה</div>
                                                <div>קטגוריה</div>
                                                <div>קבוצת שריר</div>
                                            </div>

                                            {props.data.filter((d: any) => d.day === "יום שלישי").map((da: any) => {
                                                return (
                                                    <>


                                                        <div style={{ fontSize: "25px", letterSpacing: "1px" }} >

                                                            <Column exercise={da.exercise} rest={da.rest} reps={da.reps} sets={da.sets} category={da.category} group={da.group} />
                                                        </div>

                                                    </>
                                                )



                                            })}
                                        </>}
                                    <h1 style={{ letterSpacing: "1px", textDecoration: "underline" }}>יום רביעי</h1>

                                    {props.data.filter((d: any) => d.day === "יום רביעי").length === 0 ? null :
                                        <>
                                            <div className="rows">
                                                <div>תרגיל</div>
                                                <div>סטים</div>
                                                <div>חזרות</div>
                                                <div>מנוחה</div>
                                                <div>קטגוריה</div>
                                                <div>קבוצת שריר</div>
                                            </div>

                                            {props.data.filter((d: any) => d.day === "יום רביעי").map((da: any) => {
                                                return (
                                                    <>


                                                        <div style={{ fontSize: "25px", letterSpacing: "1px" }} >

                                                            <Column exercise={da.exercise} rest={da.rest} reps={da.reps} sets={da.sets} category={da.category} group={da.group} />
                                                        </div>

                                                    </>
                                                )



                                            })}
                                        </>}
                                    <h1 style={{ letterSpacing: "1px", textDecoration: "underline" }}>יום חמישי</h1>
                                    {props.data.filter((d: any) => d.day === "יום חמישי").length === 0 ? null :
                                        <>
                                            <div className="rows">
                                                <div>תרגיל</div>
                                                <div>סטים</div>
                                                <div>חזרות</div>
                                                <div>מנוחה</div>
                                                <div>קטגוריה</div>
                                                <div>קבוצת שריר</div>
                                            </div>

                                            {props.data.filter((d: any) => d.day === "יום חמישי").map((da: any) => {
                                                return (
                                                    <>


                                                        <div style={{ fontSize: "25px", letterSpacing: "1px" }} >

                                                            <Column exercise={da.exercise} rest={da.rest} reps={da.reps} sets={da.sets} category={da.category} group={da.group} />
                                                        </div>

                                                    </>
                                                )



                                            })}
                                        </>}
                                    <h1 style={{ letterSpacing: "1px", textDecoration: "underline" }}>יום שישי</h1>

                                    {props.data.filter((d: any) => d.day === "יום שישי").length === 0 ? null :
                                        <>
                                            <div className="rows">
                                                <div>תרגיל</div>
                                                <div>סטים</div>
                                                <div>חזרות</div>
                                                <div>מנוחה</div>
                                                <div>קטגוריה</div>
                                                <div>קבוצת שריר</div>
                                            </div>

                                            {props.data.filter((d: any) => d.day === "יום שישי").map((da: any) => {
                                                return (
                                                    <>


                                                        <div style={{ fontSize: "25px", letterSpacing: "1px" }} >

                                                            <Column exercise={da.exercise} rest={da.rest} reps={da.reps} sets={da.sets} category={da.category} group={da.group} />
                                                        </div>

                                                    </>
                                                )



                                            })}
                                        </>}
                                    <h1 style={{ letterSpacing: "1px", textDecoration: "underline" }}>יום שבת</h1>

                                    {props.data.filter((d: any) => d.day === "יום שבת").length === 0 ? null :
                                        <>
                                            <div className="rows">
                                                <div>תרגיל</div>
                                                <div>סטים</div>
                                                <div>חזרות</div>
                                                <div>מנוחה</div>
                                                <div>קטגוריה</div>
                                                <div>קבוצת שריר</div>
                                            </div>

                                            {props.data.filter((d: any) => d.day === "יום שבת").map((da: any) => {
                                                return (
                                                    <>


                                                        <div style={{ fontSize: "25px", letterSpacing: "1px" }} >

                                                            <Column exercise={da.exercise} rest={da.rest} reps={da.reps} sets={da.sets} category={da.category} group={da.group} />
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