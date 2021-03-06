import { ViewTimer } from './View.js'
import { Emitter } from './Emitter.js'
import { Modify } from './Features.js'
const Timer = {
    time: 60 * 60,
    currentTime: 0,
    interval: null,
    timeToMinutes: time => Math.floor(time / 60),
    timeToSeconds: time => time % 60,
    formatTime: time => String(time).padStart(2, '0'),
    init(time) {
        Emitter.emit('countdown-start')
        Timer.time = time || Timer.time
        Timer.currentTime = Timer.time
        Timer.interval = setInterval(Timer.countDown, 1000)
    },
    countDown() {
        Timer.currentTime = Timer.currentTime - 1
        if (Timer.currentTime === -1) {
            clearInterval(Timer.interval)
            Emitter.emit('countdown-end')
            location.reload()
            return;
        }
        Timer.refreshDisplayTimer()
    },
    refreshDisplayTimer() {
        let minutes = Timer.formatTime(Timer.timeToMinutes(Timer.currentTime))
        let seconds = Timer.formatTime(Timer.timeToSeconds(Timer.currentTime))

        ViewTimer.render({
            minutes,
            seconds,
        })
    }
}
export { Timer }