import { DeleteTwoTone } from '@ant-design/icons';
import { Menu, Select, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React, { useEffect, useState } from 'react';
import File from "./File";
import "./style.scss"

const Food = () => {

    interface Imenu {
        key: any;
        meal: any;
        name: string;
        calories: any;
        carbonGram: any;
        fatGram: any;
        proteinGram: any;
        icon: any;
    }

    let totalProtein = 0;
    let totalCarbs = 0;
    let totalFats = 0;
    let totalCalories = 0;
    const [key2, setKey2] = useState<number>(0);
    const [meal, setMeal] = useState<string>();
    const [sortedData, setSortedData] = useState<Imenu[]>([])

    const [data, setData] = useState<Imenu[]>([{ key: -1, meal: "ת", name: "סך הכל", calories: totalCalories, carbonGram: totalCarbs, fatGram: totalFats, proteinGram: totalProtein, icon: null }, { key: -2, meal: "ת", name: "אחוז קלורי", calories: totalCalories, carbonGram: totalCarbs, fatGram: totalFats, proteinGram: totalProtein, icon: null }]);


    useEffect(() => {

        for (let i = data.length - 3; i >= 0; i--) {
            totalProtein += data[i].proteinGram
            totalCalories += data[i].calories
            totalCarbs += data[i].carbonGram
            totalFats += data[i].fatGram
        }

        const nextList = [...data];
        nextList[nextList.length - 2].proteinGram = (totalProtein.toFixed(1)) + " גרם";
        nextList[nextList.length - 2].carbonGram = (totalCarbs.toFixed(1)) + " גרם";;
        nextList[nextList.length - 2].fatGram = (totalFats.toFixed(1)) + " גרם";;
        nextList[nextList.length - 2].calories = (totalCalories.toFixed(1));
        
        if (nextList.length === 2) {
            nextList[nextList.length - 1].carbonGram = 0 + "%"
            nextList[nextList.length - 1].proteinGram = 0 + "%";
            nextList[nextList.length - 1].fatGram = 0 + "%";
        }
        else {
            nextList[nextList.length - 1].carbonGram = ((totalCarbs * 4 / totalCalories * 100).toFixed(1)) + "%";
            nextList[nextList.length - 1].proteinGram = ((totalProtein * 4 / totalCalories * 100).toFixed(1)) + "%";
            nextList[nextList.length - 1].fatGram = (totalFats * 9 / totalCalories * 100).toFixed(1) + "%";
        }

        nextList[nextList.length - 1].calories = (totalCalories.toFixed(1));


        setData(nextList);

        console.log(data);
        
        setSortedData(data.sort((a: any, b: any) => a.meal.localeCompare(b.meal, 'he')))
        

    }, [data.length])
    useEffect(() => {
        const localStorageData: any = localStorage.getItem("data");
        const localStoragesortedData: any = localStorage.getItem("sortedData");
        const localStoragesortedkey: any = localStorage.getItem("key");
        const localStoragemeal: any = localStorage.getItem("meal");

        if(localStoragesortedkey){
            setKey2(JSON.parse(localStoragesortedkey))
        }
        if (localStorageData) {
            setData(JSON.parse(localStorageData))

        }
        if (localStoragesortedData) {
            setSortedData(JSON.parse(localStoragesortedData))
        }
        if(localStoragemeal)
        {
            setMeal(JSON.parse(localStoragemeal))
        }

    }, [])
    useEffect(() => {
        localStorage.setItem("data", JSON.stringify(data))
        localStorage.setItem("sortedData", JSON.stringify(sortedData));
        localStorage.setItem("meal", JSON.stringify(meal))
        localStorage.setItem("key", JSON.stringify(key2));

    }, [data, meal])


    const clearMenu = () => {
  
        setData([{ key: -1, meal: "ת", name: "סך הכל", calories: 0 , carbonGram: 0 + " גרם", fatGram: 0+ " גרם", proteinGram: 0+ " גרם", icon: "null" }, { key: -2, meal: "ת", name: "אחוז קלורי", calories: 0, carbonGram: 0+"%", fatGram: 0+"%", proteinGram: 0+"%", icon: "null" }]);
        setSortedData([]);
        setKey2(0);
               window.location.reload();

    }
    const handleOnChange = (value: any) => {
        setMeal(value)
    }
    const fruit: any = [{ father: "fruit", name: "בננה בינונית", calories: 89.89, proteinGram: 1.101, carbonGram: 23.068, fatGram: 0.333, fibers: 2.626, calcium: 5.05, sodium: 1.01, colesterol: 0, iron: 0.262, vitaminD: 0, vitaminB12: 0 },
    { father: "fruit", name: "בננה גדולה", calories: 132.71, proteinGram: 1.515, carbonGram: 31.748, fatGram: 0.459, fibers: 3.614, calcium: 6.95, sodium: 1.39, colesterol: 0, iron: 0.36, vitaminD: 0, vitaminB12: 0 },
    { father: "fruit", name: "תפוח בינוני", calories: 96.2, proteinGram: 0.481, carbonGram: 25.549, fatGram: 0.316, fibers: 4.44, calcium: 11.1, sodium: 1.84, colesterol: 0, iron: 0.22, vitaminD: 0, vitaminB12: 0 },
    { father: "fruit", name: "תפוח גדול", calories: 115.44, proteinGram: 0.577, carbonGram: 30.658, fatGram: 0.38, fibers: 5.328, calcium: 13.32, sodium: 2.22, colesterol: 0, iron: 0.266, vitaminD: 0, vitaminB12: 0 },
    { father: "fruit", name: "ענבים ירוקים אשכול בינוני 121 גרם", calories: 83.49, proteinGram: 0.871, carbonGram: 21.901, fatGram: 0.194, fibers: 1.089, calcium: 12.1, sodium: 2.42, colesterol: 0, iron: 0.436, vitaminD: 0, vitaminB12: 0 },
    { father: "fruit", name: "ענבים ירוקים אשכול גדול 186 גרם", calories: 128.34, proteinGram: 1.339, carbonGram: 33.666, fatGram: 0.298, fibers: 1.674, calcium: 18.6, sodium: 3.72, colesterol: 0, iron: 0.67, vitaminD: 0, vitaminB12: 0 },
    { father: "fruit", name: "תמר מג'הול - 2 יחידות 34 גרם", calories: 94.14, proteinGram: 0.616, carbonGram: 25.49, fatGram: 0.052, fibers: 2.278, calcium: 21.76, sodium: 0.34, colesterol: 0, iron: 0.306, vitaminD: 0, vitaminB12: 0 },
    { father: "fruit", name: "תמר מג'הול - 3 יחידות 51 גרם", calories: 141.27, proteinGram: 0.924, carbonGram: 38.235, fatGram: 0.078, fibers: 3.417, calcium: 32.64, sodium: 0.51, colesterol: 0, iron: 0.459, vitaminD: 0, vitaminB12: 0 },
    { father: "fruit", name: "אבטיח פלח בינוני ללא קליפה 250 גרם", calories: 75, proteinGram: 1.525, carbonGram: 18.875, fatGram: 0.375, fibers: 1, calcium: 17.5, sodium: 2.5, colesterol: 0, iron: 0.6, vitaminD: 0, vitaminB12: 0 },
    { father: "fruit", name: "מלון ללא קליפה 250 גרם", calories: 85, proteinGram: 2.1, carbonGram: 20.4, fatGram: 0.475, fibers: 2.25, calcium: 22.5, sodium: 40, colesterol: 0, iron: 0.525, vitaminD: 0, vitaminB12: 0 }]
    const fat: any = [{ father: "fat", name: "שמן זית - כפית 5 מל", calories: 41.4, proteinGram: 0, carbonGram: 0, fatGram: 4.6, fibers: 0, calcium: 0, sodium: 0, colesterol: 0, iron: 0, vitaminD: 0, vitaminB12: 0 },
    { father: "fat", name: "שמן זית - כף 10 מל", calories: 82.8, proteinGram: 0, carbonGram: 0, fatGram: 9.2, fibers: 0, calcium: 0, sodium: 0, colesterol: 0, iron: 0, vitaminD: 0, vitaminB12: 0 },
    { father: "fat", name: "טחינה כפית - 5 גרם", calories: 34.45, proteinGram: 1.2, carbonGram: 0.6, fatGram: 3, fibers: 0, calcium: 5, sodium: 0.35, colesterol: 0, iron: 0.33, vitaminD: 0, vitaminB12: 0 },
    { father: "fat", name: "טחינה כפית - 15 גרם", calories: 103.35, proteinGram: 3.6, carbonGram: 1.8, fatGram: 9, fibers: 0, calcium: 15, sodium: 1.05, colesterol: 0, iron: 0.99, vitaminD: 0, vitaminB12: 0 },
    { father: "fat", name: "סלט טחינה - כף 15 גרם", calories: 37.2, proteinGram: 1.275, carbonGram: 0.345, fatGram: 3.3, fibers: 0.72, calcium: 0, sodium: 58.95, colesterol: 0, iron: 0.99, vitaminD: 0, vitaminB12: 0 },
    { father: "fat", name: "סלט טחינה - 2 כפות 30 גרם", calories: 74.4, proteinGram: 2.55, carbonGram: 0.69, fatGram: 6.6, fibers: 1.44, calcium: 0, sodium: 117.9, colesterol: 0, iron: 0.99, vitaminD: 0, vitaminB12: 0 },
    { father: "fat", name: "אבוקדו חצי יחידה קטנה 74 גרם", calories: 118.4, proteinGram: 1.48, carbonGram: 6.312, fatGram: 10.85, fibers: 4.958, calcium: 8.88, sodium: 5.18, colesterol: 0, iron: 0.407, vitaminD: 0, vitaminB12: 0 },
    { father: "fat", name: "אבוקדו יחידה קטנה 148 גרם", calories: 236.8, proteinGram: 2.96, carbonGram: 12.624, fatGram: 21.7, fibers: 9.916, calcium: 17.76, sodium: 10.36, colesterol: 0, iron: 0.814, vitaminD: 0, vitaminB12: 0 },
    { father: "fat", name: "שקדים טבעיים - 10 יחידות", calories: 57.5, proteinGram: 2.12, carbonGram: 2.17, fatGram: 4.94, fibers: 1.22, calcium: 26.4, sodium: 0.1, colesterol: 0, iron: 0.37, vitaminD: 0, vitaminB12: 0 },
    { father: "fat", name: "פקאן טבעי - 7 יחידות", calories: 96.74, proteinGram: 1.281, carbonGram: 1.939, fatGram: 10.076, fibers: 1.344, calcium: 9.8, sodium: 0, colesterol: 0, iron: 0.357, vitaminD: 0, vitaminB12: 0 },
    { father: "fat", name: "אגוזי מלך קלופי - 2 יחידות 10 גרם", calories: 68.7, proteinGram: 1.5, carbonGram: 0.7, fatGram: 6.5, fibers: 0.7, calcium: 0, sodium: 0, colesterol: 0, iron: 0, vitaminD: 0, vitaminB12: 0 }]
    const protein: any = [
        {father: "protein", name: "גביע יוגורט פרו 0%", calories: 130, proteinGram: 20, carbonGram: 11.2, fatGram: 0, fibers: 0, calcium: 188, sodium: 66, colesterol: 0, iron: 0, vitaminD: 0, vitaminB12: 0 },
        { father: "protein", name: "גביע דנונה אקטיביה - טעם טבעי", calories: 97.5, proteinGram: 7.2, carbonGram: 7.2, fatGram: 4.5, fibers: 1.35, calcium: 195, sodium: 135, colesterol: 0, iron: 0, vitaminD: 0, vitaminB12: 0 },
        { father: "protein", name: "גביע יופלה תות 0%", calories: 60, proteinGram: 7.35, carbonGram: 5.85, fatGram: 0, fibers: 3.75, calcium: 225, sodium: 82.5, colesterol: 0, iron: 0, vitaminD: 0, vitaminB12: 0 },
        { father: "protein", name: "גבינה לבנה 3%", calories: 205, proteinGram: 23.75, carbonGram: 10.75, fatGram: 7.5, fibers: 0, calcium: 237.5, sodium: 525, colesterol: 22.3, iron: 0, vitaminD: 0, vitaminB12: 0 },
        { father: "protein", name: "גבינה לבנה 5%", calories: 245, proteinGram: 22.5, carbonGram: 10.75, fatGram: 12.5, fibers: 0, calcium: 237.5, sodium: 500, colesterol: 37.5, iron: 0, vitaminD: 0, vitaminB12: 0 },
        { father: "protein", name: "קוטג' 1%", calories: 155, proteinGram: 28.75, carbonGram: 4.5, fatGram: 2.5, fibers: 0, calcium: 250, sodium: 875, colesterol: 7.5, iron: 0, vitaminD: 0, vitaminB12: 0 },
        { father: "protein", name: "קוטג' 3%", calories: 192.5, proteinGram: 27.5, carbonGram: 3.75, fatGram: 7.5, fibers: 0, calcium: 250, sodium: 875, colesterol: 22.5, iron: 0, vitaminD: 0, vitaminB12: 0 },
        { father: "protein", name: "קוטג' 5%", calories: 237.5, proteinGram: 27.5, carbonGram: 3.75, fatGram: 12.5, fibers: 0, calcium: 250, sodium: 875, colesterol: 37.5, iron: 0, vitaminD: 0, vitaminB12: 0 },
        { father: "protein", name: "פרוסת גבינה צהובה 5%", calories: 44.5, proteinGram: 8.75, carbonGram: 0.05, fatGram: 1.23, fibers: 0, calcium: 237.5, sodium: 155, colesterol: 3.75, iron: 0, vitaminD: 0, vitaminB12: 0 },
        { father: "protein", name: "פרוסת גבינה צהובה 9%", calories: 40.6, proteinGram: 4.2, carbonGram: 1.9, fatGram: 1.8, fibers: 0, calcium: 200, sodium: 250, colesterol: 5.4, iron: 0, vitaminD: 0, vitaminB12: 0 },
        { father: "protein", name: "פרוסת גבינה צהובה 28%", calories: 87.25, proteinGram: 6, carbonGram: 0.05, fatGram: 7, fibers: 0, calcium: 162.5, sodium: 150, colesterol: 21, iron: 0, vitaminD: 0, vitaminB12: 0 },
        { father: "protein", name: "פרוסת גבינה צהובה 28% דק דק", calories: 50, proteinGram: 3.33, carbonGram: 0.03, fatGram: 4, fibers: 0, calcium: 101.5, sodium: 97, colesterol: 12.2, iron: 0, vitaminD: 0, vitaminB12: 0 },
        { father: "protein", name: "צפתית 5% 100 גרם", calories: 129, proteinGram: 13, carbonGram: 8, fatGram: 5, fibers: 0, calcium: 540, sodium: 700, colesterol: 15, iron: 0, vitaminD: 0, vitaminB12: 0 },
        { father: "protein", name: "בולגרית 5% 100 גרם", calories: 129, proteinGram: 14, carbonGram: 7, fatGram: 5, fibers: 0, calcium: 360, sodium: 1010, colesterol: 15, iron: 0, vitaminD: 0, vitaminB12: 0 },
        { father: "protein", name: "ביצה קשה", calories: 90, proteinGram: 7.3, carbonGram: 0.65, fatGram: 6.15, fibers: 0, calcium: 29, sodium: 71.92, colesterol: 261.34, iron: 0, vitaminD: 0, vitaminB12: 0 },
        { father: "protein", name: "קופסת טונה במים", calories: 116.5, proteinGram: 27.7, carbonGram: 0, fatGram: 0.672, fibers: 0, calcium: 0, sodium: 190.5, colesterol: 56, iron: 0, vitaminD: 0, vitaminB12: 0 },
        { father: "protein", name: "קופסת טונה בשמן", calories: 217.3, proteinGram: 29.12, carbonGram: 0, fatGram: 11.2, fibers: 0, calcium: 0, sodium: 448, colesterol: 56, iron: 0, vitaminD: 0, vitaminB12: 0 },
        { father: "protein", name: "חזה עוף מבושל 100 גרם", calories: 165, proteinGram: 31, carbonGram: 0, fatGram: 3.5, fibers: 0, calcium: 15, sodium: 74, colesterol: 85, iron: 1.04, vitaminD: 0.125, vitaminB12: 0.34 },
        { father: "protein", name: "חזה עוף מבושל 200 גרם", calories: 330, proteinGram: 62, carbonGram: 0, fatGram: 7, fibers: 0, calcium: 30, sodium: 148, colesterol: 170, iron: 2.08, vitaminD: 0.25, vitaminB12: 0.68 },
        { father: "protein", name: "חזה עוף מבושל 300 גרם", calories: 495, proteinGram: 93, carbonGram: 0, fatGram: 10.5, fibers: 0, calcium: 45, sodium: 222, colesterol: 255, iron: 3.12, vitaminD: 0.375, vitaminB12: 1.02 },
        { father: "protein", name: "דג סלמון מבושל 100 גרם", calories: 206, proteinGram: 22.1, carbonGram: 0, fatGram: 12.35, fibers: 0, calcium: 15, sodium: 91, colesterol: 0, iron: 0.34, vitaminD: 0, vitaminB12: 2.8 },
        { father: "protein", name: "דג סלמון מבושל 150 גרם", calories: 309, proteinGram: 33.15, carbonGram: 0, fatGram: 18.525, fibers: 0, calcium: 22.5, sodium: 91.5, colesterol: 0, iron: 0.51, vitaminD: 0, vitaminB12: 4.2 },
        { father: "protein", name: "דג אמנון 100 גרם", calories: 128, proteinGram: 26.15, carbonGram: 0, fatGram: 2.65, fibers: 0, calcium: 14, sodium: 56, colesterol: 57, iron: 0.69, vitaminD: 0, vitaminB12: 1.86 },
        { father: "protein", name: "דג אמנון 200 גרם", calories: 256, proteinGram: 52.3, carbonGram: 0, fatGram: 5.3, fibers: 0, calcium: 28, sodium: 112, colesterol: 114, iron: 1.38, vitaminD: 0, vitaminB12: 3.72 },
        { father: "protein", name: "דג אמנון 300 גרם", calories: 384, proteinGram: 78.45, carbonGram: 0, fatGram: 7.95, fibers: 0, calcium: 42, sodium: 168, colesterol: 171, iron: 2.07, vitaminD: 0, vitaminB12: 5.4 },
        { father: "protein", name: "פסטרמה 2% שומן 100 גרם", calories: 100, proteinGram: 16, carbonGram: 4, fatGram: 2, fibers: 0, calcium: 28, sodium: 500, colesterol: 45, iron: 0, vitaminD: 0, vitaminB12: 0 },
        { father: "protein", name: "פסטרמה 2% שומן 200 גרם", calories: 200, proteinGram: 32, carbonGram: 8, fatGram: 4, fibers: 0, calcium: 28, sodium: 1000, colesterol: 90, iron: 0, vitaminD: 0, vitaminB12: 0 },
        { father: "protein", name: "פסטרמה 2% שומן 300 גרם", calories: 300, proteinGram: 48, carbonGram: 12, fatGram: 6, fibers: 0, calcium: 28, sodium: 1500, colesterol: 135, iron: 0, vitaminD: 0, vitaminB12: 0 },
        { father: "protein", name: "טופו 100 גרם", calories: 61, proteinGram: 6.6, carbonGram: 1.8, fatGram: 3, fibers: 0, calcium: 0, sodium: 20, colesterol: 0, iron: 0, vitaminD: 0, vitaminB12: 0 },
        { father: "protein", name: "טופו 200 גרם", calories: 122, proteinGram: 13.2, carbonGram: 3.6, fatGram: 6, fibers: 0, calcium: 0, sodium: 40, colesterol: 0, iron: 0, vitaminD: 0, vitaminB12: 0 },
        { father: "protein", name: "טופו 300 גרם", calories: 183, proteinGram: 19.8, carbonGram: 5.4, fatGram: 9, fibers: 0, calcium: 0, sodium: 60, colesterol: 0, iron: 0, vitaminD: 0, vitaminB12: 0 },
        { father: "protein", name: "שבבי סויה 50 גרם לפני בישול", calories: 176, proteinGram: 27.5, carbonGram: 16, fatGram: 0.5, fibers: 2, calcium: 175, sodium: 0.45, colesterol: 0, iron: 5.5, vitaminD: 0, vitaminB12: 0 },
        { father: "protein", name: "שבבי סויה 100 גרם לפני בישול", calories: 352, proteinGram: 55, carbonGram: 32, fatGram: 1, fibers: 4, calcium: 350, sodium: 0.9, colesterol: 0, iron: 11, vitaminD: 0, vitaminB12: 0 },
        { father: "protein", name: "עדשים מבושלות 100 גרם", calories: 116, proteinGram: 9.02, carbonGram: 20.16, fatGram: 0.38, fibers: 7.9, calcium: 19, sodium: 2, colesterol: 0, iron: 3.33, vitaminD: 0, vitaminB12: 0 },
        { father: "protein", name: "עדשים מבושלות 200 גרם", calories: 232, proteinGram: 18.04, carbonGram: 40.26, fatGram: 0.76, fibers: 15.8, calcium: 38, sodium: 4, colesterol: 0, iron: 6.66, vitaminD: 0, vitaminB12: 0 },
        { father: "protein", name: "אפונה ירוקה מבושלת 100 גרם", calories: 84, proteinGram: 5.36, carbonGram: 15.63, fatGram: 0.22, fibers: 5.5, calcium: 27, sodium: 3, colesterol: 0, iron: 1.54, vitaminD: 0, vitaminB12: 0 },
        { father: "protein", name: "אפונה ירוקה מבושלת 200 גרם", calories: 168, proteinGram: 10.72, carbonGram: 31.26, fatGram: 0.44, fibers: 11, calcium: 54, sodium: 6, colesterol: 0, iron: 3.08, vitaminD: 0, vitaminB12: 0 },
        { father: "protein", name: "גרגירי חומוס מבושל 100 גרם", calories: 164, proteinGram: 8.86, carbonGram: 27.42, fatGram: 2.59, fibers: 7.6, calcium: 49, sodium: 7, colesterol: 0, iron: 2.89, vitaminD: 0, vitaminB12: 0 },
        { father: "protein", name: "גרגירי חומוס מבושל 200 גרם", calories: 328, proteinGram: 17.72, carbonGram: 54.84, fatGram: 5.18, fibers: 15.2, calcium: 98, sodium: 14, colesterol: 0, iron: 5.78, vitaminD: 0, vitaminB12: 0 },
        { father: "protein", name: "טבעול חזה עוף 2 יחידות", calories: 198, proteinGram: 20.3, carbonGram: 14, fatGram: 6.72, fibers: 5.32, calcium: 168, sodium: 770, colesterol: 1.26, iron: 4.2, vitaminD: 0, vitaminB12: 0 },
        { father: "protein", name: "טבעול חזה עוף 3 יחידות", calories: 297, proteinGram: 30.45, carbonGram: 21, fatGram: 10.08, fibers: 7.98, calcium: 252, sodium: 1155, colesterol: 1.89, iron: 6.3, vitaminD: 0, vitaminB12: 0 },
        { father: "protein", name: "טבעול חזה עוף 4 יחידות", calories: 396, proteinGram: 40.6, carbonGram: 27, fatGram: 13.44, fibers: 10.64, calcium: 336, sodium: 1540, colesterol: 2.52, iron: 8.4, vitaminD: 0, vitaminB12: 0 },
        { father: "protein", name: "טבעול שניצל תירס יחידה אחת", calories: 177.62, proteinGram: 7.055, carbonGram: 18.675, fatGram: 8.3, fibers: 2.49, calcium: 99.6, sodium: 315.4, colesterol: 0, iron: 2.324, vitaminD: 0, vitaminB12: 0.83 },
        { father: "protein", name: "טבעול שניצל תירס 2 יחידות", calories: 355.24, proteinGram: 14.11, carbonGram: 37.36, fatGram: 16.6, fibers: 5.98, calcium: 199.2, sodium: 630.8, colesterol: 0, iron: 4.648, vitaminD: 0, vitaminB12: 1.66 }]

    const carbs: any = [{ father: "carbon", name: "לחם לבן - 2 פרוסות", calories: 137.4, proteinGram: 4.5, carbonGram: 27.66, fatGram: 1.8, fibers: 1.86, calcium: 0, sodium: 208.2, colesterol: 0, iron: 0, vitaminD: 0, vitaminB12: 0 },
    { father: "carbon", name: "לחם מלא - 2 פרוסות", calories: 145.8, proteinGram: 7.92, carbonGram: 17.7, fatGram: 3.72, fibers: 5.04, calcium: 0, sodium: 130.2, colesterol: 0, iron: 0, vitaminD: 0, vitaminB12: 0 },
    { father: "carbon", name: "לחם קל - 2 פרוסות", calories: 106.2, proteinGram: 5.04, carbonGram: 19.92, fatGram: 0.72, fibers: 5.4, calcium: 0, sodium: 288, colesterol: 0, iron: 0, vitaminD: 0, vitaminB12: 0 },
    { father: "carbon", name: "לחמניה", calories: 204.75, proteinGram: 6.8, carbonGram: 40.65, fatGram: 1.125, fibers: 2.325, calcium: 0, sodium: 296.25, colesterol: 0, iron: 0, vitaminD: 0, vitaminB12: 0 },
    { father: "carbon", name: "לחמניה קלה", calories: 98.82, proteinGram: 8.586, carbonGram: 13.392, fatGram: 1.188, fibers: 6.642, calcium: 0, sodium: 216, colesterol: 0, iron: 0, vitaminD: 0, vitaminB12: 0 },
    { father: "carbon", name: "פרכיות אורז מלא 5 יחידות", calories: 149.4, proteinGram: 3.32, carbonGram: 33.2, fatGram: 1.12, fibers: 1.66, calcium: 0, sodium: 134.4, colesterol: 0, iron: 0, vitaminD: 0, vitaminB12: 0 },
    { father: "carbon", name: "אורז לבן בסמטי מבושל 100 גרם", calories: 118, proteinGram: 2.9, carbonGram: 26.2, fatGram: 0.2, fibers: 2, calcium: 0, sodium: 0, colesterol: 0, iron: 0, vitaminD: 0, vitaminB12: 0 },
    { father: "carbon", name: "אורז לבן בסמטי מבושל 200 גרם", calories: 236, proteinGram: 5.8, carbonGram: 52.4, fatGram: 0.4, fibers: 4, calcium: 0, sodium: 0, colesterol: 0, iron: 0, vitaminD: 0, vitaminB12: 0 },
    { father: "carbon", name: "אורז לבן בסמטי מבושל 300 גרם", calories: 354, proteinGram: 8.7, carbonGram: 78.6, fatGram: 0.6, fibers: 6, calcium: 0, sodium: 0, colesterol: 0, iron: 0, vitaminD: 0, vitaminB12: 0 },
    { father: "carbon", name: "אורז לבן בסמטי מבושל 400 גרם", calories: 472, proteinGram: 11.6, carbonGram: 104.8, fatGram: 0.8, fibers: 8, calcium: 0, sodium: 0, colesterol: 0, iron: 0, vitaminD: 0, vitaminB12: 0 },
    { father: "carbon", name: "אורז לבן בסמטי מבושל 500 גרם", calories: 590, proteinGram: 14.5, carbonGram: 131, fatGram: 1, fibers: 10, calcium: 0, sodium: 0, colesterol: 0, iron: 0, vitaminD: 0, vitaminB12: 0 },
    { father: "carbon", name: "אורז לבן מלא מבושל 100 גרם", calories: 121, proteinGram: 2.8, carbonGram: 253., fatGram: 0.9, fibers: 3, calcium: 0, sodium: 0, colesterol: 0, iron: 0, vitaminD: 0, vitaminB12: 0 },
    { father: "carbon", name: "אורז לבן מלא מבושל 200 גרם", calories: 242, proteinGram: 5.6, carbonGram: 50.6, fatGram: 1.8, fibers: 6, calcium: 0, sodium: 0, colesterol: 0, iron: 0, vitaminD: 0, vitaminB12: 0 },
    { father: "carbon", name: "אורז לבן מלא מבושל 300 גרם", calories: 363, proteinGram: 8.4, carbonGram: 75.9, fatGram: 2.7, fibers: 9, calcium: 0, sodium: 0, colesterol: 0, iron: 0, vitaminD: 0, vitaminB12: 0 },
    { father: "carbon", name: "אורז לבן מלא מבושל 400 גרם", calories: 484, proteinGram: 11.2, carbonGram: 101.2, fatGram: 3.6, fibers: 12, calcium: 0, sodium: 0, colesterol: 0, iron: 0, vitaminD: 0, vitaminB12: 0 },
    { father: "carbon", name: "אורז לבן מלא מבושל 500 גרם", calories: 605, proteinGram: 14.0, carbonGram: 126.5, fatGram: 4.5, fibers: 15, calcium: 0, sodium: 0, colesterol: 0, iron: 0, vitaminD: 0, vitaminB12: 0 },
    { father: "carbon", name: "פסטה לבנה מבושלת 100 גרם", calories: 159, proteinGram: 5, carbonGram: 32.3, fatGram: 0.7, fibers: 1.6, calcium: 0, sodium: 0, colesterol: 0, iron: 0, vitaminD: 0, vitaminB12: 0 },
    { father: "carbon", name: "פסטה לבנה מבושלת 200 גרם", calories: 318, proteinGram: 10, carbonGram: 64.6, fatGram: 1.4, fibers: 3.2, calcium: 0, sodium: 0, colesterol: 0, iron: 0, vitaminD: 0, vitaminB12: 0 },
    { father: "carbon", name: "פסטה לבנה מבושלת 300 גרם", calories: 477, proteinGram: 15, carbonGram: 86.9, fatGram: 2.1, fibers: 4.8, calcium: 0, sodium: 0, colesterol: 0, iron: 0, vitaminD: 0, vitaminB12: 0 },
    { father: "carbon", name: "פסטה לבנה מבושלת 400 גרם", calories: 636, proteinGram: 20, carbonGram: 129.2, fatGram: 2.8, fibers: 6.4, calcium: 0, sodium: 0, colesterol: 0, iron: 0, vitaminD: 0, vitaminB12: 0 },
    { father: "carbon", name: "פסטה לבנה מבושלת 500 גרם", calories: 795, proteinGram: 25, carbonGram: 161.5, fatGram: 3.5, fibers: 8, calcium: 0, sodium: 0, colesterol: 0, iron: 0, vitaminD: 0, vitaminB12: 0 },
    { father: "carbon", name: "תפוח אדמה מבושל 100 גרם", calories: 86, proteinGram: 1.71, carbonGram: 20.01, fatGram: 0.1, fibers: 0, calcium: 8, sodium: 5, colesterol: 0, iron: 0.36, vitaminD: 0, vitaminB12: 0 },
    { father: "carbon", name: "תפוח אדמה מבושל 200 גרם", calories: 175, proteinGram: 3.42, carbonGram: 40.02, fatGram: 0.2, fibers: 0, calcium: 16, sodium: 10, colesterol: 0, iron: 0.62, vitaminD: 0, vitaminB12: 0 },
    { father: "carbon", name: "תפוח אדמה מבושל 300 גרם", calories: 258, proteinGram: 5.13, carbonGram: 60.03, fatGram: 0.3, fibers: 0, calcium: 24, sodium: 15, colesterol: 0, iron: 0.93, vitaminD: 0, vitaminB12: 0 },
    { father: "carbon", name: "בטטה מבושלת 100 גרם", calories: 86, proteinGram: 1.57, carbonGram: 20.12, fatGram: 0.05, fibers: 3, calcium: 30, sodium: 55, colesterol: 0, iron: 0.61, vitaminD: 0, vitaminB12: 0 },
    { father: "carbon", name: "בטטה מבושלת 200 גרם", calories: 175, proteinGram: 3.14, carbonGram: 40.24, fatGram: 0.1, fibers: 6, calcium: 60, sodium: 110, colesterol: 0, iron: 1.22, vitaminD: 0, vitaminB12: 0 },
    { father: "carbon", name: "בטטה מבושלת 300 גרם", calories: 258, proteinGram: 4.71, carbonGram: 60.36, fatGram: 0.15, fibers: 9, calcium: 90, sodium: 165, colesterol: 0, iron: 1.83, vitaminD: 0, vitaminB12: 0 }]

    const vegetables: any = [{ father: "vegetables", name: "מלפפון בינוני - 2 יחידות 192 גרם", calories: 28.8, proteinGram: 1.248, carbonGram: 6.97, fatGram: 0.212, fibers: 0.96, calcium: 30.72, sodium: 3.84, colesterol: 0, iron: 0.538, vitaminD: 0, vitaminB12: 0 },
    { father: "vegetables", name: "עגבניה בינונית - 2 יחידות 228 גרם", calories: 41.04, proteinGram: 2.022, carbonGram: 8.944, fatGram: 0.456, fibers: 2.736, calcium: 22.8, sodium: 11.4, colesterol: 0, iron: 0.616, vitaminD: 0, vitaminB12: 0 },
    { father: "vegetables", name: "עגבניות שרי - 10 יחידות 150 גרם", calories: 27, proteinGram: 1.32, carbonGram: 5.88, fatGram: 0.3, fibers: 1.8, calcium: 15, sodium: 7.5, colesterol: 0, iron: 0.41, vitaminD: 0, vitaminB12: 0 },
    { father: "vegetables", name: "עגבניות שרי - 20 יחידות 300 גרם", calories: 54, proteinGram: 2.64, carbonGram: 11.76, fatGram: 0.6, fibers: 3.6, calcium: 30, sodium: 16, colesterol: 0, iron: 0.82, vitaminD: 0, vitaminB12: 0 },
    { father: "vegetables", name: "פלפל אדום בינוני 185 גרם", calories: 57.35, proteinGram: 1.832, carbonGram: 11.156, fatGram: 0.555, fibers: 3.884, calcium: 12.95, sodium: 7.4, colesterol: 0, iron: 0.796, vitaminD: 0, vitaminB12: 0 },
    { father: "vegetables", name: "קישוא בינוני 218 גרם", calories: 34.88, proteinGram: 2.638, carbonGram: 7.303, fatGram: 0.392, fibers: 2.398, calcium: 32.7, sodium: 4.36, colesterol: 0, iron: 0.763, vitaminD: 0, vitaminB12: 0 }]

    const energySnacks: any = [{ father: "energySnacks", name: "שוקולד בננה FITNESS חטיף נסטלה", calories: 90, proteinGram: 1.433, carbonGram: 16.45, fatGram: 1.88, fibers: 1.41, calcium: 242.05, sodium: 57.105, colesterol: 0, iron: 2.726, vitaminD: 0, vitaminB12: 0 },
    { father: "energySnacks", name: "חטיף סלים דליס שוקולד חלב", calories: 99, proteinGram: 1.14, carbonGram: 11.8, fatGram: 5, fibers: 1.04, calcium: 0, sodium: 42.4, colesterol: 2.4, iron: 0, vitaminD: 0.42, vitaminB12: 0.166 },
    { father: "energySnacks", name: "נייצ'ר ואלי יחידה אחת", calories: 97.86, proteinGram: 1.659, carbonGram: 13.083, fatGram: 4.074, fibers: 1.155, calcium: 0, sodium: 73.5, colesterol: 0, iron: 0, vitaminD: 0, vitaminB12: 0 },
    { father: "energySnacks", name: "נייצ'ר ואלי שתי יחידות - חבילה", calories: 195.72, proteinGram: 3.318, carbonGram: 26.166, fatGram: 8.148, fibers: 2.31, calcium: 0, sodium: 147, colesterol: 0, iron: 0, vitaminD: 0, vitaminB12: 0 }]
    const chocolate: any = [{ father: "chocolate", name: "קוביות שוקולד - 4 יחידות", calories: 76, proteinGram: 1.3, carbonGram: 8.8, fatGram: 3.9, fibers: 0, calcium: 0, sodium: 17.5, colesterol: 4.9, iron: 0, vitaminD: 0, vitaminB12: 0 },
    { father: "chocolate", name: "מקופלת/כיף כיף קטן", calories: 93.45, proteinGram: 1.19, carbonGram: 10.15, fatGram: 5.25, fibers: 0, calcium: 0, sodium: 14.175, colesterol: 3.675, iron: 0, vitaminD: 0, vitaminB12: 0 }]
    const snacks: any = [{ father: "snacks", name: "במבה שקית קטנה 15 גרם", calories: 80.1, proteinGram: 2.55, carbonGram: 7.35, fatGram: 4.5, fibers: 0, calcium: 0, sodium: 58.5, colesterol: 0, iron: 1.2, vitaminD: 0, vitaminB12: 0.144 },
    { father: "snacks", name: "בייגלה - מנה 30 גרם", calories: 130.8, proteinGram: 3.45, carbonGram: 21.15, fatGram: 3.6, fibers: 0, calcium: 0, sodium: 255, colesterol: 0, iron: 0, vitaminD: 0, vitaminB12: 0 }]

    const alcohol: any = [{ father: "alcohol", name: "חצי כוס יין אדום - 120 מל", calories: 102, proteinGram: 0.084, carbonGram: 3.132, fatGram: 0, fibers: 0, calcium: 9.6, sodium: 4.8, colesterol: 0, iron: 0.552, vitaminD: 0, vitaminB12: 0. },
    { father: "alcohol", name: "חצי כוס יין לבן - 120 מל", calories: 98.4, proteinGram: 0.084, carbonGram: 3.12, fatGram: 0, fibers: 0, calcium: 10.8, sodium: 12, colesterol: 0, iron: 0.324, vitaminD: 0, vitaminB12: 0 },
    { father: "alcohol", name: "בירה - 330 מל", calories: 141.9, proteinGram: 1.518, carbonGram: 11.715, fatGram: 0, fibers: 0, calcium: 13.2, sodium: 13.2, colesterol: 0, iron: 0.066, vitaminD: 0, vitaminB12: 0.066 },
    { father: "alcohol", name: "ערק - 2 צייסרים", calories: 150, proteinGram: 0, carbonGram: 0, fatGram: 0, fibers: 0, calcium: 0, sodium: 0, colesterol: 0, iron: 0, vitaminD: 0, vitaminB12: 0 },
    { father: "alcohol", name: "וודקה - 2 צייסרים", calories: 134, proteinGram: 0, carbonGram: 0, fatGram: 0, fibers: 0, calcium: 0, sodium: 0, colesterol: 0, iron: 0, vitaminD: 0, vitaminB12: 0 }]
    return (
        <>
            <div className="Food" >
                <Select
                    className="meal"
                    style={{ width: "200px", fontSize: "30px", fontWeight: "bold", border: "1px solid black", borderRadius: "50px", marginBottom: "5px" }}
                    bordered={false}
                    placeholder="ארוחה"
                    value={meal}
                    onChange={handleOnChange}
                    options={[
                        {
                            value: 'בוקר',
                            label: 'בוקר',
                            key:1
                        },
                        {
                            value: "ביניים ראשונה",
                            label: "ביניים ראשונה",
                            key:2
                        },
                        {
                            value: 'צהריים',
                            label: 'צהריים',
                            key:3

                        },
                        {
                            value: "ביניים שנייה",
                            label: "ביניים שנייה",
                            key:4

                        },
                        {
                            value: 'ערב',
                            label: 'ערב',
                            key:5

                        },
                        {
                            value: 'סופי',
                            label: 'סופי',
                            key:6

                        }

                    ]}
                ></Select>
                {meal === undefined ? null :
                    <>
                        {meal === "סופי" ? null :
                            <Menu className='food-menu' mode="horizontal" style={{ direction: "rtl" }}>

                                <Menu.SubMenu key="protein" title="חלבון" theme={"dark"} >
                                    {protein.map((pr: any, key: string) => <Menu.Item key={`protein_${key}`} onClick={() => {
                                        
                                        const d = {
                                            meal: meal,
                                            key: key2,
                                            father: "protein", name: pr.name, calories: pr.calories, proteinGram: pr.proteinGram, carbonGram: pr.carbonGram, fatGram: pr.fatGram, fibers: pr.fibers, calcium: pr.calcium, sodium: pr.sodium, colesterol: pr.colesterol, iron: pr.iron, vitaminD: pr.vitaminD, vitaminB12: pr.vitaminB12,
                                            icon: "delete"
                                        }
                                        setData([d, ...data])
                                        setKey2(key2 + 1);

                                    }}>{pr.name}</Menu.Item>)}

                                </Menu.SubMenu>
                                <Menu.SubMenu key="carbs" title="פחמימות" theme={"dark"}>
                                    {carbs.map((cr: any, key: string) => <Menu.Item key={`carbs_${key}`} onClick={() => {
                                        const d = {
                                            meal: meal,
                                            key: key2,
                                            father: cr.father, name: cr.name, calories: cr.calories, proteinGram: cr.proteinGram, carbonGram: cr.carbonGram, fatGram: cr.fatGram, fibers: cr.fibers, calcium: cr.calcium, sodium: cr.sodium, colesterol: cr.colesterol, iron: cr.iron, vitaminD: cr.vitaminD, vitaminB12: cr.vitaminB12,
                                            icon: "delete"
                                        }
                                        setData([d, ...data])
                                        setKey2(key2 + 1);

                                    }}>{cr.name}</Menu.Item>)}
                                </Menu.SubMenu>
                                <Menu.SubMenu key="fats" title="שומן" theme={"dark"} >
                                    {fat.map((fat: any, key: string) => <Menu.Item key={`fat_${key}`} onClick={() => {
                                        const d = {
                                            meal: meal,
                                            key: key2,

                                            father: fat.father, name: fat.name, calories: fat.calories, proteinGram: fat.proteinGram, carbonGram: fat.carbonGram, fatGram: fat.fatGram, fibers: fat.fibers, calcium: fat.calcium, sodium: fat.sodium, colesterol: fat.colesterol, iron: fat.iron, vitaminD: fat.vitaminD, vitaminB12: fat.vitaminB12,
                                            icon: "delete"
                                        }
                                        setData([d, ...data])
                                        setKey2(key2 + 1);

                                    }}>{fat.name}</Menu.Item>)}
                                </Menu.SubMenu>
                                <Menu.SubMenu key="fruits" title="פירות" theme={"dark"} >
                                    {fruit.map((fr: any, key: string) => <Menu.Item key={`fruit_${key}`} onClick={() => {
                                        const d = {
                                            meal: meal,
                                            key: key2,

                                            father: fr.father, name: fr.name, calories: fr.calories, proteinGram: fr.proteinGram, carbonGram: fr.carbonGram, fatGram: fr.fatGram, fibers: fr.fibers, calcium: fr.calcium, sodium: fr.sodium, colesterol: fr.colesterol, iron: fr.iron, vitaminD: fr.vitaminD, vitaminB12: fr.vitaminB12,
                                            icon: "delete"
                                        }
                                        setData([d, ...data])
                                        setKey2(key2 + 1);

                                    }}>{fr.name}</Menu.Item>)}
                                </Menu.SubMenu>
                                <Menu.SubMenu key="vegetables" title="ירקות" theme={"dark"} >
                                    {vegetables.map((vg: any, key: string) => <Menu.Item key={`vegetables_${key}`} onClick={() => {
                                        const d = {
                                            meal: meal,
                                            key: key2,

                                            father: vg.father, name: vg.name, calories: vg.calories, proteinGram: vg.proteinGram, carbonGram: vg.carbonGram, fatGram: vg.fatGram, fibers: vg.fibers, calcium: vg.calcium, sodium: vg.sodium, colesterol: vg.colesterol, iron: vg.iron, vitaminD: vg.vitaminD, vitaminB12: vg.vitaminB12,
                                            icon: "delete"
                                        }
                                        setData([d, ...data])
                                        setKey2(key2 + 1);

                                    }}>{vg.name}</Menu.Item>)}
                                </Menu.SubMenu>
                                <Menu.SubMenu key="energySnacks" title="חטיפי אנרגיה" theme={"dark"} >
                                    {energySnacks.map((es: any, key: string) => <Menu.Item key={`energySnacks_${key}`} onClick={() => {
                                        const d = {
                                            meal: meal,
                                            key: key2,

                                            father: es.father, name: es.name, calories: es.calories, proteinGram: es.proteinGram, carbonGram: es.carbonGram, fatGram: es.fatGram, fibers: es.fibers, calcium: es.calcium, sodium: es.sodium, colesterol: es.colesterol, iron: es.iron, vitaminD: es.vitaminD, vitaminB12: es.vitaminB12,
                                            icon: "delete"
                                        }
                                        setData([d, ...data])
                                        setKey2(key2 + 1);

                                    }}>{es.name}</Menu.Item>)}
                                </Menu.SubMenu>
                                <Menu.SubMenu key="chocolate" title="שוקולד" theme={"dark"} >
                                    {chocolate.map((c: any, key: string) => <Menu.Item key={`chocolate_${key}`} onClick={() => {
                                        const d = {
                                            meal: meal,
                                            key: key2,

                                            father: c.father, name: c.name, calories: c.calories, proteinGram: c.proteinGram, carbonGram: c.carbonGram, fatGram: c.fatGram, fibers: c.fibers, calcium: c.calcium, sodium: c.sodium, colesterol: c.colesterol, iron: c.iron, vitaminD: c.vitaminD, vitaminB12: c.vitaminB12,
                                            icon: "delete"
                                        }
                                        setData([d, ...data])
                                        setKey2(key2 + 1);

                                    }}>{c.name}</Menu.Item>)}
                                </Menu.SubMenu>
                                <Menu.SubMenu key="snacks" title="חטיפים" theme={"dark"} >
                                    {snacks.map((sn: any, key: string) => <Menu.Item key={`snacks_${key}`} onClick={() => {
                                        const d = {
                                            meal: meal,
                                            key: key2,

                                            father: sn.father, name: sn.name, calories: sn.calories, proteinGram: sn.proteinGram, carbonGram: sn.carbonGram, fatGram: sn.fatGram, fibers: sn.fibers, calcium: sn.calcium, sodium: sn.sodium, colesterol: sn.colesterol, iron: sn.iron, vitaminD: sn.vitaminD, vitaminB12: sn.vitaminB12,
                                            icon: "delete"
                                        }
                                        setData([d, ...data])
                                        setKey2(key2 + 1);

                                    }}>{sn.name}</Menu.Item>)}
                                </Menu.SubMenu>
                                <Menu.SubMenu key="alcohol" title="אלכוהול" theme={"dark"} >
                                    {alcohol.map((al: any, key: string) => <Menu.Item key={`alcohol_${key}`} onClick={() => {
                                        const d = {
                                            meal: meal,
                                            key: key2,

                                            father: al.father, name: al.name, calories: al.calories, proteinGram: al.proteinGram, carbonGram: al.carbonGram, fatGram: al.fatGram, fibers: al.fibers, calcium: al.calcium, sodium: al.sodium, colesterol: al.colesterol, iron: al.iron, vitaminD: al.vitaminD, vitaminB12: al.vitaminB12,
                                            icon: "delete"
                                        }
                                        setData([d, ...data])
                                        setKey2(key2 + 1);

                                    }}>{al.name}</Menu.Item>)}
                                </Menu.SubMenu>
                            </Menu>

                        }

                        {meal !== 'סופי' ?
                            <Table
                                pagination={false}
                                rowKey={'name'}
                                style={{ direction: "rtl", width: "100vw" }}
                                columns={getColumns(data.filter((d: any) => d.meal === meal || d.name === "סך הכל" || d.name === "אחוז קלורי"), setData, setKey2, key2, data)}
                                dataSource={data.filter((d: any) => d.meal === meal || d.name === "סך הכל" || d.name === "אחוז קלורי")}
                            /> :
                            <>
                                <Table
                                    pagination={false}
                                    rowKey={'name'}
                                    style={{ direction: "rtl", width: "100vw" }}
                                    columns={getFinalColumns(data, setData, setKey2, key2, data)}
                                    dataSource={sortedData}
                                />
                            </>
                        }


                        <button onClick={clearMenu}>נקה תפריט</button>
                        <File data={data} setData={setData} />
                    </>}

            </div>

        </>
    )
}

export default Food;


interface DataType {
    key: string;
    name: string;
    meal: any;
    calories: number;
    carbonGram: number;
    fatGram: number;
    proteinGram: number;
    icon: any;
}

interface Imenu {
    meal: any;
    name: string;
    key: number;
    calories: number;
    carbonGram: number;
    fatGram: number;
    proteinGram: number;
    icon: any;
}
const getColumns: (data: any[], setData: (data: any) => void, setKey: any, key: any, realData: any[]) => ColumnsType<Imenu> = (data, setData, setKey, key, realData) => [

    {
        title: 'מאכל',
        dataIndex: 'name',
        key: 'name'
    },
    {
        title: 'חלבון',
        dataIndex: 'proteinGram',
        key: 'proteinGram',
    },
    {
        title: 'פחמימות',
        dataIndex: 'carbonGram',
        key: 'carbonGram',
    },
    {
        title: 'שומנים',
        dataIndex: 'fatGram',
        key: 'fatGram',
    },
    {
        title: 'קלוריות',
        dataIndex: 'calories',
        key: 'calories',
    },
    {
        title: 'מחיקה',
        dataIndex: 'icon',
        key: 'icon',
        render: (icon, vh, v2) =>

            <div onClick={() => {

                setData(realData.filter((d: any) => d.key !== vh.key))

            }} style={{ fontSize: "25px", cursor: "pointer" }}>{
                    vh.icon === "delete" ? <DeleteTwoTone /> : null

                }</div>
    }]
const getFinalColumns: (data: any[], setData: (data: any) => void, setKey: any, key: any, realData: any[]) => ColumnsType<Imenu> = (data, setData, setKey, key, realData) => [

    {
        title: 'מאכל',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: "ארוחה",
        dataIndex: "meal",
        key: "meal",
        render: (text) => text === "ת" ? "" : text
    },
    {
        title: 'חלבון',
        dataIndex: 'proteinGram',
        key: 'proteinGram',
    },
    {
        title: 'פחמימות',
        dataIndex: 'carbonGram',
        key: 'carbonGram',
    },
    {
        title: 'שומנים',
        dataIndex: 'fatGram',
        key: 'fatGram',
    },
    {
        title: 'קלוריות',
        dataIndex: 'calories',
        key: 'calories',
    },
    {
        title: 'מחיקה',
        dataIndex: 'icon',
        key: 'icon',
        render: (icon, vh, v2) =>
            <div onClick={() => {

                setData(realData.filter((d: any) => d.key !== vh.key))
              
        
            }} style={{ fontSize: "25px", cursor: "pointer" }}>{
                    vh.icon === "delete" ? <DeleteTwoTone /> : null

                }</div>
    }]