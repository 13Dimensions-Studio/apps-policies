const DEFAULT_TITLE = "13 Dimensions Studio Privacy Policies";
const DEFAULT_LOGO = "assets/images/logo.jpg";

const state = {
    policies: [],
    selectedId: null,
    searchQuery: "",
    selectedCategory: "all"
};

const els = {};

document.addEventListener("DOMContentLoaded", () => {
    cacheElements();
    bindEvents();
    initialize().catch((error) => {
        console.error(error);
        showPolicyView();
        renderErrorState("The privacy policy directory could not load its data.");
    });
});

async function initialize() {
    const manifest = window.PRIVACY_POLICY_DATA;
    if (!manifest || !Array.isArray(manifest.policies)) {
        throw new Error("Bundled policy data is missing.");
    }

    state.policies = manifest.policies
        .slice()
        .sort((first, second) => {
            const orderDelta = (first.order ?? 9999) - (second.order ?? 9999);
            if (orderDelta !== 0) {
                return orderDelta;
            }
            return (first.name || "").localeCompare(second.name || "");
        });

    renderSidebar();
    renderDashboardCards();
    initCategoryFilters();

    if (els.metricTotalPolicies) {
        els.metricTotalPolicies.textContent = String(state.policies.length);
    }
    initializeParallax();

    const requestedId = getRequestedPolicyId();
    if (state.policies.some((policy) => policy.id === requestedId)) {
        await selectPolicy(requestedId, { updateHistory: false });
    } else {
        showDashboard();
    }
}

function cacheElements() {
    [
        "sidebar",
        "sidebarScrim",
        "policyList",
        "dashboardMenuToggle",
        "policyMenuToggle",
        "openPoliciesButton",
        "backHomeButton",
        "copyLinkButton",
        "dashboardHero",
        "policyView",
        "metricTotalPolicies",
        "dashboardLogo",
        "policyHeading",
        "policySummary",
        "policyDate",
        "policyStatus",
        "policyPlatform",
        "policyLogo",
        "policyLogoTitle",
        "policyLinkCaption",
        "policyLink",
        "policyTitle",
        "policyContent",
        /* Optional enhanced elements */
        "policyCardsGrid",
        "policySearchInput",
        "sidebarSearchInput",
        "currentBreadcrumbName",
        "categoryFilterContainer"
    ].forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
            els[id] = el;
        }
    });
}

function bindEvents() {
    [els.dashboardMenuToggle, els.policyMenuToggle, els.openPoliciesButton].forEach((button) => {
        if (button) {
            button.addEventListener("click", () => setSidebarOpen(true));
        }
    });

    if (els.sidebarScrim) {
        els.sidebarScrim.addEventListener("click", () => setSidebarOpen(false));
    }
    if (els.backHomeButton) {
        els.backHomeButton.addEventListener("click", goHome);
    }
    if (els.copyLinkButton) {
        els.copyLinkButton.addEventListener("click", copySelectedLink);
    }

    // Dashboard search input
    if (els.policySearchInput) {
        els.policySearchInput.addEventListener("input", (e) => {
            state.searchQuery = e.target.value.trim().toLowerCase();
            renderDashboardCards();
        });
    }

    // Sidebar search input
    if (els.sidebarSearchInput) {
        els.sidebarSearchInput.addEventListener("input", (e) => {
            const query = e.target.value.trim().toLowerCase();
            renderSidebar(query);
        });
    }

    // Intercept mailto clicks to open Gmail web composer with pre-filled recipient, subject, and body
    document.addEventListener("click", (event) => {
        const link = event.target.closest("a");
        if (!link) return;
        const href = link.getAttribute("href") || "";
        if (href.startsWith("mailto:")) {
            event.preventDefault();
            const mailtoParts = href.replace(/^mailto:/i, "").split("?");
            const to = decodeURIComponent(mailtoParts[0] || "13dimensionsgraphics@gmail.com");
            const searchParams = new URLSearchParams(mailtoParts[1] || "");
            const currentPolicy = state.policies.find((p) => p.id === state.selectedId);
            const appName = currentPolicy ? currentPolicy.name : "13 Dimensions Studio";
            const subject = searchParams.get("subject") || `Privacy Policy Inquiry - ${appName}`;
            let body = searchParams.get("body") || "";
            if (!body) {
                body = `Hi 13 Dimensions Studio Team,\n\nI have an inquiry regarding the privacy policy for ${appName}:\n\n\n\nRegards,\n`;
            }
            const gmailUrl = buildGmailComposeUrl({ to, subject, body });
            window.open(gmailUrl, "_blank", "noopener,noreferrer");
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            setSidebarOpen(false);
        }
    });
}

