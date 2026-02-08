const BASE = "https://fsa-crud-2aa9294fe819.herokuapp.com/api";
const COHORT = "/2601-FTB-ET-WEB-FT";
const RESOURCE = "/guests";
const API = BASE + COHORT + RESOURCE;

export async function getGuests() {
  try {
    const res = await fetch(API);
    const { data } = await res.json();
    return data;
  } catch (e) {
    console.log(e);
    return [];
  }
}
