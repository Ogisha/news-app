export const setImg = (img) => {
    if (!img) {
        return "/assets/placeholder.gif";
    } else {
        return img
    }
}

export const getCategoryName = (category) => {
    switch (category) {
        case "/categories":
            return "Categories";
        case "/search":
            return "Search";
        default: 
            return "Homepage";
    }
}

export const capitalize = (word) => {
    if (word.endsWith("/"))
        return "Homepage"

    if (word.charAt(0) == "/")
        word = word.substring(1);

    return word.charAt(0).toUpperCase() + word.slice(1);
}

export const retrieveUrl = (url) => {
    if (url.endsWith("/categories")) {
        return "/categories";
    } else if (url.endsWith("/search")) {
        return "/search";
    }

    return "/";
}