function getFilteredPolicies() {
    return state.policies.filter((policy) => {
        const matchesQuery = !state.searchQuery || 
            (policy.name && policy.name.toLowerCase().includes(state.searchQuery)) ||
            (policy.excerpt && policy.excerpt.toLowerCase().includes(state.searchQuery)) ||
            (policy.category && policy.category.toLowerCase().includes(state.searchQuery));

        const matchesCategory = state.selectedCategory === "all" ||
            (policy.category && policy.category.toLowerCase().includes(state.selectedCategory));

        return matchesQuery && matchesCategory;
    });
}

function renderDashboardCards() {
    if (!els.policyCardsGrid) return;

    const filtered = getFilteredPolicies();
    els.policyCardsGrid.innerHTML = "";

    if (filtered.length === 0) {
        els.policyCardsGrid.innerHTML = `
            <div class="empty-state" style="grid-column: 1 / -1; min-height: 240px; padding: 24px;">
                <p class="empty-kicker">No Results</p>
                <h2>No privacy policies found</h2>
                <p>Try refining your search or category filter.</p>
            </div>
        `;
        return;
    }

    filtered.forEach((policy) => {
        const card = document.createElement("div");
        card.className = "app-card";
        const logoSrc = policy.logo || DEFAULT_LOGO;
        const category = policy.category || "Application";
        const status = policy.status || "Published";

        card.innerHTML = `
            <div class="app-card-head">
                <img src="${escapeHtml(logoSrc)}" alt="${escapeHtml(policy.name)} icon" class="app-card-icon" onerror="this.src='${DEFAULT_LOGO}'">
                <div class="app-card-title-group">
                    <h3 class="app-card-title">${escapeHtml(policy.name)}</h3>
                    <div class="app-card-tags">
                        <span class="mini-chip mini-chip-tech">${escapeHtml(category)}</span>
                        <span class="mini-chip mini-chip-status">${escapeHtml(status)}</span>
                    </div>
                </div>
            </div>
            <p class="app-card-excerpt">${escapeHtml(policy.excerpt || "Official privacy policy for " + policy.name)}</p>
            <div class="app-card-action">
                <span>View Privacy Policy</span>
                <span class="app-card-arrow">&rarr;</span>
            </div>
        `;

        card.addEventListener("click", async () => {
            await selectPolicy(policy.id, { updateHistory: true });
        });

        els.policyCardsGrid.appendChild(card);
    });
}

function initCategoryFilters() {
    if (!els.categoryFilterContainer) return;

    const tabs = els.categoryFilterContainer.querySelectorAll(".filter-tab");
    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            tabs.forEach((t) => t.classList.remove("is-active"));
            tab.classList.add("is-active");
            state.selectedCategory = tab.dataset.category || "all";
            renderDashboardCards();
        });
    });
}

