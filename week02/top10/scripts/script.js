const chapter = document.querySelector('#favchap');
const submitButton = document.querySelector('button');
const list = document.querySelector('#list');

// const faveChap = document.createElement('li');


// const deleteButton = document.createElement('button');

submitButton.addEventListener('click', function () {
    const faveChap = document.createElement('li');
    const deleteButton = document.createElement('button');
    if (chapter.value.trim() !== '') {
        faveChap.textContent = chapter.value;
        deleteButton.textContent = '❌';
        faveChap.append(deleteButton);
        list.append(faveChap);
        chapter.value = '';
        chapter.focus();
    }

});

list.addEventListener('click', function (removeSelection) {

    if (removeSelection.target.textContent == '❌') {
        removeSelection.target.parentElement.remove();
    }
});