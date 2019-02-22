const header = new Vue({
    el: '#header',
    data: {
        titleSite: 'GOT App',
        menuLinks: [
            { titleLink: 'Home', url: './' },
            { titleLink: 'Characters', url: './characters' },
            { titleLink: 'Episodes', url: './episodes'}
        ]
    }
});

const main = new Vue({
    el: '#app',
    data: {
        titleSection: 'Personajes'
    }
})