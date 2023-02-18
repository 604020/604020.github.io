
/*=============== FILTERS TABS ===============*/
const tabs = document.querySelectorAll('[data-target')
      tabContents = document.querySelectorAll('[data-target]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelectorAll(tab.dataset.target)

        tabContents.forEach(tc =>{ /*tc=tabcontent*/
            tc.classList.remove('filters__active')
        })
        target.classList.add('filters__active')

        tabs.forEach(t =>{ /*t = tab*/
            t.classList.remove('filter-tab-active')
        })
        tab.classList.add('filter-tab-active')
    })
})      
/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

//previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//we obtain the current theme that the interface has by validating the dar-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' :'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? "ri-moon-line" : 'ri-sun-line'

//we walidate if the user previously chose a topic
if (selectTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add': 'remove'](iconTheme)
}

//activate/deactivate the theme manually with the button
themeButton.addEventListener('click', () =>{
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
//we save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
/*=============== SCROLL REVEAL ANIMATION ===============*/