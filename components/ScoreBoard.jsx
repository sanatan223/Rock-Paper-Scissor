import { useScore } from '../context/scoreContext'
import '../styles/scoreBoard.css'

export const ScoreBoard = () => {
    const { score } = useScore();

    return (
        <>
            <div className="scoreboard-container">
                <div>
                    <div className="chunky-title title-wins">
                        WINS
                    </div>
                    <div className="pixel-score score-white">
                        <span id="wins-count">{score.wins}</span>
                    </div>
                </div>

                <div>
                    <div className="chunky-title title-ties">
                        TIES
                    </div>
                    <div className="pixel-score score-orange">
                        <span id="ties-count">{score.ties}</span>
                    </div>
                </div>

                <div>
                    <div className="chunky-title title-loses">
                        LOSES
                    </div>
                    <div className="pixel-score score-white">
                        <span id="loses-count">{score.loses}</span>
                    </div>
                </div>
            </div>
        </>
    )
}