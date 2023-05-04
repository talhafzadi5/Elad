import { DeleteTwoTone } from '@ant-design/icons';
import { Menu, Select, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React, { useEffect, useState } from 'react';
import File from "../src/File";
import "./style.scss"
import WorkoutFile from './WorkoutFile';

const WorkoutRoutine = () => {
    const [key2, setKey2] = useState<number>(0);
    const [day, setDay] = useState<string>("FBW");
    const [data, setData] = useState<any[]>([]);
    useEffect(() => {
        const localStorageData: any = localStorage.getItem("data2");
        const localStoragesortedkey: any = localStorage.getItem("key2");
        const localStoragesortedday: any = localStorage.getItem("day");

        if (localStoragesortedkey) {
            setKey2(JSON.parse(localStoragesortedkey))
        }
        if (localStorageData) {
            setData(JSON.parse(localStorageData))
        }
        if (localStoragesortedday) {
            setDay(JSON.parse(localStoragesortedday))

        }
    }, [])
    const handleSetsChange = (cell: any, value: any) => {
        const find = data.findIndex((item: any) => item.day === cell.day && item.exercise === cell.exercise);
        const next = [...data];
        next[find].sets = value;
        setData(next)

    }
    const handleRepsChange = (cell: any, value: any) => {
        const find = data.findIndex((item: any) => item.day === cell.day && item.exercise === cell.exercise);
        const next = [...data];
        next[find].reps = value;
        setData(next)

    }
    const handleRestChange = (cell: any, value: any) => {
        const find = data.findIndex((item: any) => item.day === cell.day && item.exercise === cell.exercise);
        const next = [...data];
        next[find].rest = value;
        setData(next)

    }
    const handleKMChange = (cell: any, value: any) => {
        const find = data.findIndex((item: any) => item.day === cell.day && item.exercise === cell.exercise);

        const next = [...data];
        console.log(next[find]);

        next[find].km = value;
        setData(next)
    }
    const handleDayChange = (value: any) => {
        setDay(value)
    }
    const clearData = () => {
        setData([])
        setKey2(0)
    }
    useEffect(() => {
        localStorage.setItem("data2", JSON.stringify(data))
        localStorage.setItem("key2", JSON.stringify(key2));
        localStorage.setItem("day", JSON.stringify(day));

    }, [data, day])
    const getColumns: (data: any[], setData: (data: any) => void, handleSetsChange: any, realData: any) => ColumnsType<any> = (data, setData, handleSetsChange, realData) => [

        {
            title: 'קבוצת שריר',
            dataIndex: 'group',
            key: 'group'
        },
        {
            title: 'תרגיל',
            dataIndex: 'exercise',
            key: 'exercise',
        },
        {
            title: 'קטגוריה',
            dataIndex: 'category',
            key: 'category',

        },
        {
            title: 'סטים/ק״מ',
            dataIndex: 'sets',
            key: 'sets',
            render: (text: any, h2: any, h: any) =>
                <div>
                    {h2.category !== "אירובי" ?
                        <>
                            <Select className='sets' value={h2.sets} onChange={(e: any) => handleSetsChange(h2, e)}

                                options={[
                                    {
                                        value: '1',
                                        label: '1',
                                        key: 1
                                    },
                                    {
                                        value: "2",
                                        label: "2",
                                        key: 2
                                    },
                                    {
                                        value: "3",
                                        label: "3",
                                        key: 3
                                    },
                                    {
                                        value: "4",
                                        label: "4",
                                        key: 4
                                    },
                                    {
                                        value: "5",
                                        label: "5",
                                        key: 5
                                    },
                                    {
                                        value: "6",
                                        label: "6",
                                        key: 6
                                    }
                                ]}></Select>
                        </> :
                        <Select className='km' value={h2.km} onChange={(e: any) => handleKMChange(h2, e)}

                            options={[
                                {
                                    value: '1',
                                    label: '1',
                                    key: 1
                                },
                                {
                                    value: "2",
                                    label: "2",
                                    key: 2
                                },
                                {
                                    value: "3",
                                    label: "3",
                                    key: 3
                                },
                                {
                                    value: "4",
                                    label: "4",
                                    key: 4
                                },
                                {
                                    value: "5",
                                    label: "5",
                                    key: 5
                                },
                                {
                                    value: "6",
                                    label: "6",
                                    key: 6
                                },
                                {
                                    value: "7",
                                    label: "7",
                                    key: 7
                                },
                                {
                                    value: "8",
                                    label: "8",
                                    key: 8
                                },
                                {
                                    value: "9",
                                    label: "9",
                                    key: 9
                                },
                                {
                                    value: "10",
                                    label: "10",
                                    key: 10
                                }
                            ]}></Select>}
                </div>

        },
        {
            title: 'חזרות',
            dataIndex: 'reps',
            key: 'reps',
            render: (text: any, vh: any, h: any) =>
                vh.category !== "אירובי" ?
                    <>
                        <Select className='sets' onChange={(e: any) => handleRepsChange(vh, e)} value={text}
                            options={[
                                {
                                    value: '1',
                                    label: '1',
                                    key: 1
                                },
                                {
                                    value: "2",
                                    label: "2",
                                    key: 2
                                },
                                {
                                    value: "3",
                                    label: "3",
                                    key: 3
                                },
                                {
                                    value: "4",
                                    label: "4",
                                    key: 4
                                },
                                {
                                    value: "5",
                                    label: "5",
                                    key: 5
                                },
                                {
                                    value: "6",
                                    label: "6",
                                    key: 6
                                },
                                {
                                    value: "7",
                                    label: "7",
                                    key: 7
                                },
                                {
                                    value: "8",
                                    label: "8",
                                    key: 8
                                },
                                {
                                    value: "9",
                                    label: "9",
                                    key: 9
                                },
                                {
                                    value: "10",
                                    label: "10",
                                    key: 10
                                },
                                {
                                    value: "11",
                                    label: "11",
                                    key: 11
                                }, {
                                    value: "12",
                                    label: "12",
                                    key: 12
                                }, {
                                    value: "13",
                                    label: "13",
                                    key: 13
                                }, {
                                    value: "14",
                                    label: "14",
                                    key: 14
                                }, {
                                    value: "15",
                                    label: "15",
                                    key: 15
                                }, {
                                    value: "16",
                                    label: "16",
                                    key: 16
                                }, {
                                    value: "17",
                                    label: "17",
                                    key: 17
                                }, {
                                    value: "18",
                                    label: "18",
                                    key: 18
                                }, {
                                    value: "19",
                                    label: "19",
                                    key: 19
                                }, {
                                    value: "20",
                                    label: "20",
                                    key: 20
                                },
                            ]}></Select>
                    </>
                    : null
        },
        {
            title: 'זמן מנוחה',
            dataIndex: 'rest',
            key: 'rest',
            render: (text: any, vh: any, h: any) =>
                vh.category !== "אירובי" ?
                    <>
                        <Select className='sets' onChange={(e: any) => handleRestChange(vh, e)} value={text}
                            options={[
                                {
                                    value: '1',
                                    label: '1',
                                    key: 1
                                },
                                {
                                    value: "1.5",
                                    label: "1.5",
                                    key: 2
                                }, {
                                    value: "2",
                                    label: "2",
                                    key: 3
                                }, {
                                    value: "2.5",
                                    label: "2.5",
                                    key: 4
                                }, {
                                    value: "3",
                                    label: "3",
                                    key: 5
                                },
                            ]}></Select>
                    </>
                    : null
        },
        {
            title: 'מחיקה',
            dataIndex: 'icon',
            key: 'icon',
            render: (text: any, item2: any) => <div onClick={() => {
                setData(realData.filter((item: any) => item.key !== item2.key))



            }} style={{ fontSize: "25px", cursor: "pointer" }}>{
                    text === "delete" ? <DeleteTwoTone /> : null

                }</div>

        }]

    const quadriceps: any = [{ name: "squat - סקוואט", category: "מוט חופשי" }, { name: "deep squat - דיפ סקוואט", category: "מוט חופשי" }, { name: "SM squat - סקוואט סמיט משין", category: "סמיט משין" }, { name: "סקוואט עם משקולת יד", category: "משקולות חופשיות" }, { name: "leg press - לחיצת רגליים עם מכונה", category: "מכשיר ייעודי" }, { name: "leg extension - פשיטת ברכיים עם מכונה", category: "מכשיר ייעודי" }]

    const butt: any = [{ name: "dead lift - דד ליפט", category: "מוט חופשי" }, { name: "lunges - מכרעים עם משקולות", category: "משקולות חופשיות" }, { name: "SM lunges - מכרעים סמיט משין", category: "סמיט משין" }, { name: "bulgarian lunge - לאנג' בולגרי", category: "משקולות חופשיות" }, { name: "הרחקת ירך כנגד פולי תחתון", category: "פולי תחתון" }, { name: "הרחקת ירך במכשיר ייעודי - בישיבה", category: "מכשיר ייעודי" }, { name: "קירוב ירך כנגד פולי תחתון", category: "פולי תחתון" }
        , { name: "קירוב ירך במכשיר ייעודי - בישיבה", category: "מכשיר ייעודי" }, { name: "פשיטת ירך כנגד פולי תחתון", category: "פולי תחתון" }, { name: "RDL - דד ליפט רומני", category: "מוט חופשי" }, { name: "stiff legged dead lift - סטיף לגד דד ליפט", category: "מוט חופשי" }, { name: "hip trust - היפ טרסט", category: "מוט חופשי" }, { name: "GOOD MORNING", category: "מוט חופשי" }]

    const hamstring: any = [{ name: "lying leg curls - כפיפת ברכיים עם מכונה", category: "מכשיר ייעודי" }, { name: "russian curl / glute ham raises", category: "משקל גוף" }]

    const twins: any = [{ name: "הרמת עקבים בסמיט משין", category: "סמיט משין" }, { name: "הרמת עקבים רגל רגל עם משקולת", category: "משקולות חופשיות" }, { name: "הרמת עקבים במכונה ייעודית ללחיצת רגליים", category: "מכשיר ייעודי" }, { name: "הרמת עקבים בישיבה במכשיר ייעודי", category: "מכשיר ייעודי" }, { name: "הרמת עקבים בישיבה - פלטות על הברכיים", category: "משקולות חופשיות" }]

    const midChest: any = [{ name: "שכיבות סמיכה", category: "משקל גוף" }, { name: "לחיצת חזה עם מוט / משקולות חופשיות", category: "מוט חופשי" }, { name: "לחיצת חזה בסמיט משין", category: "סמיט משין" }, { name: "לחיצת חזה במכשיר ייעודי", category: "מכשיר ייעודי" }, { name: "פרפר עם משקולות", category: "משקולות חופשיות" }, { name: "פרפר כנגד קרוס אובר ארוך", category: "פולי תחתון" }, { name: "פרפר במכונה ייעודית", category: "מכשיר ייעודי" }]

    const upperChest: any = [{ name: "לחיצת חזה בשיפוע חיובי עם מוט / משקולות חופשיות", category: "מוט חופשי" }, { name: "פרפר בשיפוע חיובי עם משקולות", category: "משקולות חופשיות" }, { name: "פרפר בשיפוע חיובי כנגד קורס אובר ארוך", category: "פולי תחתון" }, { name: "Decline Push-Ups - שכיבות סמיכה בשיפוע שלילי", category: "משקל גוף" }]

    const lowerChest: any = [{ name: "לחיצת חזה בשיפוע שלילי עם מוט / משקולות חופשיות", category: "מוט חופשי" }, { name: "cable crossovers - קירוב אופקי בהטיית גו בעמיגה כנגד פולי עליון ", category: "פולי עליון" }, { name: "parallel bar dips - מקבילים באחיזה רחבה", category: "משקל גוף" }, { name: "שכיבות סמיכה יהלום", category: "משקל גוף" }, { name: "Incline Push-Ups - שכיבות סמיכה בשיפוע חיובי", category: "משקל גוף" }]

    const back: any = [{ name: "משיכה מפולי עליון אחיזה צרה", category: "פולי עליון" }, { name: "משיכה מפולי עליון אחיזה רחבה", category: "פולי עליון" }, { name: "משיכה מפולי עליון אחיזה צרה - סופינצייה", category: "פולי עליון" }, { name: "עליות מתח - צר", category: "משקל גוף" }, { name: "עליות מתח - רחב", category: "משקל גוף" }, { name: "עליות מתח - סופינצייה", category: "משקל גוף" }, { name: "עליות מתח - גרביטון", category: "מכשיר ייעודי" }, { name: "pull over - פול אובר כנגד פולי עליון", category: "פולי עליון" }, { name: "pull over - פול אובר כנגד משקולת יד בשכיבה", category: "משקולות חופשיות" }, { name: "חתירה במכשיר ייעודי / פולי תחתון", category: "פולי תחתון" }, { name: "חתירה בעמידה יד יד כנגד פולי תחתון", category: "פולי תחתון" }, { name: "חתירה בהטיית גו על ספסל עם משקולת - יד יד", category: "משקולות חופשיות" }, { name: "חתירה ב T-BAR", category: "מכשיר ייעודי" }, { name: "Bent Over Row", category: "מוט חופשי" }]

    const trapeze: any = [{ name: "הרמת שכמות משקולות יד", category: "משקולות חופשיות" }, { name: "הרמת שכמות בסמיט משין", category: "סמיט משין" }, { name: "הרמת שכמות עם מוט חופשי", category: "מוט חופשי" }, { name: "הרמת שכמות כנגד פולי תחתון בקרוס אובר ארוך", category: "פולי תחתון" }, { name: "קירוב שכמות בשכיבה על ספסל בשיפוע חיובי עם מוט / משקולות יד", category: "משקולות חופשיות" }]

    const midShoulder: any = [{ name: "הרחקת כתף עם משקולות יד", category: "משקולות חופשיות" }, { name: "הרחקת כתף כנגד פולי תחתון יד יד", category: "" }, { name: "הרחקת כתף כנגד פולי תחתון בקרוס אובר ארוך", category: "" }, { name: "חתירה בעמידה ישרה עם מוט / סמיט משין / כנגד פולי תחתון / משקולות יד", category: "" }]

    const deltoid: any = [{ name: "לחיצת כתפיים משקולות יד", category: "משקולות חופשיות" }, { name: "לחיצת כתפיים במכשיר ייעודי", category: "מכשיר ייעודי" }, { name: "לחיצת כתפיים בשמיט משין", category: "סמיט משין" }]

    const backShoulder: any = [{ name: "הרחקה אופקית כנגד פולי עליון בקרוס אובר ארוך", category: "פולי עליון" }, { name: "הרחקה אופקית במכשיר ייעודי - פרפר הפוך", category: "מכשיר ייעודי" }, { name: "הרחקה אופקית עם משקולות יד בשכיבה על ספסל בשיפוע חיובי", category: "משקולות חופשיות" }, { name: "חתירה אופקית T-BAR", category: "מכשיר ייעודי" }, { name: "חתירה אופקית כנגד פולי תחתון", category: "פולי תחתון" }, { name: "Face Pulls", category: "פולי עליון" }]

    const frontShoulder: any = [{ name: "כפיפת כתף בעמידה יד יד", category: "משקולות חופשיות" }, { name: "כפיפת כתף בישיבה עם משקולות", category: "משקולות חופשיות" }, { name: "כפיפת כתף בעמידה כנגד פולי תחתון", category: "פולי תחתון" }, { name: "לחיצת כתפיים באחיזה צרה עם משקולות", category: "משקולות חופשיות" }]

    const triceps: any = [{ name: "פשיטת מרפקים כנגד פולי עליון", category: "פולי עליון" }, { name: "לחיצה צרפתית - משקולות יד", category: "משקולות חופשיות" }, { name: "KICK BACK - כנגד פולי תחתון", category: "פולי תחתון" }, { name: "פשיטת מרפקים עם הגב אל הפולי - עליון", category: "פולי עליון" }, { name: "מקבילים באחיזה צרה", category: "משקל גוף" }, { name: "ג'קסונים", category: "משקל גוף" }, { name: "שכיבות סמיכה צרות", category: "משקל גוף" }, { name: "לחיצת חזה באחיזה צרה", category: "מוט חופשי" }]

    const biceps: any = [{ name: "כפיפת מרפקים בעמידה עם משקולות", category: "משקולות חופשיות" }, { name: "כפיפת מרפקים כנגד פולי תחתון", category: "פולי תחתון" }, { name: "כפיפת מרפקים בעמידה - פטישים", category: "משקולות חופשיות" }, { name: "כפיפת מרפקים בעמידה עם מוט", category: "מוט חופשי" }, { name: "כפיפת מרפקים בישיבה בשיפוע חיובי", category: "משקולות חופשיות" }, { name: "כפיפת מרפקים יד יד על משענת ספספל בשיפוע חיובי", category: "משקולות חופשיות" }]

    const abs: any = [{ name: "כפיפות בטן כנגד פולי עליון על הברכיים", category: "פולי עליון" }, { name: "כפיפות בטן", category: "משקל גוף" }, { name: "ברכיים לחזה", category: "משקל גוף" }, { name: "ברכיים לחזה בתלייה על המתח", category: "משקל גוף" }, { name: "ברכיים לחזה בתלייה על המתח - אלכסונים", category: "משקל גוף" }, { name: "פלאנק", category: "משקל גוף" }, { name: "פלאנק עם רוטצייה מצד לצד", category: "משקל גוף" }, { name: "פלאנק צידי", category: "משקל גוף" }, { name: "כפיפות גו צידיות כנגד פולי תחתון / משקולת", category: "פולי תחתון" }, { name: "רוטצייה של עמוד השדרה כנגד פולי עליון", category: "פולי עליון" }, { name: "אופניים", category: "משקל גוף" }, { name: "russian twist", category: "משקל גוף" }, { name: "Mountain Climbers", category: "משקל גוף" }, { name: "V-Up", category: "משקל גוף" }, { name: "Heel Taps", category: "משקל גוף" }]

    const aerobic: any = [{ name: "ריצה", category: "אירובי" }, { name: "הליכה", category: "אירובי" }];

    return (
        <>
            <div className="workout-routine">
                <Select
                    className="meal"
                    style={{ width: "200px", fontSize: "30px", fontWeight: "bold", border: "1px solid black", borderRadius: "50px", marginBottom: "5px" }}
                    bordered={false}
                    placeholder="יום"
                    value={day}
                    onChange={handleDayChange}
                    options={[
                        {
                            value: 'FBW',
                            label: 'FBW',
                            key: 1
                        },
                        {
                            value: 'A',
                            label: 'A',
                            key: 2
                        },
                        {
                            value: 'B',
                            label: 'B',
                            key: 3

                        },
                        {
                            value: 'C',
                            label: 'C',
                            key: 4

                        }


                    ]}
                ></Select>
                <Menu className='workout-menu' mode="horizontal" style={{ direction: "rtl" }}
                >

                    <Menu.SubMenu key="quadriceps" title="ירך קדמית" theme={"dark"} >
                        {quadriceps.map((cell: any, key: string) => <Menu.Item key={`quadriceps_${key}`} onClick={() => {
                            const d = { exercise: cell.name, key: key2, day: day, category: cell.category, group: "ירך קדמית", sets: "1", reps: "1", rest: "1", icon: "delete" }
                            const check: any = data.find((d2: any) => d2.exercise === d.exercise && d2.day === d.day);
                            if (check === undefined) {
                                setData([d, ...data])
                                setKey2(key2 + 1)
                            }

                        }}>{cell.name}</Menu.Item>)}

                    </Menu.SubMenu>
                    <Menu.SubMenu key="butt" title="ישבן" theme={"dark"} >
                        {butt.map((cell: any, key: string) => <Menu.Item key={`butt_${key}`} onClick={() => {
                            const d = { exercise: cell.name, key: key2, day: day, category: cell.category, group: "ישבן", sets: "1", reps: "1", rest: "1", icon: "delete" }
                            const check: any = data.find((d2: any) => d2.exercise === d.exercise && d2.day === d.day);
                            if (check === undefined) {
                                setData([d, ...data])
                                setKey2(key2 + 1)
                            }


                        }}>{cell.name}</Menu.Item>)}

                    </Menu.SubMenu>
                    <Menu.SubMenu key="hamstring" title="ירך אחורית" theme={"dark"} >
                        {hamstring.map((cell: any, key: string) => <Menu.Item key={`hamstring_${key}`} onClick={() => {
                            const d = { exercise: cell.name, key: key2, day: day, category: cell.category, group: "ירך אחורית", sets: "1", reps: "1", rest: "1", icon: "delete" }
                            const check: any = data.find((d2: any) => d2.exercise === d.exercise && d2.day === d.day);
                            if (check === undefined) {
                                setData([d, ...data])
                                setKey2(key2 + 1)
                            }

                        }}>{cell.name}</Menu.Item>)}

                    </Menu.SubMenu>
                    <Menu.SubMenu key="twins" title="תאומים" theme={"dark"} >
                        {twins.map((cell: any, key: string) => <Menu.Item key={`twins_${key}`} onClick={() => {

                            const d = { exercise: cell.name, key: key2, day: day, category: cell.category, group: "תאומים", sets: "1", reps: "1", rest: "1", icon: "delete" }
                            const check: any = data.find((d2: any) => d2.exercise === d.exercise && d2.day === d.day);
                            if (check === undefined) {
                                setData([d, ...data])
                                setKey2(key2 + 1)
                            }

                        }}>{cell.name}</Menu.Item>)}

                    </Menu.SubMenu>
                    <Menu.SubMenu key="midChest" title="חזה אמצעי" theme={"dark"} >
                        {midChest.map((cell: any, key: string) => <Menu.Item key={`midChest_${key}`} onClick={() => {


                            const d = { exercise: cell.name, key: key2, day: day, category: cell.category, group: "חזה אמצעי", sets: "1", reps: "1", rest: "1", icon: "delete" }
                            const check: any = data.find((d2: any) => d2.exercise === d.exercise && d2.day === d.day);
                            if (check === undefined) {
                                setData([d, ...data])
                                setKey2(key2 + 1)
                            }

                        }}>{cell.name}</Menu.Item>)}

                    </Menu.SubMenu>
                    <Menu.SubMenu key="upperChest" title="חזה עליון" theme={"dark"} >
                        {upperChest.map((cell: any, key: string) => <Menu.Item key={`upperChest_${key}`} onClick={() => {


                            const d = { exercise: cell.name, key: key2, day: day, category: cell.category, group: "חזה עליון", sets: "1", reps: "1", rest: "1", icon: "delete" }
                            const check: any = data.find((d2: any) => d2.exercise === d.exercise && d2.day === d.day);
                            if (check === undefined) {
                                setData([d, ...data])
                                setKey2(key2 + 1)
                            }

                        }}>{cell.name}</Menu.Item>)}

                    </Menu.SubMenu>
                    <Menu.SubMenu key="lowerChest" title="חזה תחתון" theme={"dark"} >
                        {lowerChest.map((cell: any, key: string) => <Menu.Item key={`lowerChest_${key}`} onClick={() => {

                            const d = { exercise: cell.name, key: key2, day: day, category: cell.category, group: "חזה תחתון", sets: "1", reps: "1", rest: "1", icon: "delete" }
                            const check: any = data.find((d2: any) => d2.exercise === d.exercise && d2.day === d.day);
                            if (check === undefined) {
                                setData([d, ...data])
                                setKey2(key2 + 1)
                            }

                        }}>{cell.name}</Menu.Item>)}

                    </Menu.SubMenu>
                    <Menu.SubMenu key="back" title="גב" theme={"dark"} >
                        {back.map((cell: any, key: string) => <Menu.Item key={`back_${key}`} onClick={() => {

                            const d = { exercise: cell.name, key: key2, day: day, category: cell.category, group: "גב", sets: "1", reps: "1", rest: "1", icon: "delete" }
                            const check: any = data.find((d2: any) => d2.exercise === d.exercise && d2.day === d.day);
                            if (check === undefined) {
                                setData([d, ...data])
                                setKey2(key2 + 1)
                            }

                        }}>{cell.name}</Menu.Item>)}

                    </Menu.SubMenu>
                    <Menu.SubMenu key="trapeze" title="טרפזים" theme={"dark"} >
                        {trapeze.map((cell: any, key: string) => <Menu.Item key={`trapeze_${key}`} onClick={() => {

                            const d = { exercise: cell.name, key: key2, day: day, category: cell.category, group: "טרפזים", sets: "1", reps: "1", rest: "1", icon: "delete" }
                            const check: any = data.find((d2: any) => d2.exercise === d.exercise && d2.day === d.day);
                            if (check === undefined) {
                                setData([d, ...data])
                                setKey2(key2 + 1)
                            }

                        }}>{cell.name}</Menu.Item>)}

                    </Menu.SubMenu>
                    <Menu.SubMenu key="midShoulder" title="כתף אמצעית" theme={"dark"} >
                        {midShoulder.map((cell: any, key: string) => <Menu.Item key={`midShoulder_${key}`} onClick={() => {
                            const d = { exercise: cell.name, key: key2, day: day, category: cell.category, group: "כתף אמצעית", sets: "1", reps: "1", rest: "1", icon: "delete" }
                            const check: any = data.find((d2: any) => d2.exercise === d.exercise && d2.day === d.day);
                            if (check === undefined) {
                                setData([d, ...data])
                                setKey2(key2 + 1)
                            }


                        }}>{cell.name}</Menu.Item>)}

                    </Menu.SubMenu>

                </Menu>
                <Menu className='workout-menu' mode="horizontal" style={{ direction: "rtl" }}>
                    <Menu.SubMenu key="deltoid" title="שריר הדלתא" theme={"dark"} >
                        {deltoid.map((cell: any, key: string) => <Menu.Item key={`deltoid_${key}`} onClick={() => {

                            const d = { exercise: cell.name, key: key2, day: day, category: cell.category, group: "שריר הדלתא", sets: "1", reps: "1", rest: "1", icon: "delete" }
                            const check: any = data.find((d2: any) => d2.exercise === d.exercise && d2.day === d.day);
                            if (check === undefined) {
                                setData([d, ...data])
                                setKey2(key2 + 1)
                            }

                        }}>{cell.name}</Menu.Item>)}

                    </Menu.SubMenu>
                    <Menu.SubMenu key="backShoulder" title="כתף אחורית" theme={"dark"} >
                        {backShoulder.map((cell: any, key: string) => <Menu.Item key={`backShoulder_${key}`} onClick={() => {

                            const d = { exercise: cell.name, key: key2, day: day, category: cell.category, group: "כתף אחורית", sets: "1", reps: "1", rest: "1", icon: "delete" }
                            const check: any = data.find((d2: any) => d2.exercise === d.exercise && d2.day === d.day);
                            if (check === undefined) {
                                setData([d, ...data])
                                setKey2(key2 + 1)
                            }

                        }}>{cell.name}</Menu.Item>)}

                    </Menu.SubMenu>
                    <Menu.SubMenu key="frontShoulder" title="כתף קדמית" theme={"dark"} >
                        {frontShoulder.map((cell: any, key: string) => <Menu.Item key={`frontShoulder_${key}`} onClick={() => {

                            const d = { exercise: cell.name, key: key2, day: day, category: cell.category, group: "כתף קדמית", sets: "1", reps: "1", rest: "1", icon: "delete" }
                            const check: any = data.find((d2: any) => d2.exercise === d.exercise && d2.day === d.day);
                            if (check === undefined) {
                                setData([d, ...data])
                                setKey2(key2 + 1)
                            }


                        }}>{cell.name}</Menu.Item>)}

                    </Menu.SubMenu>
                    <Menu.SubMenu key="triceps" title="יד אחורית" theme={"dark"} >
                        {triceps.map((cell: any, key: string) => <Menu.Item key={`triceps_${key}`} onClick={() => {
                            const d = { exercise: cell.name, key: key2, day: day, category: cell.category, group: "יד אחורית", sets: "1", reps: "1", rest: "1", icon: "delete" }
                            const check: any = data.find((d2: any) => d2.exercise === d.exercise && d2.day === d.day);
                            if (check === undefined) {
                                setData([d, ...data])
                                setKey2(key2 + 1)
                            }
                        }}>{cell.name}</Menu.Item>)}

                    </Menu.SubMenu>
                    <Menu.SubMenu key="biceps" title="יד קדמית" theme={"dark"} >
                        {biceps.map((cell: any, key: string) => <Menu.Item key={`biceps_${key}`} onClick={() => {
                            const d = { exercise: cell.name, key: key2, day: day, category: cell.category, group: "יד קדמית", sets: "1", reps: "1", rest: "1", icon: "delete" }
                            const check: any = data.find((d2: any) => d2.exercise === d.exercise && d2.day === d.day);
                            if (check === undefined) {
                                setData([d, ...data])
                                setKey2(key2 + 1)
                            }
                        }}>{cell.name}</Menu.Item>)}

                    </Menu.SubMenu>
                    <Menu.SubMenu key="abs" title="בטן" theme={"dark"} >
                        {abs.map((cell: any, key: string) => <Menu.Item key={`abs_${key}`} onClick={() => {
                            const d = { exercise: cell.name, key: key2, day: day, category: cell.category, group: "בטן", sets: "1", reps: "1", rest: "1", icon: "delete" }
                            const check: any = data.find((d2: any) => d2.exercise === d.exercise && d2.day === d.day);
                            if (check === undefined) {
                                setData([d, ...data])
                                setKey2(key2 + 1)
                            }


                        }}>{cell.name}</Menu.Item>)}

                    </Menu.SubMenu>
                    <Menu.SubMenu key="aerobic" title="אירובי" theme={"dark"} >
                        {aerobic.map((cell: any, key: string) => <Menu.Item key={`aerobic_${key}`} onClick={() => {
                            const d = { exercise: cell.name, key: key2, day: day, category: cell.category, group: "אירובי", km: "1", icon: "delete" }
                            const check: any = data.find((d2: any) => d2.exercise === d.exercise && d2.day === d.day);
                            if (check === undefined) {
                                setData([d, ...data])
                                setKey2(key2 + 1)
                            }


                        }}>{cell.name}</Menu.Item>)}

                    </Menu.SubMenu>
                </Menu>
                <div className="wT">
                    <Table

                        pagination={false}
                        rowKey={'name'}
                        style={{ direction: "rtl", width: "100vw" }}
                        columns={getColumns(data.filter((d: any) => d.day === day), setData, handleSetsChange, data)}
                        dataSource={data.filter((d: any) => d.day === day)}
                    />
                </div>
                <button onClick={clearData}>נקה תכנית אימונים</button>
                <WorkoutFile data={data} />

            </div>
        </>
    )

}

export default WorkoutRoutine;