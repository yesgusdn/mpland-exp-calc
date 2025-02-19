import { useState } from "react";
import MyInput from "../../Components/myInput";
import MyButton from "../../Components/myButton";
import CalcButton from "../../Components/calcButton";
import ExpButton from "../../Components/expButton";
import expList from "./../../data";

const timeList = [
  { id: 5, name: "5분", value: 5 },
  { id: 10, name: "10분", value: 10 },
  { id: 30, name: "30분", value: 30 },
  { id: 60, name: "1시간", value: 60 },
];

const addList = [
  { id: "10000", name: "1만", value: "10000" },
  { id: "50000", name: "5만", value: "50000" },
  { id: "100000", name: "10만", value: "100000" },
  { id: "500000", name: "50만", value: "500000" },
  { id: "1000000", name: "100만", value: "1000000" },
  { id: "5000000", name: "500만", value: "5000000" },
];
const Home = () => {
  const [currentLvl, setCurrentLvl] = useState("");
  const [targetLvl, setTargetLvl] = useState("");
  const [currentExp, setCurrentExp] = useState("");
  const [exp, setExp] = useState("");

  const [nowTime, setNowTime] = useState(5);

  const [needTime, setNeedTime] = useState(0);

  const onKeyUp = (e) => {
    e.target.value.replace(/[^0-9]/g, "");
  };
  const onChangeLvl = (e) => {
    const newValue = e.target.value;
    setCurrentLvl(newValue);
  };

  const onChangeTargetLvl = (e) => {
    const newValue = e.target.value;
    setTargetLvl(newValue);
  };

  const onChangeCurrentExp = (e) => {
    const newValue = e.target.value;

    setCurrentExp(newValue);
  };

  const onChangeExp = (e) => {
    const newValue = e.target.value;

    setExp(newValue);
  };

  const addExp = (addValue) => {
    const newValue = Number(exp) + Number(addValue);
    setExp(newValue);
  };

  // 초기화
  const onCalcInit = () => {
    setExp("");
    setNeedTime("");
  };

  const onCalcExp = () => {
    if (!currentLvl || !targetLvl || !exp) {
      return;
    }

    let needExp = 0;

    for (let i = currentLvl; i < targetLvl; i++) {
      needExp += Number(expList.exps[i]);
    }

    needExp = currentExp ? needExp - Number(currentExp) : needExp;
    console.log(needExp);
    let resultTime = ((needExp / exp) * Number(nowTime)) / 60;
    resultTime = Math.round(resultTime * 1000) / 1000;
    setNeedTime(resultTime);
  };

  return (
    <div className="p-10 sm:w-2/3 md:w-2/3 lg:w-1/3 w-2/3 space-y-3">
      <div className="grid gap-6 mb-6 grid-cols-2">
        <div>
          <MyInput
            type="number"
            value={currentLvl}
            onChange={onChangeLvl}
            onKeyUp={onKeyUp}
            placeholder="현재 레벨"
          />
        </div>
        <div>
          <MyInput
            type="number"
            value={targetLvl}
            onChange={onChangeTargetLvl}
            onKeyUp={onKeyUp}
            placeholder="목표 레벨"
          />
        </div>
      </div>
      <MyInput
        id="3"
        type="number"
        onChange={onChangeCurrentExp}
        value={currentExp}
        placeholder="현재 경험치"
      ></MyInput>
      <div className="flex space-x-1">
        {timeList.map((time) => (
          <div key={time.id}>
            <MyButton
              active={nowTime === time.id}
              onClick={() => setNowTime(time.id)}
            >
              {time.name}
            </MyButton>
          </div>
        ))}
      </div>
      <MyInput
        id="3"
        type="number"
        onChange={onChangeExp}
        value={exp}
        placeholder="획득 경험치"
      ></MyInput>
      <div className="flex space-x-1">
        {addList.map((add) => (
          <div key={add.id}>
            <ExpButton onClick={() => addExp(add.value)}>{add.name}</ExpButton>
          </div>
        ))}
      </div>
      <div className="flex space-x-1">
        <CalcButton type="refresh" onClick={onCalcInit}>
          초기화
        </CalcButton>
        <CalcButton type="calc" onClick={onCalcExp}>
          계산하기
        </CalcButton>
      </div>
      <div>목표레벨까지 필요한 시간은 {needTime} 시간</div>
    </div>
  );
};

export default Home;
