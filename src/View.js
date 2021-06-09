const View = {
    render({ minutes, seconds }) {
        const timer = document.getElementById('timer');
        timer.innerHTML = `
        <p>Proximo post em:</p>
        <span>${minutes}:${seconds}</span>
        `;
    }
}
export { View };