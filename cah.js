const {execSync } = require('child_process')

const getRandomCard = array => array[Math.floor(Math.random()*array.length)]

const say = async (phrase, pauseAfter) => {
    const DEFAULT_SAY_PAUSE = 2000;
    console.log(`Going to say ${phrase}`)
    execSync(`say ${phrase}`)
    
    const pauseTime = pauseAfter || DEFAULT_SAY_PAUSE
    console.log(`Pausing for ${pauseTime} ms`)
    await pause(pauseTime)
}

const pause = timeout => new Promise(res => setTimeout(res,timeout))

const cah = require('./cah.json');

const {whiteCards, blackCards} = cah

const blackCard = getRandomCard(blackCards.filter(el => el.pick === 1));
const whiteCard = getRandomCard(whiteCards);

(async ()=> {
    await say(blackCard.text.replace(/<.*>/g,''), 2000)

    await say(whiteCard, 500)
    
    await say('Ha Ha Ha', 1000)
        
    await say('Get it?')
})()





