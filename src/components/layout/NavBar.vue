<template>

    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <a class="navbar-brand" href="#"><img :src=logoClub.src :alt=logoClub.alt></a>
            <h1>{{ title }}</h1>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active mx-2 py-2">
                        <RouterLink to="/" class="text-decoration-none">
                            Accueil
                        </RouterLink>
                    </li>
                    <li class="nav-item dropdown">
                        <a
                            class="nav-link dropdown-toggle"
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            >
                            Evenements
                        </a>
                        <ul class="dropdown-menu">
                            <li class="dropdown-item">
                                <RouterLink to="/gallery" class="text-decoration-none">
                                    Tournois
                                </RouterLink>
                            </li>
                            <li class="dropdown-item">
                                <RouterLink to="/" class="text-decoration-none">
                                    Point du mois
                                </RouterLink>
                            </li>
                            <li class="dropdown-item">
                                <RouterLink to="/gallery" class="text-decoration-none">
                                    Galerie
                                </RouterLink>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a
                            class="nav-link dropdown-toggle "
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            >
                            Reservation
                        </a>
                        <ul class="dropdown-menu">
                            <li class="dropdown-item">
                                <RouterLink to="/lessons" class="text-decoration-none">
                                    Cours
                                </RouterLink>
                            </li>
                            <li class="dropdown-item">
                                <RouterLink to="/seminary" class="text-decoration-none">
                                    Seminaire
                                </RouterLink>
                            </li>
                            <li class="dropdown-item">
                                <RouterLink to="/contact" class="text-decoration-none">
                                    Contact
                                </RouterLink>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item mx-2 py-2">
                        <RouterLink to="/about" class="text-decoration-none">
                            About
                        </RouterLink>
                    </li>
                    <li class="nav-item mx-2 py-2">
                        <RouterLink to="/truc" class="text-decoration-none">
                            Test 404
                        </RouterLink>
                    </li>
                </ul>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item mx-2 py-2">
                        <RouterLink to="/login" class="text-decoration-none">
                            Login
                        </RouterLink>
                    </li>
                    <li class="nav-item mx-2 py-2">
                        <RouterLink to="/users" class="text-decoration-none">
                            Users
                        </RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

</template>

<script setup>

    import { RouterLink } from 'vue-router';

    const logoClub = {
        alt: "logo du club",
        src: "/src/assets/images/logo.png"
    }

    const title = "Padel Club Pau";

</script>

<style>

    @import url('https://fonts.googleapis.com/css2?family=Allerta+Stencil&display=swap');

    @font-face {
        font-family: SolViolette;
        src: url('../../assets/font/Solix-Light.otf');
    }

    :root {
        --logoHeight: 50px;
    }

    nav {
        position: sticky !important;
        top: 0;
        z-index: 999;
        background-color: var(--vt-c-white-mute);

        & h1 {
            display: none;
        }

        & * {
            color: black;
        }
    }

    .nav-item:not(.disabled, .dropdown-toggle, .dropdown) {
        &::after {
            display: block;
            content: '';
            height: 2px;
            width: 100%;
            background-color: blue;
            opacity: 0;
        }
        &:hover::after {
            transition: all 0.2s;
            opacity: 1;
        }
    }

    .navbar-brand>img {
        height: var(--logoHeight);
    }

    /* .router-link-active::after {
        display: block;
        content: '';
        height: 2px;
        width: 100%;
        background-color: blue;
        opacity: 1;
    } */

    @media (max-width: 992px) {

        .navbar-collapse {
            position: absolute;
            top: calc(var(--logoHeight) + 25px);
            right: 0;
            padding: 1rem;
            width: 50vw;
            background-color: var(--vt-c-black-mute);
            & li, & a, & li:active, & a:active {
                color: white !important;
            }
        }

        .nav-item:not(.disabled, .dropdown-toggle, .dropdown) {
            &::after {
                display: none;
                content: '';
                height: 2px;
                width: 100%;
                background-color: blue;
                opacity: 0;
            }
            &:hover::after {
                transition: all 0.2s;
                opacity: 1;
            }
        }

        nav {
            background-color: var(--vt-c-black-mute);
            
            & h1 {
                display: block;
                font-family: SolViolette;
                color: red;
                font-weight: bold;
                margin: 0;
            }
        }
        
        .navbar-toggler {
            background-color: var(--vt-c-white-mute);
        }

        .dropdown-menu {
            background-color: var(--vt-c-black-mute);
            padding-left: 1rem;

            &>.dropdown-item {
                background-color: var(--vt-c-black-mute) !important;

                &>a {
                    display: block;
                }
            }
        }

        .nav-item>a {
            display: block;
        }
    }

</style>