import { writable } from "svelte/store";

//Create store for storing searchterm and filtered data
export const createSearchStore = (data) => {
    const { subscribe, set, update } = writable({
        data,
        filteredPeople: data.person,
        search: "",
        squad: null, // if null, show all squads
    })

    return {
        subscribe,
        set,
        update
    }
}

//Filter using searchterm
export const searchHandler = (store) => {
    const searchTerm = store.search.toLowerCase() || "";
    store.filteredPeople = store.data.people.filter((person) => {
        // for each person, show this person only if their name includes the search term and there is either no squad filter or they belong to the squad
        return person.name.toLowerCase().includes(searchTerm) && (store.squad === null || person.squad_id === store.squad)
    })
}

//BRONNEN
//https://www.youtube.com/watch?v=lrzHaTcpRh8&t=673s
//https://learn.svelte.dev/tutorial/page-store 
//https://learn.svelte.dev/tutorial/auto-subscriptions 