function renderSidebar(filterQuery = "") {
    if (!els.policyList) return;
    els.policyList.innerHTML = "";

    const policiesToDisplay = state.policies.filter((p) => {
        if (!filterQuery) return true;
        return (p.name && p.name.toLowerCase().includes(filterQuery)) ||
               (p.category && p.category.toLowerCase().includes(filterQuery));
    });

    if (policiesToDisplay.length === 0) {
        els.policyList.innerHTML = `<p style="color: var(--secondary-text); font-size: 0.88rem; padding: 12px 6px;">No applications found.</p>`;
        return;
    }

    policiesToDisplay.forEach((policy) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = `policy-item${policy.id === state.selectedId ? " is-active" : ""}`;
        const logoSrc = policy.logo || DEFAULT_LOGO;
        
        button.innerHTML = `
            <img src="${escapeHtml(logoSrc)}" alt="${escapeHtml(policy.name)} icon" class="policy-item-icon" onerror="this.src='${DEFAULT_LOGO}'">
            <div class="policy-item-info">
                <span class="policy-item-name">${escapeHtml(policy.name)}</span>
                <div class="policy-item-meta">
                    <span>${escapeHtml(policy.category || "App")}</span>
                    <span>&bull;</span>
                    <span style="color: #6EE7B7;">${escapeHtml(policy.status || "Published")}</span>
                </div>
            </div>
        `;

        button.addEventListener("click", async () => {
            await selectPolicy(policy.id, { updateHistory: true });
            setSidebarOpen(false);
        });

        els.policyList.appendChild(button);
    });
}

async function selectPolicy(policyId, options = {}) {
    const policy = state.policies.find((entry) => entry.id === policyId);
    if (!policy) {
        return;
    }

    state.selectedId = policy.id;
    renderSidebar();
    showPolicyView();
    renderLoadingState();
    updateMeta(policy);

    try {
        els.policyContent.innerHTML = markdownToHtml(getPolicyContent(policy), policy);
        updateMeta(policy);
        if (options.updateHistory !== false) {
            updatePolicyUrl(policy.id);
        }
        document.title = `${policy.name} | ${DEFAULT_TITLE}`;
        window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
        console.error(error);
        renderErrorState("The selected privacy policy could not be displayed.");
    }
}

