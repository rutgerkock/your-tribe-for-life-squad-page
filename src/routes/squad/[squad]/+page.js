 /** @type {import('./$types').PageLoad} */
import getDirectusInstance from '$lib/directus';
import { readItems } from '@directus/sdk';

export async function load({ fetch, params }) {
    console.log("SQUAD: ", params.squad);
    const directus = getDirectusInstance(fetch);
    return {
        people: await directus.request(readItems('person', {
            filter: {
                squad_id: params.squad
            }
        }))
    }
}