const Notifier = {
    async init() {
        const permission = await Notification.requestPermission()

        if (permission !== "granted") {
            throw new Error('Permissão para notificação negada')
        }
    },
    notify({ title, body, icon }) {
        return () => new Notification(
            title, {
                body,
                icon
            })
    },
}
export { Notifier }