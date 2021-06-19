import { Notifier } from './Notifier.js'
import { Timer } from "./Timer.js"
import { Emitter } from './Emitter.js'
const notify = Notifier.notify({
    title: 'Hora do Post!!!',
    body: 'Crie algo agora'
})
const App = {
    async start() {
        try {
            await Notifier.init()
            Emitter.on('countdown-start', notify)
            Emitter.on('countdown-end', Timer.init)
            Timer.init(5)
        } catch (err) {
            console.log(err.message)
        }
    }
}

export { App }