export const ThemeToggle = () => {
    const changeTheme = (theme: string) => {
        const html = document.documentElement;
        if (theme === "system") {
            html.removeAttribute("data-theme");
        } else {
            html.setAttribute("data-theme", theme);
        }
    };

    return (
        <div className="fixed end-5 bottom-5 z-10 flex flex-col items-center">
            <div className="dropdown dropdown-end dropdown-top">
                <div className="btn mt-2" role="button" tabIndex={0}>
                    Theme
                    <span className="iconify lucide--chevron-up size-3.5"></span>
                </div>
                <ul className="menu dropdown-content rounded-box bg-base-100 w-52 shadow" tabIndex={0}>
                    <li>
                        <div
                            className="group-[:not([data-theme])]/html:bg-base-200 flex items-center"
                            onClick={() => changeTheme("system")}>
                            <span className="iconify lucide--laptop size-4.5"></span>
                            System
                        </div>
                    </li>
                    <li>
                        <div
                            className="group-data-[theme=light]/html:bg-base-200 flex items-center"
                            onClick={() => changeTheme("light")}>
                            <span className="iconify lucide--sun size-4.5"></span>
                            Light
                        </div>
                    </li>
                    <li>
                        <div
                            className="group-data-[theme=dark]/html:bg-base-200 flex items-center"
                            onClick={() => changeTheme("dark")}>
                            <span className="iconify lucide--moon size-4.5"></span>
                            Dark
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};
