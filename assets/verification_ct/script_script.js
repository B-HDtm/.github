document.addEventListener("DOMContentLoaded", function () {
    // Test Mobile (This)
    const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isMobile) {
        console.log("✅ Desktop detected — no mobile optimization needed.");
        return;
    }

    console.log("📱 Mobile detected — applying optimizations...");

    // --- 1. Adaptive fonts ---
    const style = document.createElement("style");
    style.innerHTML = `
        /* Headlines */
        .mbr-section-title {
            font-size: clamp(1.5rem, 6vw, 2.5rem) !important;
            line-height: 1.2 !important;
        }

        /* Subheadings */
        .mbr-text, .mbr-desc, .subtitle {
            font-size: clamp(1rem, 4vw, 1.25rem) !important;
            line-height: 1.4 !important;
        }

        /* Containers with large indentation */
        .content-wrapper, .title-wrapper, .text-wrapper {
            padding: 1.5rem 1rem !important;
        }

        /* Menu */
        .navbar-collapse {
            background-color: #1A0C1E !important;
        }

        /* Images */
        img {
            max-width: 100% !important;
            height: auto !important;
        }

        /* Remove fixed height of fullscreen */
        .mbr-fullscreen {
            min-height: 100dvh !important;
            height: auto !important;
        }
    `;
    document.head.appendChild(style);


    // --- 2. Autoscroll fix (for mobile browsers with a panel) ---
    window.scrollTo(0, 0);
});
