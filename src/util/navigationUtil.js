

const openTab = (url) => {
    window?.open(url, '_blank').focus()
}

const matchPath = (pathIn) => {
    return (window?.location.pathname === pathIn)
}

export { openTab, matchPath }