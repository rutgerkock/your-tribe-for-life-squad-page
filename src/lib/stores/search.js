import { writable } from "svelte/store";

//Create store for storing searchterm and filtered data
export const createSearchStore = (data) => {
    const { subscribe, set, update } = writable({
        data,
        filteredPeople: data.person,
        search: "",
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
        return person.name.toLowerCase().includes(searchTerm)
    })
}

//BRONNEN
//https://www.youtube.com/watch?v=lrzHaTcpRh8&t=673s
//https://learn.svelte.dev/tutorial/page-store 
//https://learn.svelte.dev/tutorial/auto-subscriptions 