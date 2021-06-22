import { Notifier } from './Notifier.js'
import { Timer } from "./Timer.js"
import { Emitter } from './Emitter.js'
import { ViewTitle } from './View.js'
import { Modify } from './Features.js'

const notify = Notifier.notify({
    title: "ola",
    body: "Crie algo agora",
})
const App = {
    async start() {
        try {
            const startbutton = document.getElementById('start')
            startbutton.addEventListener("click", () => {
                const newtitle = Modify.modifytitle()
                ViewTitle.render(newtitle)
                Timer.init(Modify.timerEdit())
            })
            await Notifier.init()
            Emitter.on('countdown-end', notify)
            Emitter.on('countdown-end', Timer.init)
        } catch (err) {
            console.log(err.message)
        }
    }
}
export { App }