import { useState } from "react";
import MyInput from "../../Components/myInput";
import MyButton from "../../Components/myButton";

const timeList = [
    { id: "5min", name: "5분" },
    { id: "10min", name: "10분" },
    { id: "30min", name: "30분" },
    { id: "60min", name: "1시간" },
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
    const [currentLvl, setCurrentLvl] = useState();
    const [targetLvl, setTargetLvl] = useState();
    const [exp, setExp] = useState("");

    const [nowTime, setNowTime] = useState("5min");
    const onChangeLvl = (e) => {
        const newValue = Number(e.target.value.replace(/^0+/, ""));
        // targetLvl이랑 값 비교
        if (targetLvl && Number(targetLvl) < newValue) {
            return;
        }

        if (newValue >= 200) return;

        if (newValue < 0) {
            setCurrentLvl("");
            return;
        }
        setCurrentLvl(newValue);
    };

    const onChangeTargetLvl = (e) => {
        const newValue = Number(e.target.value.replace(/^0+/, ""));
        if (currentLvl && Number(currentLvl) > newValue) {
            return;
        }

        if (newValue > 200) return;

        if (newValue < 0) {
            setCurrentLvl("");
            return;
        }

        setTargetLvl(newValue);
    };

    const onChangeExp = (e) => {
        const newValue = Number(e.target.value.replace(/^0+/, ""));
        if (newValue < 0) {
            setExp(0);
            return;
        }

        if (newValue > 2121276324) {
            return;
        }
        setExp(newValue);
    };

    const addExp = (addValue) => {
        const newValue = Number(exp) + Number(addValue);
        setExp(newValue);
    };

    return (
        <div className="p-10 sm:w-1/3 w-2/3 space-y-3">
            <div className="grid gap-6 mb-6 grid-cols-2">
                <div>
                    <MyInput
                        id="1"
                        type="number"
                        value={currentLvl}
                        onChange={onChangeLvl}
                        placeholder="현재 레벨"
                    />
                </div>
                <div>
                    <MyInput
                        id="2"
                        type="number"
                        value={targetLvl}
                        onChange={onChangeTargetLvl}
                        placeholder="목표 레벨"
                    />
                </div>
            </div>
            <div className="flex space-x-1">
                {timeList.map((time) => (
                    <div key={time.id}>
                        <MyButton
                            active={nowTime === time.id}
                            onClick={(e) => setNowTime(time.id)}
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
                placeholder="획득 경험치량"
            ></MyInput>
            <div className="flex space-x-1">
                {addList.map((add) => (
                    <div key={add.id}>
                        <MyButton onClick={() => addExp(add.value)}>
                            {add.name}
                        </MyButton>
                    </div>
                ))}
            </div>
            <div>
                <MyButton>초기화</MyButton>
                <MyButton>계산하기</MyButton>
            </div>
        </div>
    );
};

export default Home;
