const contModal = document.querySelectorAll('.modal-container');
const openModal = document.querySelectorAll('.btn-open');
const displayBlock = 'modal-display-block';

for(let openModals of openModal) {
    openModals.addEventListener('click', open);
};

for(let contModals of contModal) {
    contModals.addEventListener('click', close);
};

function open(e) {
    for(let contModals of contModal) {
       if(contModals.classList.contains(e.target.dataset.id)) contModals.classList.add(displayBlock);
    };
    param(e);
};

function close(e) {
    e.preventDefault();
    if(e.target.classList.contains('btn-close')) e.path[3].classList.remove(displayBlock);
    if(e.target.classList.contains('modal-container')) e.target.classList.remove(displayBlock);
};

function param(e) {
    for(let contModals of contModal) {
        if(contModals.classList.contains(displayBlock)){
            contModals.children[0].style.width = e.target.dataset.width;
            contModals.classList.add(e.target.dataset.effect);
            contModals.children[0].style.marginTop = e.target.dataset.indent;
            contModals.classList.add(e.target.dataset.bg);
        };
    };
};