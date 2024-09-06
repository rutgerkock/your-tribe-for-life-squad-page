import { writable } from "svelte/store";

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

export const searchHandler = (store) => {
    const searchTerm = store.search.toLowerCase() || "";
    store.filteredPeople = store.data.people.filter((person) => {
        return person.name.toLowerCase().includes(searchTerm)
    })
}

//https://www.youtube.com/watch?v=lrzHaTcpRh8&t=673s