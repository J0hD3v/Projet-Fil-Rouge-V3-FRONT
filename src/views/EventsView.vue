<template>

    <Toast  />

    <Button label="S'inscrire" icon="pi pi-sign-in" @click="visible = true;" severity="danger" class="largeButton" />
    <PopupBottom :formFields="formFields" v-model:visible="visible" title="Inscription" @dateChange="handleDateChange" />
    
    <div class="calendarContainer">
        <ScheduleXCalendar :calendar-app="calendarApp" />
    </div>

</template>

<script setup>

    import { ref } from 'vue';
    import { Button } from 'primevue';
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

    const buttonClick = ref(false);
    const visible = ref(false);

    const formFields = [
        {
            title: "Date",
            type: "date",
            options: {
                dateOptions: {
                    // min: new Date(),
                    min: null,
                    max: null
                }
            }
        },
        {
            title: "Evènement",
            type: "list",
            options: {
                listOptions: []
            }
        }
    ];

    const events = [
        {
            id: 1,
            title: 'Tournois mensuel',
            start: '2025-09-20 09:00',
            end: '2025-09-20 18:00',
            description: 'Places restantes: ' + 7 + ' - Arriver 15min avant le début svp',
            location: 'Terrain 3',
            calendarId: 'tournois'
        },
        {
            id: 2,
            title: 'Cours collectif',
            start: '2025-09-20 12:00',
            end: '2025-09-20 13:00',
            description: 'Places restantes: ' + 3,
            location: 'Terrain 1',
            people: ['Coach: Senpai']
        },
        {
            id: 3,
            title: 'Journée d\'inauguration',
            start: '2025-09-19',
            end: '2025-09-19',
            description: 'Pour fêter l\'ouverture du club, bienvenue à tout le monde !',
            calendarId: 'special'
        },
        {
            id: 4,
            title: 'Autre Cours collectif',
            start: '2025-09-20 14:30',
            end: '2025-09-20 15:30',
            description: 'Places restantes: ' + 8,
            location: 'Terrain 2',
            people: ['Coach: Bruce Willis']
        },
        {
            id: 5,
            title: 'Encore autre Cours collectif',
            start: '2025-09-20 15:00',
            end: '2025-09-20 17:00',
            description: 'Places restantes: ' + 5,
            location: 'Terrain 4',
            people: ['Coach: Bruce Wayne']
        },
        {
            id: 6,
            title: 'Cours collectif simultané',
            start: '2025-09-20 15:00',
            end: '2025-09-20 17:00',
            description: 'Places restantes: ' + 4,
            location: 'Terrain 1',
            people: ['Coach: Jackie Chan']
        }
    ]

    const eventModal = createEventModalPlugin();

    const calendarApp = createCalendar({
        locale: 'fr-FR',
        plugins: [eventModal],
        selectedDate: new Date().toISOString().split('T')[0],
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
        events: events,
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
                console.log(calendarEvent);
                buttonClick.value = true;
            }
        }
    });

    const handleDateChange = (date) => {
        if (!date) return [];
        const offset = date.getTimezoneOffset()
        date = new Date(date.getTime() - (offset*60*1000))
        date = date.toISOString().split('T')[0];
        let filteredEvents = events.filter(event => {
            return event.start.substring(0,10) == date;
        })
        let correspondingEvents = [];
        filteredEvents.forEach(event => {
            correspondingEvents.push(event.title + (event.location ? ` (${event.location})` : ''));
        });
        formFields[1].options.listOptions = correspondingEvents;
    }

</script>

<style scoped>

    .calendarContainer {
        /* zoom casse les modales d'evenements */
        /* zoom: 0.7; */
    }

    .largeButton {
        width: 100%;
    }

</style>