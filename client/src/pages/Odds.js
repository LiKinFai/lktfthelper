import '.././stylesheets/Odds.css'

export function Odds() {
  return <div className='odds'>
    <div className='oddscontent'>
    <div className='header'>
      <h1>Rolling Chances</h1>
    </div>
    <div className='table'>
    <table>
    <tbody>
      <tr>
        <th className='normal'>Level</th>
        <th className='normal'>1-Cost (29 copies)</th>
        <th className='normal'>2-Cost (22 copies)</th>
        <th className='normal'>3-Cost (18 copies)</th>
        <th className='normal'>4-Cost (12 copies)</th>
        <th className='normal'>5-Cost (10 copies)</th>
        <th className='mobile'>LV</th>
        <th className='mobile'>1C</th>
        <th className='mobile'>2C</th>
        <th className='mobile'>3C</th>
        <th className='mobile'>4C</th>
        <th className='mobile'>5C</th>
      </tr>
      <tr>
        <td>1</td>
        <td>100%</td>
        <td>X</td>
        <td>X</td>
        <td>X</td>
        <td>X</td>
      </tr>
      <tr>
        <td>2</td>
        <td>100%</td>
        <td>X</td>
        <td>X</td>
        <td>X</td>
        <td>X</td>
      </tr>
      <tr>
        <td>3</td>
        <td>75%</td>
        <td>25%</td>
        <td>X</td>
        <td>X</td>
        <td>X</td>
      </tr>
      <tr>
        <td>4</td>
        <td>55%</td>
        <td>30%</td>
        <td>15%</td>
        <td>X</td>
        <td>X</td>
      </tr>
      <tr>
        <td>5</td>
        <td>45%</td>
        <td>33%</td>
        <td>20%</td>
        <td>2%</td>
        <td>X</td>
      </tr>
      <tr>
        <td>6</td>
        <td>25%</td>
        <td>40%</td>
        <td>30%</td>
        <td>5%</td>
        <td>X</td>
      </tr>
      <tr>
        <td>7</td>
        <td>19%</td>
        <td>30%</td>
        <td>35%</td>
        <td>15%</td>
        <td>1%</td>
      </tr>
      <tr>
        <td>8</td>
        <td>16%</td>
        <td>20%</td>
        <td>35%</td>
        <td>25%</td>
        <td>4%</td>
      </tr>
      <tr>
        <td>9</td>
        <td>9%</td>
        <td>15%</td>
        <td>30%</td>
        <td>30%</td>
        <td>16%</td>
      </tr>
      <tr>
        <td>10</td>
        <td>5%</td>
        <td>10%</td>
        <td>20%</td>
        <td>40%</td>
        <td>25%</td>
      </tr>
      <tr>
        <td>11</td>
        <td>1%</td>
        <td>2%</td>
        <td>12%</td>
        <td>50%</td>
        <td>35%</td>
      </tr>
    </tbody>
    </table>
    </div>
    </div>
  </div>;
  
}