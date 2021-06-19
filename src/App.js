import { Notifier } from './Notifier.js'
import { Timer } from "./Timer.js"
import { Emitter } from './Emitter.js'

const message = [{
        title: "ola",
        body: "Crie algo agora"
    },
    {
        title: "bom dia",
        body: "Crie algo agora"
    },
    {
        title: "que tal andar de bike um pouco?",
        body: "Crie algo agora"
    },
    {
        title: "bora codar?",
        body: "Crie algo agora"
    },
]
const notify = Notifier.notify(message[1])
const App = {
    async start() {
        try {
            await Notifier.init()
            Emitter.on('countdown-end', notify)
            Emitter.on('countdown-end', Timer.init)
            Timer.init(20)
        } catch (err) {
            console.log(err.message)
        }
    }
}

export { App }