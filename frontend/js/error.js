class Error {
    constructor(error) {
        this.message = error.message
    }

    
    // Render Errors
    renderError() {
        const errorDiv = document.getElementById('errors');
        const p = document.createElement('p');
        p.innerHTML = `<p style="color:red;"><strong>${this.message}</strong></p>`
        errorDiv.appendChild(p);
        console.log(this);
    };


}