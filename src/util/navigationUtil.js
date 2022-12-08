

const windowGlobal = () => {
    return typeof window !== 'undefined' && window
}

const openTab = (url) => {
    windowGlobal().open(url, '_blank').focus()
}

const matchPath = (pathIn) => {
    return (windowGlobal().location?.pathname === pathIn)
}

export { windowGlobal, openTab, matchPath }