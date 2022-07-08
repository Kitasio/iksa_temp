import { writable } from 'svelte/store';

export const files = writable([]);
export const hoveredFolder = writable('');
export const hoveredPanel = writable(false)
export const activeLink = writable()