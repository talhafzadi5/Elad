import { Select } from "antd";
import { useEffect, useState } from "react";
import "./style.scss"



const Calculation = () => {

    const [gender, setGender] = useState<string>();
    const [age, setAge] = useState<string>();
    const [height, setHeight] = useState<number>();
    const [weight, setWeight] = useState<number>();
    const [workoutsAmount, setWorkoutsAmount] = useState<string>()
    const [aSets, setASets] = useState<number>();
    const [aCalories, setACalories] = useState<number>();
    const [aResult, setAresult] = useState<number>();
    const [bSets, setBSets] = useState<number>();
    const [bCalories, setBCalories] = useState<number>();
    const [bResult, setBresult] = useState<number>();
    const [cSets, setCSets] = useState<number>();
    const [cCalories, setCCalories] = useState<number>();
    const [cResult, setCresult] = useState<number>();
    const [activeOrNotTee, setActiveOrNotTee] = useState<string>();
    const [tee1, setTee1] = useState<number>();
    const [tee2, setTee2] = useState<number>();
    const [aerobic, setAerobic] = useState<string>();
    const [distance, setDistance] = useState<number>();
    const [bmr, setBmr] = useState<number>();
    const [totalWeeklyTraining, setTotalWeeklyTraining] = useState<number>();
    const [practices, setPractices] = useState<string>();
    const [aerobicTimes, setAerobicTimes] = useState<number>();
  
  
  
    const onChange = (value: string) => {
      setGender(value)
    };
    const workoutsOnChange = (value: string) => {
      setWorkoutsAmount(value)
    };
    const activeOnChangeTee = (value: string) => {
      setActiveOrNotTee(value)
    };
    const aerobicOnChange = (value: string) => {
      setAerobic(value)
    };
    const practicesOnChange = (value: string) => {
      setPractices(value)
    };
    const onAerobicTimesChange = (value:number) => {
      setAerobicTimes(value)
    }
  
  
    useEffect(() => {
      if (practices !== undefined && bmr !== undefined) {
        if (practices === "0") {
          setTee2(bmr * 1.2);
        }
        if (practices === "1-3") {
          setTee2(bmr * 1.375);
        }
        if (practices === "3-5") {
          setTee2(bmr * 1.55);
        }
        if (practices === "6-7") {
          setTee2(bmr * 1.725);
        }
        if (practices === "14") {
          setTee2(bmr * 1.9);
        }
      }
      if (bmr !== undefined && totalWeeklyTraining !== undefined) {
        if (activeOrNotTee === "אקטיבי") {
          setTee1(bmr * 1.35 + (totalWeeklyTraining * 1.1) / 7);
        }
        else if (activeOrNotTee === "לא אקטיבי") {
          setTee1(bmr * 1.2 + (totalWeeklyTraining * 1.1) / 7);
        }
      }
      if (age !== undefined && height !== undefined && weight !== undefined && gender !== undefined) {
        if (gender === "זכר") {
          setBmr((66 + (13.7 * weight) + (5 * height) - (6.8 * parseInt(age))))
        }
        else if (gender === "נקבה") {
          setBmr(655 + (9.6 * weight) + (1.8 * height) - (4.7 * parseInt(age)))
        }
      }
      if (aCalories !== undefined && aSets !== undefined) {
        setAresult(aCalories * aSets)
      }
      if (bCalories !== undefined && bSets !== undefined) {
        setBresult(bSets * bCalories)
      }
      if (cCalories !== undefined && cSets !== undefined) {
        setCresult(cSets * cCalories)
      }
      if (aerobicTimes !== undefined) {
        if (workoutsAmount !== undefined && parseInt(workoutsAmount) === 2 && aResult !== undefined && bResult !== undefined && aerobic === "ריצה" && distance !== undefined && weight !== undefined) {
          setTotalWeeklyTraining(2 * (aResult + bResult) + (weight * distance * aerobicTimes))
        }
        if (workoutsAmount !== undefined && parseInt(workoutsAmount) === 3 && aResult !== undefined && bResult !== undefined && aerobic === "ריצה" && distance !== undefined && weight !== undefined) {
          setTotalWeeklyTraining(3 * (aResult + bResult) + (weight * distance * aerobicTimes))
        }
        if (workoutsAmount !== undefined && parseInt(workoutsAmount) === 4 && aResult !== undefined && bResult !== undefined && aerobic === "ריצה" && distance !== undefined && weight !== undefined) {
          setTotalWeeklyTraining(2 * (aResult + bResult) + (weight * distance * aerobicTimes))
        }
        if (workoutsAmount !== undefined && parseInt(workoutsAmount) === 6 && aResult !== undefined && bResult !== undefined && aerobic === "ריצה" && distance !== undefined && weight !== undefined && cResult !== undefined) {
          setTotalWeeklyTraining(2 * (aResult + bResult + cResult) + (weight * distance * aerobicTimes))
        }
        if (workoutsAmount !== undefined && parseInt(workoutsAmount) === 2 && aResult !== undefined && bResult !== undefined && aerobic === "הליכה" && distance !== undefined && weight !== undefined) {
          setTotalWeeklyTraining(2 * (aResult + bResult) + (weight * 0.8 * distance * aerobicTimes))
        }
        if (workoutsAmount !== undefined && parseInt(workoutsAmount) === 3 && aResult !== undefined && bResult !== undefined && aerobic === "הליכה" && distance !== undefined && weight !== undefined) {
          setTotalWeeklyTraining(3 * (aResult + bResult) + (weight * 0.8 * distance * aerobicTimes))
        }
        if (workoutsAmount !== undefined && parseInt(workoutsAmount) === 4 && aResult !== undefined && bResult !== undefined && aerobic === "הליכה" && distance !== undefined && weight !== undefined) {
          setTotalWeeklyTraining(2 * (aResult + bResult) + (weight * 0.8 * distance * aerobicTimes))
        }
        if (workoutsAmount !== undefined && parseInt(workoutsAmount) === 6 && aResult !== undefined && bResult !== undefined && aerobic === "הליכה" && distance !== undefined && weight !== undefined && cResult !== undefined) {
          setTotalWeeklyTraining(2 * (aResult + bResult + cResult) + (weight * 0.8 * distance * aerobicTimes))
        }
      }
  
        if (workoutsAmount !== undefined && parseInt(workoutsAmount) === 2 && aResult !== undefined && bResult !== undefined && aerobic === "ללא") {
          setTotalWeeklyTraining(2 * (aResult + bResult))
        }
        if (workoutsAmount !== undefined && parseInt(workoutsAmount) === 3 && aResult !== undefined && bResult !== undefined && aerobic === "ללא") {
          setTotalWeeklyTraining(3 * (aResult + bResult))
        }
        if (workoutsAmount !== undefined && parseInt(workoutsAmount) === 4 && aResult !== undefined && bResult !== undefined && aerobic === "ללא") {
          setTotalWeeklyTraining(2 * (aResult + bResult))
        }
        if (workoutsAmount !== undefined && parseInt(workoutsAmount) === 6 && aResult !== undefined && bResult !== undefined && aerobic === "ללא" && cResult !== undefined) {
          setTotalWeeklyTraining(2 * (aResult + bResult + cResult))
        }
  
  
    }, [aCalories, aSets, bSets, bCalories, cCalories, cSets, aerobic, distance, weight, height, age, workoutsAmount, gender, activeOrNotTee, totalWeeklyTraining, practices, bmr, aerobicTimes])
    return (
      <>
  
        <div className="wrapper">
          <div className="title">
            <h1>חישוב קלורי</h1>
          </div>
          <div className="second-wrapper">
            <div className='image1'>
              <div></div>
              <div>
                <img style={{height:"500px"}} src='/row.jpg' />
              </div>
              <div></div>
            </div>
            <div className="details">
  
              <div className="details1">
                <Select className='genderSelection'
                  onChange={onChange}
                  value={gender}
                  bordered={false}
                  placeholder="מין "
                  options={[
                    {
                      value: 'זכר',
                      label: 'זכר',
                    },
                    {
                      value: 'נקבה',
                      label: 'נקבה',
                    }
                  ]}
                ></Select>
                <div >
                  <input className='ageInput' type="text"
                    placeholder='גיל'
                    pattern="[0-9]*"
                    maxLength={3}
                    value={age}
                    onChange={(e) =>
                      setAge((v) => (e.target.validity.valid && parseInt(e.target.value) <= 100 && parseInt(e.target.value) >= 1 ? e.target.value : v))
                    } />
  
                </div>
                <div >
                  <input className='heightInput' type="text"
                    placeholder='גובה'
                    pattern="[0-9]*"
                    maxLength={3}
                    value={height}
                    onChange={(e: any) => setHeight(e.target.value)}
  
                  />
                </div>
                <div >
                  <input className='weightInput' type="text"
                    placeholder='משקל'
                    maxLength={6}
                    value={weight}
                    onChange={(e: any) => setWeight(e.target.value)}
  
                  />
                </div>
                BMR/BEE : {bmr?.toFixed(1)}
                <div>
                </div>
  
                <Select className='workoutsAmountSection'
                  onChange={workoutsOnChange}
                  value={workoutsAmount}
                  bordered={false}
                  placeholder="מספר אימוני כוח בשבוע"
                  options={[
                    {
                      value: '2',
                      label: '2',
                    },
                    {
                      value: '3',
                      label: '3',
                    },
                    {
                      value: '4',
                      label: '4',
                    },
                    {
                      value: '6',
                      label: '6',
                    }
                  ]}
                ></Select>
              </div>
  
              <div className="details2">
                <div className="A">
                  <input type="text" value={aCalories} onChange={(e) => setACalories(parseInt(e.target.value))} placeholder='A קלוריות סט עליון' />
                  <input type="text" value={aSets} onChange={(e) => setASets(parseInt(e.target.value))} placeholder='A סטים' />
                  <p>A סכום: {aResult?.toFixed(1)}</p>
                </div>
                <div className="B">
                  <input type="text" value={bCalories} onChange={(e) => setBCalories(parseInt(e.target.value))} placeholder='B קלוריות סט תחתון' />
                  <input type="text" value={bSets} onChange={(e) => setBSets(parseInt(e.target.value))} placeholder='B סטים' />
                  <p>B סכום: {bResult?.toFixed(1)}</p>
                </div>
                <div className="C">
                  <input type="text" value={cCalories} onChange={(e) => setCCalories(parseInt(e.target.value))} placeholder='C קלוריות' />
                  <input type="text" value={cSets} onChange={(e) => setCSets(parseInt(e.target.value))} placeholder='C סטים' />
                  <p>C סכום: {cResult?.toFixed(1)}</p>
                </div>
                <div className="aerobic">
                  <Select className='aerobicSelect'
                    onChange={aerobicOnChange}
                    bordered={false}
                    value={aerobic}
                    placeholder="אירובי"
  
                    options={[
                      {
                        value: 'ללא',
                        label: 'ללא',
                      },
                      {
                        value: 'הליכה',
                        label: 'הליכה',
                      },
                      {
                        value: 'ריצה',
                        label: 'ריצה',
                      }
                    ]}
                  ></Select>
                </div>
                <div className="distance">
                  {aerobic === "ריצה" || aerobic === "הליכה" ? <input placeholder='מרחק' value={distance} onChange={(e: any) => setDistance(e.target.value)}></input> : null}
                </div>
                <div>
                  {aerobic === "ריצה" || aerobic === "הליכה" ? <>
                    <Select className='aerobicSelect'
                      onChange={onAerobicTimesChange}
                      bordered={false}
                      value={aerobicTimes}
                      placeholder="כמות אירובי שבועית"
  
                      options={[    
                        {
                          value: '1',
                          label: '1',
                        },
                        {
                          value: '2',
                          label: '2',
                        },
                        {
                          value: '3',
                          label: '3',
                        },
                        {
                          value: '4',
                          label: '4',
                        },
                        {
                          value: '5',
                          label: '5',
                        },
                        {
                          value: '6',
                          label: '6',
                        }, {
                          value: '7',
                          label: '7',
                        }
                      ]}
                    ></Select>
                  </> : null}
                </div>
                <div> total weekly training: {totalWeeklyTraining?.toFixed(1)}</div>
  
  
              </div>
              <div className="details3">
                <div className='activeOrNot'>
                  <Select className='activeOrNotSelect'
                    onChange={activeOnChangeTee}
                    value={activeOrNotTee}
                    bordered={false}
                    placeholder="אקטיבציה"
                    options={[
                      {
                        value: 'אקטיבי',
                        label: 'אקטיבי',
                      },
                      {
                        value: 'לא אקטיבי',
                        label: 'לא אקטיבי',
                      }
                    ]}
                  ></Select>
                </div>
  
                <div>Tee 1: {tee1?.toFixed(1)}</div>
                <Select className='genderSelection'
                  onChange={practicesOnChange}
                  value={practices}
                  bordered={false}
                  placeholder="אימונים"
                  options={[
                    {
                      value: '0',
                      label: '0',
                    },
                    {
                      value: '1-3',
                      label: '1-3',
                    },
                    {
                      value: "3-5",
                      label: "3-5"
                    },
                    {
                      value: "6-7",
                      label: "6-7"
                    },
                    {
                      value: "14",
                      label: "14"
                    }
                  ]}
                ></Select>
                <div>Tee 2: {tee2?.toFixed(1)}</div>
              </div>
            </div>
  
            <div className='image2'>
              <div></div>
                  
              <div></div>
            </div>
          </div>
        </div>
      </>
    )
}

export default Calculation;