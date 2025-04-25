console.log("Loader.js initialized");

// Example: Dynamically load a script (e.g., Bootstrap)
export function loadScript(url, callback) {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = url;

    script.onload = () => {
        console.log(`Script loaded: ${url}`);
        if (callback) callback();
    };

    document.head.appendChild(script);
}

// Example Usage in React Component
export function loadBootstrap() {
    loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js");
}
