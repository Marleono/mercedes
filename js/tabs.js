const tabsHandlerElems = document.querySelectorAll('[data-tabs-handler]')
const tabsContentElems = document.querySelectorAll('[data-tabs-field]')
const titles = document.querySelectorAll('.design__title')

tabsHandlerElems.forEach(tab => {
    tab.addEventListener('click', () => {
        tabsHandlerElems.forEach(item => {
            item.classList.remove('design-list__item_active')
        })
        tab.classList.add('design-list__item_active')
        titles.forEach(title => {
            title.classList.toggle('hidden')
        })
        tabsContentElems.forEach(cont => {
            if(cont.dataset.tabsField === tab.dataset.tabsHandler){
                cont.classList.remove('hidden')
            } else {
                cont.classList.add('hidden')
            }
        })
    })
})