function goHome() {
    state.selectedId = null;
    renderSidebar();
    renderDashboardCards();
    showDashboard();
    clearPolicyUrl();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function showDashboard() {
    if (els.dashboardHero) els.dashboardHero.hidden = false;
    if (els.policyView) els.policyView.hidden = true;
    document.title = DEFAULT_TITLE;
}

function showPolicyView() {
    if (els.dashboardHero) els.dashboardHero.hidden = true;
    if (els.policyView) els.policyView.hidden = false;
}

function updateMeta(policy) {
    const formattedDate = formatDate(policy.effectiveDate);
    const logoSrc = policy.logo || DEFAULT_LOGO;

    if (els.policyHeading) els.policyHeading.textContent = policy.name;
    if (els.policySummary) els.policySummary.textContent = policy.excerpt || "";
    if (els.policyDate) els.policyDate.textContent = formattedDate;
    if (els.policyStatus) els.policyStatus.textContent = policy.status || "Published";
    if (els.policyPlatform) els.policyPlatform.textContent = policy.platform || "Android";
    if (els.policyTitle) els.policyTitle.textContent = policy.name;
    if (els.policyLink) els.policyLink.textContent = buildSelectedLink(policy.id);
    
    if (els.policyLogo) {
        els.policyLogo.src = logoSrc;
        els.policyLogo.alt = `${policy.name} logo`;
        els.policyLogo.onerror = function() { this.src = DEFAULT_LOGO; };
    }
    if (els.policyLogoTitle) els.policyLogoTitle.textContent = policy.name;
    if (els.policyLinkCaption) els.policyLinkCaption.textContent = `Direct verified link for ${policy.name}.`;
    if (els.currentBreadcrumbName) els.currentBreadcrumbName.textContent = policy.name;
}

function renderLoadingState() {
    if (!els.policyContent) return;
    els.policyContent.innerHTML = `
        <div class="empty-state">
            <p class="empty-kicker">Loading</p>
            <h2>Opening privacy policy</h2>
            <p>Please wait while the verified policy is displayed.</p>
        </div>
    `;
}

function renderErrorState(message) {
    if (!els.policyContent) return;
    els.policyContent.innerHTML = `
        <div class="empty-state">
            <p class="empty-kicker">Load Error</p>
            <h2>Something went wrong</h2>
            <p>${escapeHtml(message)}</p>
        </div>
    `;
}

function getPolicyContent(policy) {
    if (!policy.content) {
        throw new Error("Policy content is missing.");
    }
    return policy.content;
}

function setSidebarOpen(open) {
    if (els.sidebar) {
        els.sidebar.classList.toggle("is-open", open);
        els.sidebar.setAttribute("aria-hidden", String(!open));
    }
    if (els.sidebarScrim) {
        els.sidebarScrim.classList.toggle("is-visible", open);
    }
}

function getRequestedPolicyId() {
    const params = new URLSearchParams(window.location.search);
    const queryId = params.get("app");
    const hashId = window.location.hash.replace(/^#/, "");
    return slugify(queryId || hashId || "");
}

function updatePolicyUrl(policyId) {
    const url = new URL(window.location.href);
    url.searchParams.set("app", policyId);
    url.hash = policyId;
    history.replaceState({}, "", url);
}

function clearPolicyUrl() {
    const url = new URL(window.location.href);
    url.searchParams.delete("app");
    url.hash = "";
    history.replaceState({}, "", url);
}

function buildSelectedLink(policyId = state.selectedId) {
    const url = new URL(window.location.href);
    if (!policyId) {
        url.searchParams.delete("app");
        url.hash = "";
        return url.toString();
    }
    url.searchParams.set("app", policyId);
    url.hash = policyId;
    return url.toString();
}

async function copySelectedLink() {
    if (!state.selectedId) {
        return;
    }

    try {
        await navigator.clipboard.writeText(buildSelectedLink());
        if (els.copyLinkButton) {
            const originalText = els.copyLinkButton.innerHTML;
            els.copyLinkButton.innerHTML = `✓ Link Copied`;
            window.setTimeout(() => {
                els.copyLinkButton.innerHTML = originalText;
            }, 1800);
        }
    } catch (error) {
        console.error(error);
    }
}

function initializeParallax() {
    const layers = Array.from(document.querySelectorAll("[data-parallax-layer]"));
    if (!layers.length) {
        return;
    }

    let rafId = 0;
    let targetX = 0;
    let targetY = 0;

    window.addEventListener("pointermove", (event) => {
        const x = (event.clientX / window.innerWidth) - 0.5;
        const y = (event.clientY / window.innerHeight) - 0.5;
        targetX = x;
        targetY = y;

        if (!rafId) {
            rafId = window.requestAnimationFrame(() => {
                layers.forEach((layer) => {
                    const depth = Number(layer.dataset.parallaxLayer || 0);
                    layer.style.transform = `translate3d(${targetX * 60 * depth}px, ${targetY * 60 * depth}px, 0)`;
                });
                rafId = 0;
            });
        }
    }, { passive: true });
}

function buildGmailComposeUrl({ to, subject, body }) {
    const params = new URLSearchParams({
        view: "cm",
        fs: "1",
        to: to || "13dimensionsgraphics@gmail.com",
        su: subject || "Privacy Policy Inquiry - 13 Dimensions Studio",
        body: body || "Hi 13 Dimensions Studio Team,\n\n\n\nRegards,\n"
    });
    return `https://mail.google.com/mail/?${params.toString()}`;
}

function markdownToHtml(markdown, policy) {
    const lines = markdown.replace(/\r/g, "").split("\n");
    const html = [];
    let paragraph = [];
    let unordered = [];
    let ordered = [];
    let blockquote = [];

    const flushParagraph = () => {
        if (!paragraph.length) return;
        html.push(`<p>${parseInline(paragraph.join(" "))}</p>`);
        paragraph = [];
    };

    const flushUnordered = () => {
        if (!unordered.length) return;
        html.push(`<ul>${unordered.map((item) => `<li>${parseInline(item)}</li>`).join("")}</ul>`);
        unordered = [];
    };

    const flushOrdered = () => {
        if (!ordered.length) return;
        html.push(`<ol>${ordered.map((item) => `<li>${parseInline(item)}</li>`).join("")}</ol>`);
        ordered = [];
    };

    const flushBlockquote = () => {
        if (!blockquote.length) return;
        html.push(`<blockquote>${parseInline(blockquote.join(" "))}</blockquote>`);
        blockquote = [];
    };

    lines.forEach((rawLine) => {
        const line = rawLine.trim();

        if (!line) {
            flushParagraph();
            flushUnordered();
            flushOrdered();
            flushBlockquote();
            return;
        }

        // Horizontal rule
        if (/^---+$/.test(line) || /^\*\*\*+$/.test(line)) {
            flushParagraph();
            flushUnordered();
            flushOrdered();
            flushBlockquote();
            html.push(`<hr style="border: none; border-top: 1px solid rgba(255,255,255,0.08); margin: 32px 0;">`);
            return;
        }

        // Headings
        const headingMatch = line.match(/^(#{1,6})\s+(.*)$/);
        if (headingMatch) {
            flushParagraph();
            flushUnordered();
            flushOrdered();
            flushBlockquote();
            const level = Math.min(headingMatch[1].length, 6);
            html.push(`<h${level}>${parseInline(headingMatch[2])}</h${level}>`);
            return;
        }

        // Blockquotes
        const quoteMatch = line.match(/^>\s*(.*)$/);
        if (quoteMatch) {
            flushParagraph();
            flushUnordered();
            flushOrdered();
            blockquote.push(quoteMatch[1]);
            return;
        }

        // Unordered list
        const unorderedMatch = line.match(/^-\s+(.*)$/);
        if (unorderedMatch) {
            flushParagraph();
            flushOrdered();
            flushBlockquote();
            unordered.push(unorderedMatch[1]);
            return;
        }

        // Ordered list
        const orderedMatch = line.match(/^\d+\.\s+(.*)$/);
        if (orderedMatch) {
            flushParagraph();
            flushUnordered();
            flushBlockquote();
            ordered.push(orderedMatch[1]);
            return;
        }

        paragraph.push(line);
    });

    flushParagraph();
    flushUnordered();
    flushOrdered();
    flushBlockquote();

    // Construct predefined Gmail compose link for this policy
    const appName = (policy && policy.name) ? policy.name : "13 Dimensions Studio";
    const subject = `Privacy Policy Inquiry - ${appName}`;
    const body = `Hi 13 Dimensions Studio Team,\n\nI have an inquiry regarding the privacy policy for ${appName}:\n\n\n\nRegards,\n`;
    const gmailUrl = buildGmailComposeUrl({
        to: "13dimensionsgraphics@gmail.com",
        subject: subject,
        body: body
    });

    // Append contact inquiry card at the bottom of the policy
    html.push(`
        <div class="policy-footer-contact">
            <div class="contact-meta">
                <h4>Questions or Privacy Inquiries?</h4>
                <p>If you have any questions or data requests regarding this policy, reach out to our team.</p>
            </div>
            <a class="primary-button" href="${escapeHtml(gmailUrl)}" target="_blank" rel="noopener noreferrer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                Contact Privacy Team
            </a>
        </div>
    `);

    return html.join("");
}

function parseInline(text) {
    const storedLinks = [];
    const withPlaceholders = text.replace(
        /\[([^\]]+)\]\((https?:\/\/[^)\s]+|mailto:[^)\s]+|\.\.?\/[^)\s]+|[a-zA-Z0-9_-]+\/[^)\s]+)\)/g,
        (_, label, url) => {
            const token = `@@LINK${storedLinks.length}@@`;
            storedLinks.push(`<a href="${escapeHtml(url)}" target="_blank" rel="noreferrer">${escapeHtml(label)}</a>`);
            return token;
        }
    );

    let output = escapeHtml(withPlaceholders);
    output = output.replace(/`([^`]+)`/g, "<code>$1</code>");
    output = output.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    output = output.replace(/\*([^*]+)\*/g, "<em>$1</em>");
    output = output.replace(/(https?:\/\/[^\s<]+)/g, '<a href="$1" target="_blank" rel="noreferrer">$1</a>');

    storedLinks.forEach((link, index) => {
        output = output.replace(`@@LINK${index}@@`, link);
    });

    return output;
}

function formatDate(value) {
    if (!value) {
        return "No date";
    }

    const date = new Date(`${value}T00:00:00`);
    return Number.isNaN(date.getTime())
        ? value
        : date.toLocaleDateString(undefined, {
            year: "numeric",
            month: "long",
            day: "numeric"
        });
}

function slugify(value) {
    return String(value || "")
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
}

function escapeHtml(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}
