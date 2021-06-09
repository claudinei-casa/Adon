import { Notifier } from './Notifier.js'
import { Timer } from "./Timer.js"
const App = {
    async start() {
        try {
            Timer.init()
            await Notifier.init()
            Notifier.notify({
                title: 'Hora do Post!!!',
                body: 'Crie algo agora'
            })
        } catch (err) {
            console.log(err.message)
        }
    }
}

export { App }