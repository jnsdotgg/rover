import { writable } from "svelte/store";

export const hasScrolledToBottom = writable(false);
export const selectedMedia = writable(undefined);
