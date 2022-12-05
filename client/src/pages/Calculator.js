import '.././stylesheets/Calculator.css'
import { useEffect, useState } from "react";

export function Calculator() {
    const [data, setdata] = useState({level: 1, target: 1, outOfPool: 0, units: 13, maxNumberOfUnit: 29});
    const odds = [
        [1, 0, 0, 0, 0],
        [1, 0, 0, 0, 0],
        [0.75, 0.25, 0, 0, 0],
        [0.55, 0.3, 0.15, 0, 0],
        [0.45, 0.33, 0.2, 0.02, 0],
        [0.25, 0.4, 0.3, 0.05, 0],
        [0.19, 0.3, 0.35, 0.15, 0.01],
        [0.16, 0.2, 0.35, 0.25, 0.04],
        [0.09, 0.15, 0.3, 0.3, 0.16],
        [0.05, 0.1, 0.2, 0.4, 0.25],
        [0.01, 0.02, 0.12, 0.5, 0.35]
    ];

    const onChange = (e) => {
        setdata({...data, [e.target.name]: e.target.value});
    }

    useEffect(()=>{
        switch(data.target){
            case '1':
                setdata({...data, units: 13, maxNumberOfUnit: 29});
                break;
            case '2':
                setdata({...data, units: 13, maxNumberOfUnit: 22});
                break;
            case '3':
                setdata({...data, units: 14, maxNumberOfUnit: 18});
                break;
            case '4':
                setdata({...data, units: 12, maxNumberOfUnit: 12});
                break;
            case '5':
                setdata({...data, units: 8, maxNumberOfUnit: 10});
                break;
             default:
                 break;
        }
    },[data.target, data])

    const calculate = () =>{
        if(data.outOfPool >= data.maxNumberOfUnit){
            return 'Infinity';
        }
        else{
            return (1/((((Math.min(Math.max((data.maxNumberOfUnit), 0), 29))-(Math.min(Math.max((data.outOfPool), 0), data.maxNumberOfUnit)))/((Math.min(Math.max((data.maxNumberOfUnit), 0), 29)) * (Math.min(Math.max((data.units), 0), 14)))) * odds[Math.min(Math.max((data.level-1), 0), 10)][Math.min(Math.max((data.target-1), 0), 4)] * 5));
        }
    }

    return <div className='Calculator'>
        <div className='calcontent'>
            <h1>Expected Rolling Cost Calculator</h1>
            <div className='calculator-note'>
                <h2>Note:</h2>
                <article>
                    <li>Rolling Level: The level that you would like to start rolling at</li>
                    <li>Target Unit Cost: The cost of the targeted unit (6/7/8-cost dragons count as 3/4/5-cost units respectively)</li>
                    <li>Number Of Units Out Of Pool: The number of targeted units that are already held by other players</li>
                    <br></br>
                    Notice that this calculator does not take the number of other units 
                    that are out of the pool in account. 
                    Thus, the actual expected number of rolls needed might be lower.
                </article>
            </div>
            <div className='input'>
                <div>
                    <span>Rolling Level:</span>
                    <input type="number" id="level" name="level" defaultValue={data.level} onChange={onChange} min='1' max='11'></input>
                </div>
                <div>
                    <span>Target Unit Cost:</span>
                    <input type="number" id="target" name="target" defaultValue={data.target} onChange={onChange} min='1' max='5'></input>
                </div>
                <div>
                    <span>Number Of Units Out Of Pool:</span>
                    <input type="number" id="outOfPool" name="outOfPool" defaultValue={data.outOfPool} onChange={onChange} min='0' max={data.maxNumberOfUnit}></input>
                </div>
            </div>
            <div className='result'>
                <div>Expected Number of Rolls Needed = <span style={{fontWeight:'bold', fontSize:'25px'}}>{Math.round(calculate()*10)/10}</span> Rolls</div>
                <div>Expected Cost for Rolling = <span style={{fontWeight:'bold', fontSize:'25px'}}>{Math.round(calculate()*20)/10}</span> Gold</div>
            </div>
        </div>
    </div>;
    
}