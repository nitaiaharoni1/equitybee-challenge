export const isValidDomain = (domain: string) => /^(?!:\/\/)([a-zA-Z0-9.-]{1,63})([.]{1})([a-zA-Z0-9]{1,63})$/.test(domain);
