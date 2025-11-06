import rockImage from '../src/assets/rock.png'
import paperImage from '../src/assets/paper.png'
import scissorImage from '../src/assets/scissor.png'
import '../styles/matchingSection-style.css'


export const MatchingSection = () => {
    return (
        <div className="match-section">
            <div>player choosen hero</div>
            <div>result</div>
            <div>bot choosen hero</div>
        </div>
    )
}