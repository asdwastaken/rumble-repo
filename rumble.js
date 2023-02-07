let darkThemeButton = document.getElementById('dark');
let brightThemeButton = document.getElementById('bright');
let veryBrightThemeButton = document.getElementById('very-bright');

let homePage = document.querySelector('.featured-home-page');
let allElements = document.getElementsByTagName('*');
let bodyElement = document.querySelector('body');

let timestamp = document.querySelector('.timestamp');
let thumbnailTimestamps = document.querySelectorAll('.thumbnail-timestamp');
let thumbnailTimeStampsLive = document.querySelectorAll('.thumbnail-timestamp-live');

let headerCategories = document.querySelectorAll('.category');
let editorPicksElement = document.getElementById('editor-picks');

let logo = document.querySelector('.logo');

let headerElement = document.querySelector('.header');
let headerCategoriesElement = document.querySelector('.categories-menu-header');

let hamburgerMenuButton = document.querySelector('.hamburger-menu');

let sidebar = document.querySelector('.sidebar');
let sidebarHome = document.querySelector('.sidebar-home');
let sidebarLatest = document.querySelector('.sidebar-latest');
let sidebarPicks = document.querySelector('.sidebar-picks');
let sidebarTrending = document.querySelector('.sidebar-trending');
let sidebarBtn = document.querySelectorAll('.sidebar-btn');
let sidebarChannelLinks = document.querySelectorAll('.sidebar-channel-link');

let sidebarThemeButtons = document.querySelectorAll('.sidebar-theme-button');

let searchButton = document.querySelector('.search-button');
let searchBar = document.querySelector('.search-bar');

let signButtons = document.querySelectorAll('.sign-btn');

let viewAllButtons = document.querySelectorAll('.view-all');

let footer = document.querySelector('.footer');
let footerLinks = document.querySelectorAll('.footer-link');



function brightTheme() {

    homePage.style.backgroundColor = '#f3f5f8';
    bodyElement.style.backgroundColor = 'white';
    bodyElement.id = 'body-light-theme';

    for (let i = 0; i < allElements.length; i++) {
        allElements[i].style.color = "#061726";

    }

    timestamp.style.color = 'white';

    thumbnailTimestamps.forEach(el => {
        el.style.color = 'white';

    })

    thumbnailTimeStampsLive.forEach(el => {
        el.style.color = 'white';

    })

    headerCategories.forEach(button => {
        button.classList.remove('category');
        button.classList.add('category-light');

    })

    editorPicksElement.style.color = 'white';
    editorPicksElement.style.backgroundColor = '#061726';

    headerElement.style.backgroundColor = 'white';
    headerCategoriesElement.style.backgroundColor = 'white';
    headerCategoriesElement.style.borderBottom = '1px solid #d4dce4';
    headerCategoriesElement.style.borderTop = '1px solid #d4dce4';

    hamburgerMenuButton.classList.add('hamburger-menu-black');

    logo.src = "https://rumble.com/img/rumble-full-logo-v4.svg";

    searchButton.classList.add('search-button-light');
    searchBar.classList.add('search-bar-light');

    signButtons.forEach(button => {
        button.classList.add('sign-btn-light');
    });

    viewAllButtons.forEach(button => {
        button.classList.add('view-all-light');
    });

    sidebar.style.backgroundColor = '#F3F5F8';
    sidebar.style.border = '1px solid #d4dce4';

    sidebarHome.classList.add('sidebar-home-black');
    sidebarLatest.classList.add('sidebar-latest-black');
    sidebarPicks.classList.add('sidebar-picks-black');
    sidebarTrending.classList.add('sidebar-trending-black');

    sidebarBtn.forEach(button => {
        button.classList.add('sidebar-btn-light');
    })

    sidebarChannelLinks.forEach(button => {
        button.classList.add('sidebar-channel-link-light');

    })

    sidebarThemeButtons.forEach(button => {

        button.classList.add('sidebar-theme-button-light');

        switch (button.id) {
            case 'bright': button.id = 'bright-light-theme';
                break;

            case 'dark': button.id = 'dark-light-theme';
                break;

            case 'very-bright': button.id = 'very-bright-light-theme';
                break;
        }


    })

    footer.style.backgroundColor = 'white';
    footer.style.borderTop = '1px solid #d4dce4';


}



function darkTheme() {

    homePage.style.backgroundColor = '#061726';
    bodyElement.style.backgroundColor = '#10212F';
    bodyElement.id = '';


    for (let i = 0; i < allElements.length; i++) {
        allElements[i].style.color = "#D6E0EA";

    }

    headerCategories.forEach(button => {
        button.classList.remove('category-light');
        button.classList.add('category');
    })

    editorPicksElement.style.color = '#0a1725';
    editorPicksElement.style.backgroundColor = 'white';

    headerElement.style.backgroundColor = '#061726';
    headerCategoriesElement.style.backgroundColor = '#10212F';
    headerCategoriesElement.style.borderBottom = 'none';
    headerCategoriesElement.style.borderTop = 'none';

    logo.src = "https://rumble.com/img/rumble-full-logo-v4-dark.svg";
    hamburgerMenuButton.classList.remove('hamburger-menu-black');

    searchButton.classList.remove('search-button-light');
    searchBar.classList.remove('search-bar-light');

    signButtons.forEach(button => {
        button.classList.remove('sign-btn-light');
    });

    viewAllButtons.forEach(button => {
        button.classList.remove('view-all-light');
    });

    sidebar.style.backgroundColor = '#1A2A37';
    sidebar.style.border = 'none'

    sidebarHome.classList.remove('sidebar-home-black');
    sidebarLatest.classList.remove('sidebar-latest-black');
    sidebarPicks.classList.remove('sidebar-picks-black');
    sidebarTrending.classList.remove('sidebar-trending-black');

    sidebarBtn.forEach(button => {
        button.classList.remove('sidebar-btn-light');
    })

    sidebarChannelLinks.forEach(button => {
        button.classList.remove('sidebar-channel-link-light');

    })

    sidebarThemeButtons.forEach(button => {

        button.classList.remove('sidebar-theme-button-light');

        switch (button.id) {
            case 'bright-light-theme': button.id = 'bright';
                break;

            case 'dark-light-theme': button.id = 'dark';
                break;

            case 'very-bright-light-theme': button.id = 'very-bright';
                break;
        }
    })


    footer.style.backgroundColor = '#061726';
    footer.style.border = 'none';

    
}