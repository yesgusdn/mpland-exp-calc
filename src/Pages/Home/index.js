import { useState } from "react";
import MyInput from "../../Components/myInput";
import MyButton from "../../Components/myButton";
import CalcButton from "../../Components/calcButton";
import ExpButton from "../../Components/expButton";
import data from "./../../data";

const Home = () => {
    const [currentLvl, setCurrentLvl] = useState("");
    const [targetLvl, setTargetLvl] = useState("");
    const [currentExp, setCurrentExp] = useState("");
    const [exp, setExp] = useState("");

    const [nowTime, setNowTime] = useState(5);

    const [needTime, setNeedTime] = useState(0);

    // 에러메시지
    const [errorMsg, setErrorMsg] = useState("");

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
        setNeedTime(0);
    };

    // 계산하기
    const onCalcExp = () => {
        if (!currentLvl || !targetLvl || !exp) {
            setErrorMsg("레벨과 획득 경험치를 입력해주세요.");
            return;
        }

        const numCurrentLvl = parseInt(currentLvl);
        const numTargetLvl = parseInt(targetLvl);

        if (
            numCurrentLvl > 199 ||
            numCurrentLvl < 1 ||
            numTargetLvl > 200 ||
            numTargetLvl < 2 ||
            numTargetLvl <= numCurrentLvl
        ) {
            setErrorMsg("레벨을 재설정해주세요.");
            return;
        }

        setErrorMsg("");

        let needExp = 0;

        for (let i = currentLvl; i < targetLvl; i++) {
            needExp += Number(data.exps[i]);
        }

        needExp = currentExp ? needExp - Number(currentExp) : needExp;
        console.log(1);
        let resultTime = ((needExp / exp) * Number(nowTime)) / 60;
        resultTime = Math.round(resultTime * 1000) / 1000;
        setNeedTime(resultTime);
    };

    return (
        <div className="p-20 sm:w-2/3 md:w-2/3 lg:w-1/2 xl:w-1/2 space-y-5">
            <div className="text-left space-y-1">
                <p className="text-xl font-bold">메이플랜드 경험치 계산기</p>
                <p className="text-sm text-gray-400">
                    레벨업 예상시간을 확인해보세요!
                </p>
            </div>
            <div className="space-y-3">
                <div className="grid gap-6 grid-cols-2">
                    <div>
                        <MyInput
                            type="text"
                            value={currentLvl}
                            maxlength={3}
                            onChange={onChangeLvl}
                            placeholder="현재 레벨"
                        />
                    </div>
                    <div>
                        <MyInput
                            type="text"
                            value={targetLvl}
                            maxlength={3}
                            onChange={onChangeTargetLvl}
                            placeholder="목표 레벨"
                        />
                    </div>
                </div>
                <MyInput
                    id="3"
                    type="text"
                    onChange={onChangeCurrentExp}
                    maxlength={12}
                    value={currentExp}
                    placeholder="현재 경험치"
                ></MyInput>
            </div>
            <div className="space-y-3">
                <div className="flex space-x-1">
                    {data.timeList.map((time) => (
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
                    type="text"
                    onChange={onChangeExp}
                    value={exp}
                    maxlength={12}
                    placeholder="획득 경험치"
                ></MyInput>

                <div className="flex space-x-1">
                    {data.expAddList.map((add) => (
                        <div key={add.id}>
                            <ExpButton onClick={() => addExp(add.value)}>
                                {add.name}
                            </ExpButton>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex space-x-1">
                <CalcButton type="refresh" onClick={onCalcInit}>
                    초기화
                </CalcButton>
                <CalcButton type="calc" onClick={onCalcExp}>
                    계산하기
                </CalcButton>
            </div>
            {errorMsg && (
                <div>
                    <p className="text-red-500">{errorMsg}</p>
                </div>
            )}
            <div>목표레벨까지 필요한 시간은</div>
            <div>
                <p className="font-bold text-2xl text-blue-500">
                    {needTime} 시간
                </p>
            </div>
        </div>
    );
};

export default Home;
