import '../styles/moves-style.css'
import rockImage from '../src/assets/Rock.png'
import paperImage from '../src/assets/Paper.png'
import scissorImage from '../src/assets/Scissor.png'


export const Moves = () => {
    return (
        <div className='moves-part'>
            <button className="move-button" onClick={()=>{
            addScore('wins', 1);
            }}>
                <img className='move-icon' src={rockImage} alt="rock" />
            </button>

            <button className="move-button">
                <img className='move-icon' src={paperImage} alt="paper" />
            </button>

            <button className="move-button">
                <img className='move-icon' src={scissorImage} alt="scissor" />
            </button>
        </div>
    )
}