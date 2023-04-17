
import React, { Component } from 'react'
const cardImages = [
    {"src" : "/img/HeadShield.png" }
]

export class MemoryFlipComponent extends Component {
    constructor() {
      super()
    
      this.state = {
         BoxOneMessage: "Touch Me",
         BoxTwoMessage: "Touch Me",
         BoxThreeMessage: "Touch Me",
         BoxFourMessage: "Touch Me"
      }
    }
    BoxOneEventHandler = () =>
    {
        this.state.BoxOneMessage === 'Touch Me' ?(
            this.setState({
                BoxOneMessage: '1'
                        })
        ): (
            this.setState({
                subscribeBtn : 'Touch Me'
            })
        )
    }
        BoxOne = () => {
            this.setState({
                BoxOneMessage : '1'
        })
    }
        BoxTwo = () => {
            this.setState({
                BoxTwoMessage : '2'
        })
    }
        BoxThree = () => {
            this.setState({
                BoxThreeMessage : '1'
        })
    }
        BoxFour = () => {
            this.setState({
                BoxFourMessage : '2'
        })
    }
  render() {
    const { BoxOneMessage,  BoxTwoMessage, BoxThreeMessage,  BoxFourMessage } = this.state
    return (
        <React.Fragment>
            <div className='flex flex-row gap-2 justify-center items-center h-screen'> 
                <div className='grid grid-cols-4 gap-2'>
                    <div onClick={this.BoxOneEventHandler} className='flex  justify-center items-center bg-gray-300 text-black w-[120px] h-[160px] font-bold text-xl p-2 rounded-lg'>
                        {this.state.BoxOneMessage}
                    </div>
                    <div onClick={this.BoxTwo} className='flex  justify-center items-center bg-gray-300 text-black w-[120px] h-[160px]  font-bold text-xl p-2 rounded-lg'>
                        {BoxTwoMessage}
                    </div>
                    <div onClick={this.BoxThree} className='flex  justify-center items-center bg-gray-300 text-black w-[120px] h-[160px]  font-bold text-xl p-2 rounded-lg'>
                        {BoxThreeMessage}
                    </div>
                    <div onClick={this.BoxFour} className='flex  justify-center items-center bg-gray-300 text-black w-[120px] h-[160px]  font-bold text-xl p-2 rounded-lg'>
                        {BoxFourMessage}
                    </div>        
                    <h2 className='text-xl font-bold text-black '>Turns : </h2>
                <button className=' bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full'>Shuffle</button>        
                </div>
                
            </div>
           
        </React.Fragment>     
        )
  }
}

export default MemoryFlipComponent

// import React, { useState, useEffect } from 'react';

// const cardArray = [  { name: 'apple', img: 'image_memorygame/apple.jpg' }, 
// { name: 'banana', img: 'image_memorygame/banana.jpg' },  
// { name: 'grapes', img: 'image_memorygame/grapes.jpg' },  
// { name: 'kiwi', img: 'image_memorygame/kiwi.jpg' },  
// { name: 'lemon', img: 'image_memorygame/lemon.jpg' },  
// { name: 'orange', img: 'image_memorygame/orange.jpg' },  
// { name: 'pear', img: 'image_memorygame/pear.jpg' },  
// { name: 'watermelon', img: 'image_memorygame/watermelon.jpg' }];

// function MemoryGame() {
//   const [cards, setCards] = useState([]);
//   const [cardChoosen, setCardChoosen] = useState([]);
//   const [cardChoosenId, setCardChoosenId] = useState([]);
//   const [cardWon, setCardWon] = useState([]);
//   const [result, setResult] = useState(0);

//   useEffect(() => {
//     createBoard();
//   }, []);

//   useEffect(() => {
//     if (cardWon.length === cardArray.length / 2) {
//       setResult("you won✌️✌️✌️");
//     }
//   }, [cardWon]);

