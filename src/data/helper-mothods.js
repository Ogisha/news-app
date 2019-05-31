export const setImg = (img) => {
    if (!img) {
        return "/assets/placeholder.gif";
    } else {
        return img
    }
}

export const capitalize = (word) => {
    if (word.endsWith("/"))
        return "Homepage"
 /*  else if (word.endsWith("/search"))
        return "Search"*/
    if (word.charAt(0) == "/")
        word = word.substring(1);

    return word.charAt(0).toUpperCase() + word.slice(1);
}

export const getUrlLevel = (word) => {
    let test = window.location.href;
    if (test.endsWith("/"))
        return "/";
    else if (test.endsWith("/search"))
        return "/search";
}