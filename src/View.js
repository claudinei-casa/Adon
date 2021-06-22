const ViewTimer = {
    render({ minutes, seconds }) {
        const timer = document.getElementById('timer');
        timer.innerHTML = ` 
        <span>${minutes}:${seconds}</span>
        `;
    }
}
const ViewTitle = {
    render(title) {
        const titleId = document.getElementById('title');
        titleId.innerHTML = ` 
            <h1>${title}</h1>
            `;
    }
}
export { ViewTimer, ViewTitle };