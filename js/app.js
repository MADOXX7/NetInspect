async function loadIpData() {

    try {

        const response =
            await fetch("https://ipapi.co/json/");

        const data =
            await response.json();

        document.getElementById("ip").textContent =
            data.ip;

        document.getElementById("country").textContent =
            data.country_name;

        document.getElementById("region").textContent =
            data.region;

        document.getElementById("city").textContent =
            data.city;

        document.getElementById("isp").textContent =
            data.org;

    } catch (error) {

        console.error(error);

        document.getElementById("ip").textContent =
            "Unavailable";
    }
}

function copyIp() {

    const ip =
        document.getElementById("ip").textContent;

    navigator.clipboard.writeText(ip);

    alert("IP copied!");
}

function loadBrowserInfo() {

    const userAgent = navigator.userAgent;

    let browser = "Unknown";

    if (userAgent.includes("Firefox")) {
        browser = "Firefox";
    }
    else if (userAgent.includes("Edg")) {
        browser = "Microsoft Edge";
    }
    else if (userAgent.includes("Chrome")) {
        browser = "Google Chrome";
    }
    else if (userAgent.includes("Safari")) {
        browser = "Safari";
    }

    document.getElementById("browser").textContent =
        browser;
}

function loadOperatingSystem() {

    const platform =
        navigator.userAgent;

    let os = "Unknown";

    if (platform.includes("Windows")) {
        os = "Windows";
    }
    else if (platform.includes("Linux")) {
        os = "Linux";
    }
    else if (platform.includes("Android")) {
        os = "Android";
    }
    else if (platform.includes("Mac")) {
        os = "macOS";
    }
    else if (platform.includes("iPhone")) {
        os = "iOS";
    }

    document.getElementById("os").textContent =
        os;
}

loadIpData();
loadBrowserInfo();
loadOperatingSystem();