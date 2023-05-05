/* eslint-disable no-unused-vars */
import Cabin from '../../../assets/img/portfolio/cabin.png'
import cake from '../../../assets/img/portfolio/cake.png'
import circus from '../../../assets/img/portfolio/circus.png'
import game from '../../../assets/img/portfolio/game.png'
import safe from '../../../assets/img/portfolio/safe.png'
import submarine from '../../../assets/img/portfolio/submarine.png'

export default function getPost(){
    let arr = [{img:Cabin,heading:'LOG CABIN'},{img:cake,heading:'TASTY CAKE'},{img:circus,heading:'CIRCUS TENT'},{img:game,heading:'CONTROLLER'},{img:safe,heading:'LOCKED SAFE'},{img:submarine,heading:'SUBMARINE'}]
   
    const desc = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.`
    
    return arr.map((item,index) => ({...item, id:index, desc}))
}