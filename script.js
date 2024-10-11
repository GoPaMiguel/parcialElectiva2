const selecElement = (id) => {
    return element = document.getElementById(id);    
}

const toggleBtn = () => {
    const toggleBtn = selecElement('darkModeImg');
    toggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('darkMode');
    }
    );    
}

toggleBtn()