//   function createBoard() {
//     let shuffledCards = cardArray.sort(() => 0.5 - Math.random());
//     let cardElements = shuffledCards.map((card, index) => {
//       return (
//         <img
//           key={index}
//           src={'image_memorygame/qm.jpg'}
//           data-id={index}
//           onClick={flipCard}
//         />
//       );
//     });
//     setCards(cardElements);
//   }

//   function checkMatch() {
//     const optionOneId = cardChoosenId[0];
//     const optionTwoId = cardChoosenId[1];
//     console.log(cardWon);
//     if (optionOneId === optionTwoId) {
//       alert('match found!!');
//     }

//     if (cardChoosen[0] === cardChoosen[1]) {
//       let newCards = [...cards];
//       newCards[optionOneId] = (
//         <img
//           key={optionOneId}
//           src={'image_memorygame/tick.jpg'}
//         />
//       );
//       newCards[optionTwoId] = (
//         <img
//           key={optionTwoId}
//           src={'image_memorygame/tick.jpg'}
//         />
//       );
//       setCards(newCards);

//       let updatedCardWon = [...cardWon];
//       updatedCardWon.push(cardChoosen);
//       setCardWon(updatedCardWon);

//       let clickedCards = [...cardChoosenId];
//       clickedCards.forEach(id => {
//         let card = document.querySelector(`[data-id='${id}']`);
//         card.removeEventListener('click', flipCard);
//       });
//     } else {
//       let newCards = [...cards];
//       newCards[optionOneId] = (
//         <img
//           key={optionOneId}
//           src={'image_memorygame/qm.jpg'}
//           data-id={optionOneId}
//           onClick={flipCard}
//         />
//       );
//       newCards[optionTwoId] = (
//         <img
//           key={optionTwoId}
//           src={'image_memorygame/qm.jpg'}
//           data-id={optionTwoId}
//           onClick={flipCard}
//         />
//       );
//       setCards(newCards);
//     }
//     setResult(cardWon.length);
//     setCardChoosen([]);
//     setCardChoosenId([]);
//   }

//   function flipCard(id) {
//     const newCards = [...cards];
//     newCards[id].isFlipped = true;
//     setCards(newCards);
//     setFlipped([...flipped, id]);
//     if (flipped.length === 1) {
//       if (newCards[id].type === newCards[flipped[0]].type) {
//         setMatched([...matched, id, flipped[0]]);
//         setFlipped([]);
//       } else {
//         setTimeout(() => {
//           newCards[id].isFlipped = false;
//           newCards[flipped[0]].isFlipped = false;
//           setCards(newCards);
//           setFlipped([]);
//         }, 1000);
//       }
//     }
//   }
  

// import { useState } from "react"; 
// import React from "react";
// import i from '../../../img'

// const cardImages = [
//   {"src" : "../../../img/HeadShield.png"},
//   {"src" : "../../../img/MessageMap.png"},
//   {"src" : "../../../img/Ring.png"},
//   {"src" : "../../../img/Shield.png"},
//   {"src" : "../../../img/Spell.png"},
//   {"src" : "../../../img/Sword.png"}
// ];

// export default function MemoryFlipComponent() {
//     const [cards, setCards] =  useState([])
//     const[turns,setTurns] = useState(0)
//     const shuffleCards = () => {
//         const shuffledCards = [...cardImages , ...cardImages]
//         .sort(()=> Math.random() - 0.5)
//         .map((card)=> ({...card, id: Math.random()}))

//         setCards(shuffledCards)
//         setTurns(0)
//     } 
//     console.log(cards, turns)
//   return (
//     <div>
//         <h1>Memory Flip Game</h1>
//         <button onClick={shuffleCards}>New Game</button>
//         <div>{cards.map(card => (
//             <div className="" key={card.id}>
//                 <div>
//                     <img  className="" src="{card.src}" alt="card front" />
//                     <img src="../../../img/cover.png" alt="card back" />
//                 </div>
//             </div>
            
//         ))}</div>
//     </div>
//   )
// }

