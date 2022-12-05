import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';
import '.././stylesheets/PlayerAPI.css'

export function PlayerAPI(props) {
  const [playerinfo, setplayerinfo] = useState({tier: '', rank: '', wins:'', losses:'', leaguePoints:'', summonerName:''});
  const [loaded, setloaded] = useState(false);
  const [error, seterror] = useState(false);

  const getPlayerInfo = async () => {
    await axios.get('https://lks-tft-helper-proxy-server.onrender.com/PlayerInfo', {params: {playername: props.name, region: props.region}})
        .then((res)=>{
            if(res === {ERROR: 'ERROR'}){
              seterror(true);
              //setplayerinfo({...playerinfo, tier: 'ERROR', rank: 'ERROR', wins: 'ERROR', losses: 'ERROR'});
            }
            else{
              setplayerinfo({...playerinfo, tier: res.data[0].tier, rank: res.data[0].rank, wins: res.data[0].wins, losses: res.data[0].losses, leaguePoints: res.data[0].leaguePoints, summonerName: res.data[0].summonerName});
            }
        }).catch((err)=>{
            seterror(true);
            console.log(err);
            //setplayerinfo({...playerinfo, tier: 'ERROR', rank: 'ERROR', wins: 'ERROR', losses: 'ERROR'});
        })
    setloaded(true);
  }

  const DisplayResult = () => {
    if(error === true){
      return <div className='Error'>
        <h3>Error!</h3>
        It might be caused by one of reasons below:
        <br></br>
        <ol>
          <li>The player is inactive</li>
          <li>The API key has expired</li>
          <li>The request frequency is too high</li>
          <li>The input (name and/or region) is incorrect</li>
          <li>The Riot API is currently unavailable</li>
        </ol>
      </div>
    }
    return <div className='SearchResult'>
    <div>
      <img id='tier-icon' src={require(`../image/${playerinfo.tier}.jpeg`)} alt={`${playerinfo.tier}`}/>
    </div>
      <div className="TextInfo">
      <span className="summonerName">{playerinfo.summonerName}</span>
      <span>Tier: </span> <span>{(playerinfo.tier.charAt(0)+playerinfo.tier.slice(1).toLowerCase())}</span>
      <span>Division: </span> <span>{playerinfo.rank}</span>
      <span>LP: </span> <span>{playerinfo.leaguePoints}</span>
      <span>Wins: </span> <span>{playerinfo.wins}</span>
      <span>Losses: </span> <span>{playerinfo.losses}</span>
      <span>Winrate: </span> <span>{Math.round((playerinfo.wins/(playerinfo.losses+playerinfo.wins))*100) + '%'}</span>
    </div>
    
  </div>
  }

  const DisplayLoading = () => {
    return <div className="spinner"><Spinner animation="border" role="status" style={{ width: "4rem", height: "4rem" }}>
    <span className="visually-hidden">Loading...</span>
  </Spinner></div>
  }

    useEffect(()=>{
      seterror(false);
      setloaded(false);
      getPlayerInfo();
    },[props.name]);

    return <div className="body">
          {loaded ? 
          //if loaded is true, render result
            DisplayResult()
          : 
          //if loaded is false, render loading spinner
            DisplayLoading()
          }
      </div>;
  }