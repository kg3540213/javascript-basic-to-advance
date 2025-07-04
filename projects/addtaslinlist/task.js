const inp = document.getElementById('value');
const sub = document.getElementById('submit');
const ul = document.querySelector('ul');

sub.addEventListener('click', () => {
    const li = document.createElement('li');
    li.innerHTML = inp.value;
    ul.appendChild(li);
});
