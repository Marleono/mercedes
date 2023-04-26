const btns = document.querySelectorAll('.feature__link');
const lists = document.querySelectorAll('.feature-sub');

btns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        btns.forEach(btn => {
            // btn.classList.remove('feature__link_active')
        })
        btn.classList.toggle('feature__link_active')
        

        lists.forEach(list => {
            // list.classList.add('hidden')
        })
        lists[index].classList.toggle('hidden')
    })
})
