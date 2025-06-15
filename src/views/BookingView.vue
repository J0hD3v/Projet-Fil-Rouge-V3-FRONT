<template>

    <PopupBottom buttonLabel="Réserver" buttonIcon="pi pi-calendar" title="Réservation" :formFields="formFields" />
    
    <div class="calendarContainer">
        <ScheduleXCalendar :calendar-app="calendarApp" />
    </div>

</template>

<script setup>

    import PopupBottom from '@/components/PopupBottom.vue';
    import { ScheduleXCalendar } from '@schedule-x/vue';
    import {
        createCalendar,
        createViewDay,
        createViewMonthAgenda,
        createViewMonthGrid,
        createViewWeek,
        viewWeek,
    } from '@schedule-x/calendar'
    import '@schedule-x/theme-default/dist/index.css';
    import { createEventModalPlugin } from '@schedule-x/event-modal';

    const formFields = [
        {
            title: "Durée",
            type: "duration"
        },
        {
            title: "Nombre de personnes",
            type: "number"
        },
        {
            title: "Location matériel",
            type: "checkbox"
        }
    ];

    const eventModal = createEventModalPlugin();

    const calendarApp = createCalendar({
        locale: 'fr-FR',
        plugins: [eventModal],
        selectedDate: '2025-06-19',
        defaultView: viewWeek.name,
        views: [
            createViewDay(),
            createViewWeek(),
            createViewMonthGrid(),
            createViewMonthAgenda(),
        ],
        minDate: '2025-01-01',
        maxDate: '2025-12-31',
        dayBoundaries: {
            start: '08:00',
            end: '20:00',
        },
        weekOptions: {
            gridHeight: 500
        },
        events: [
            {
                id: 1,
                title: 'Tournois mensuel',
                start: '2025-06-20 09:00',
                end: '2025-06-20 18:00',
                description: 'Places restantes: ' + 7 + ' - Arriver 15min avant le début svp',
                location: 'terrain 3',
                calendarId: 'tournois'
            },
            {
                id: 2,
                title: 'Cours collectif',
                start: '2025-06-20 12:00',
                end: '2025-06-20 13:00',
                description: 'Places restantes: ' + 3,
                location: 'Terrain 1',
                people: ['Coach: Senpai']
            },
            {
                id: 3,
                title: 'Journée d\'inauguration',
                start: '2025-06-19',
                end: '2025-06-19',
                description: 'Pour fêter l\'ouverture du club, bienvenue à tout le monde !',
                calendarId: 'special'
            }
        ],
        calendars: {
            tournois: {
                colorName: 'tournois',
                lightColors: {
                    main: '#1c7df9',    // bordure
                    container: '#d2e7ff',   // fond
                    onContainer: '#002859', // texte
                }
            },
            special: {
                colorName: 'special',
                lightColors: {
                    main: 'red',    // bordure
                    container: '#e7a8a8',   // fond
                    onContainer: '#860000', // texte
                }
            }
        },
        callbacks: {
            onEventClick(calendarEvent) {
                // console.log('onEventClick', calendarEvent);
            }
        }
    });

</script>

<style scoped>

    .calendarContainer {
        /* zoom casse les modales d'evenements */
        /* zoom: 0.7; */
    }

</style>