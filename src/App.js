import "./App.css";
import data from "./players";
import teams from "./teams.json";
import * as NBAIcons from "react-nba-logos";
import PlayerCard from "./playercard";
import { useEffect, useState } from "react";

function App() {
  const [team, setTeam] = useState(null);
  const [displayed, setDisplayed] = useState([]);

  useEffect(() => {
    let tId = null,
      displayedPlayers = [];
    for (let i = 0; i < teams.length; i++) {
      if (teams[i].abbreviation === team) tId = teams[i].teamId;
    }
    for (let i = 0; i < data.length; i++) {
      if (data[i].teamId === String(tId)) displayedPlayers.push(data[i]);
    }
    setDisplayed(displayedPlayers);
  }, [team]);

  useEffect(() => {
    console.log(displayed);
  }, [displayed]);

  return (
    <div>
      <div className="mx-auto max-w-screen-lg grid grid-cols-10 justify-items-center items-center">
        <button onClick={() => setTeam("ATL")}>
          <NBAIcons.ATL size={60} />
        </button>
        <button onClick={() => setTeam("BKN")}>
          <NBAIcons.BKN size={60} />
        </button>
        <button onClick={() => setTeam("BOS")}>
          <NBAIcons.BOS size={60} />
        </button>
        <button onClick={() => setTeam("CHA")}>
          <NBAIcons.CHA size={60} />
        </button>
        <button onClick={() => setTeam("CHI")}>
          <NBAIcons.CHI size={60} />
        </button>
        <button onClick={() => setTeam("CLE")}>
          <NBAIcons.CLE size={60} />
        </button>
        <button onClick={() => setTeam("DAL")}>
          <NBAIcons.DAL size={60} />
        </button>
        <button onClick={() => setTeam("DEN")}>
          <NBAIcons.DEN size={60} />
        </button>
        <button onClick={() => setTeam("DET")}>
          <NBAIcons.DET size={60} />
        </button>
        <button onClick={() => setTeam("GSW")}>
          <NBAIcons.GSW size={60} />
        </button>
        <button onClick={() => setTeam("HOU")}>
          <NBAIcons.HOU size={60} />
        </button>
        <button onClick={() => setTeam("IND")}>
          <NBAIcons.IND size={60} />
        </button>
        <button onClick={() => setTeam("LAC")}>
          <NBAIcons.LAC size={60} />
        </button>
        <button onClick={() => setTeam("LAL")}>
          <NBAIcons.LAL size={60} />
        </button>
        <button onClick={() => setTeam("MEM")}>
          <NBAIcons.MEM size={60} />
        </button>
        <button onClick={() => setTeam("MIA")}>
          <NBAIcons.MIA size={60} />
        </button>
        <button onClick={() => setTeam("MIL")}>
          <NBAIcons.MIL size={60} />
        </button>
        <button onClick={() => setTeam("MIN")}>
          <NBAIcons.MIN size={60} />
        </button>
        <button onClick={() => setTeam("NOP")}>
          <NBAIcons.NOP size={60} />
        </button>
        <button onClick={() => setTeam("NYK")}>
          <NBAIcons.NYK size={60} />
        </button>
        <button onClick={() => setTeam("OKC")}>
          <NBAIcons.OKC size={60} />
        </button>
        <button onClick={() => setTeam("ORL")}>
          <NBAIcons.ORL size={60} />
        </button>
        <button onClick={() => setTeam("PHI")}>
          <NBAIcons.PHI size={60} />
        </button>
        <button onClick={() => setTeam("PHX")}>
          <NBAIcons.PHX size={60} />
        </button>
        <button onClick={() => setTeam("POR")}>
          <NBAIcons.POR size={60} />
        </button>
        <button onClick={() => setTeam("SAC")}>
          <NBAIcons.SAC size={60} />
        </button>
        <button onClick={() => setTeam("SAS")}>
          <NBAIcons.SAS size={60} />
        </button>
        <button onClick={() => setTeam("TOR")}>
          <NBAIcons.TOR size={60} />
        </button>
        <button onClick={() => setTeam("UTA")}>
          <NBAIcons.UTA size={60} />
        </button>
        <button onClick={() => setTeam("WAS")}>
          <NBAIcons.WAS size={60} />
        </button>
      </div>
      <div className="mx-auto max-w-screen-lg	grid grid-cols-3 justify-items-center items-center">
        {displayed.length ? (
          displayed.map((player) => {
            return (
              <div key="player.personId">
                <PlayerCard
                  firstName={player.firstName}
                  lastName={player.lastName}
                  personId={player.personId}
                  position={player.pos}
                  draft={player.draft}
                />
              </div>
            );
          })
        ) : (
          <div>Select a team</div>
        )}
      </div>
    </div>
  );
}

export default App;
