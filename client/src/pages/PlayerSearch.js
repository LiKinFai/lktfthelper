import '.././stylesheets/PlayerSearch.css'
import { PlayerAPI } from "./PlayerAPI"
import { useState } from 'react';

export function PlayerSearch() {
  const [formData, setFormData] = useState({ name: "" , region: "br1"});
  const [submittedData, setsubmittedData] = useState({ submittedname:"" });
  

  const onChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

    function handlesubmit(e) {
      setsubmittedData({ ...submittedData, submittedname: formData.name , region: formData.region});
      e.preventDefault();
    }

    return <div className='playersearch'>
      <div className= 'playercontent'>
      <div className='playernote'>
      <h2>Note:</h2>
      <article>Since this website does not have a Production API key from Riot, 
        we have access to very few methods and the request rate is limited to 100 requests (50 searches) every 2 minutes.</article>
      </div>
      <div className='below-note'>
      <div>
        <form onSubmit={handlesubmit} method='GET' autoComplete="off">
          <div className='inputfield'>
          <input placeholder='Search Player Name' onFocus={(e)=>{e.target.placeholder=''}} type="text" id="name" name="name" value={formData.name} onChange={onChange}/>
            <div className='dropdown'>
              <select name='region' id='region' onChange={onChange}>
                <option value='br1'>BR</option>
                <option value='eun1'>EUNE</option>
                <option value='euw1'>EUW</option>
                <option value='jp1'>JP</option>
                <option value='kr'>KR</option>
                <option value='la1'>LAN</option>
                <option value='la2'>LAS</option>
                <option value='na1'>NA</option>
                <option value='oc1'>OCE</option>
                <option value='ru'>RU</option>
                <option value='tr1'>TR</option>
              </select>
            </div>
            <button type='submit' className='submit'>Submit</button>
          </div> 
        </form>
      </div>
      <div>
        {submittedData.submittedname !== "" && <PlayerAPI name={submittedData.submittedname} region={submittedData.region} />}
      </div>
      </div>
      </div>
    </div>
  }