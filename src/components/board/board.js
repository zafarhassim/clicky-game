import React, { Component } from 'react';

import FadeIn from '../transitions/fade-in';
import CharacterBox from './characterBox';
import ScoreDisplay from './scoredisplay';

const shuffleArray = arr => (
    arr
      .map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]) 
);

const initialChars = [
    {
        name: 'Barton',
        img: 'img/250x180/barton.jpg',
        clicked: false
    },
    {
        name: 'Scott',
        img: 'img/250x180/scott.jpg',
        clicked: false
    },
    {
        name: 'Becht',
        img: 'img/250x180/becht.jpg',
        clicked: false
    },
    {
        name: 'Lewis',
        img: 'img/250x180/lewis.jpg',
        clicked: false
    },
    {
        name: 'Wilkerson',
        img: 'img/250x180/wilkerson.jpg',
        clicked: false
    },
    {
        name: 'Pennington',
        img: 'img/250x180/pennington.jpg',
        clicked: false
    },
    {
        name: 'Abraham',
        img: 'img/250x180/abraham.jpg',
        clicked: false
    },
    {
        name: 'Mangold',
        img: 'img/250x180/mangold.jpg',
        clicked: false
    },
    {
        name: 'Ferguson',
        img: 'img/250x180/ferguson.jpg',
        clicked: false
    },
    {
        name: 'Revis',
        img: 'img/250x180/revis.jpg',
        clicked: false
    },
    {
        name: 'Chrebet',
        img: 'img/250x180/chrebet.jpg',
        clicked: false
    },
    {
        name: 'Mawae',
        img: 'img/250x180/mawae.jpg',
        clicked: false
    },
    {
        name: 'Martin',
        img: 'img/250x180/martin.jpg',
        clicked: false
    }
]

export default class Board extends Component {

    constructor(props){
        super(props);

        this.state = {
            user: {
                score: 0 
            },
            characters: shuffleArray( initialChars )
        };
    }

    onCharacterClick = ( index ) =>{
        if( !this.state.characters[index].clicked ){
            this.setState({
                characters: shuffleArray( this.state.characters.map( (character, current) =>  {
                    return ( current === index ) ? { ...character, clicked:true } : character
                })),
                user: {
                    ...this.state.user,
                    score: this.state.user.score + 1
                }
            });
            //and shuffle
        } else {
            this.setState({
                characters: shuffleArray(this.state.characters.map( character => { return { ...character, clicked : false } })),
                user: {
                    ...this.state.user,
                    score: 0
                }
            });
            //and shuffle
        }
        
    }

    render(){
        return (
            <div className="Board">
                <FadeIn 
                    in={true}
                    duration={450}
                    length={'30px'}
                    direction={'bottom'}
                    delay={'1s'}>
                    <h4>Jets memory card game<br/>Clicking on the same picture twice will reset the score</h4>
                </FadeIn>
                <FadeIn 
                    in={true}
                    duration={500}
                    direction={'bottom'}
                    delay={'1.5s'}>
                    <ScoreDisplay
                        score={this.state.user.score} />
                </FadeIn>
                <CharacterBox 
                    characters={this.state.characters} 
                    onCharacterClick={this.onCharacterClick} />
            </div>
        )
    }

}