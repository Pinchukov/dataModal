const contModal = document.querySelectorAll('.modal-container');
const openModal = document.querySelectorAll('.btn-open');
const displayBlock = 'modal-display-block';

for(let i = 0; i < openModal.length; i++) {
    openModal[i].addEventListener('click', open);
};
for(let i = 0; i < contModal.length; i++) {
    contModal[i].addEventListener('click', close);
};


function open(e) {
    let dataId = e.target.dataset.id;
    for(let i = 0; i < contModal.length; i++) {
        if(contModal[i].classList.contains(dataId)){
            contModal[i].classList.add(displayBlock);
        };
    };
    param(e);
};

function close(e) {
    e.preventDefault();
    if(e.target.classList.contains('btn-close')){
        e.path[3].classList.remove(displayBlock);
    }
    if(e.target.classList.contains('modal-container')){
        e.target.classList.remove(displayBlock);
    }
};

function param(e) {
    let dataWidth = e.target.dataset.width;
    let dataEffect = e.target.dataset.effect;
    let dataIndent = e.target.dataset.indent;
    let dataBg = e.target.dataset.bg;
    for(let i = 0; i < contModal.length; i++) {
        if(contModal[i].classList.contains(displayBlock)){
            contModal[i].children[0].style.width = dataWidth;
            contModal[i].classList.add(dataEffect);
            contModal[i].children[0].style.marginTop = dataIndent;
            contModal[i].classList.add(dataBg);
        };
    };
};