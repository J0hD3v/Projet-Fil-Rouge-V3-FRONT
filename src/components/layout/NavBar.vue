<template>

    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
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
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active me-2 py-2">
                            <RouterLink to="/" class="text-dark text-decoration-none">
                                Home
                            </RouterLink>
                        </li>
                        <li class="nav-item me-2 py-2">
                            <RouterLink to="/login" class="text-dark text-decoration-none">
                                Login
                            </RouterLink>
                        </li>
                        <li class="nav-item me-2 py-2">
                            <RouterLink to="/gallery" class="text-dark text-decoration-none">
                                Gallery
                            </RouterLink>
                        </li>
                        <li class="nav-item dropdown">
                            <a
                                class="nav-link dropdown-toggle text-dark"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                >
                                Dropdown
                            </a>
                            <ul class="dropdown-menu">
                                <li class="dropdown-item me-2">
                                    <RouterLink to="/users" class="text-dark text-decoration-none">
                                        Users
                                    </RouterLink>
                                </li>
                                <li class="nav-item me-2 py-2">
                                    <RouterLink to="/about" class="text-dark text-decoration-none">
                                        About
                                    </RouterLink>
                                </li>
                                <li class="dropdown-item me-2">
                                    <RouterLink to="/truc" class="text-dark text-decoration-none">
                                        test 404
                                    </RouterLink>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>

</template>

<script setup>

    import { RouterLink } from 'vue-router';

</script>

<style>

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

    /* .router-link-active::after {
        display: block;
        content: '';
        height: 2px;
        width: 100%;
        background-color: blue;
        opacity: 1;
    } */

    @media (max-width: 992px) {

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
    }

</style>