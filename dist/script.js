document.documentElement.classList.add("js");

const siteIntro = document.querySelector("#site-intro");
let introTouchStartY = null;
let introDismissed = false;

const setIntroMotion = (clientX, clientY) => {
  if (!siteIntro || introDismissed) return;

  const bounds = siteIntro.getBoundingClientRect();
  const x = Math.min(1, Math.max(0, (clientX - bounds.left) / bounds.width));
  const y = Math.min(1, Math.max(0, (clientY - bounds.top) / bounds.height));

  siteIntro.style.setProperty("--intro-x", `${(x * 100).toFixed(1)}%`);
  siteIntro.style.setProperty("--intro-y", `${(y * 100).toFixed(1)}%`);
  siteIntro.style.setProperty("--intro-rx", `${((0.5 - y) * 3.2).toFixed(2)}deg`);
  siteIntro.style.setProperty("--intro-ry", `${((x - 0.5) * 4.4).toFixed(2)}deg`);
  siteIntro.style.setProperty("--intro-shift-x", `${((x - 0.5) * 8).toFixed(1)}px`);
  siteIntro.style.setProperty("--intro-shift-y", `${((y - 0.5) * 5).toFixed(1)}px`);
};

const resetIntroMotion = () => {
  if (!siteIntro || introDismissed) return;
  siteIntro.style.setProperty("--intro-x", "50%");
  siteIntro.style.setProperty("--intro-y", "42%");
  siteIntro.style.setProperty("--intro-rx", "0deg");
  siteIntro.style.setProperty("--intro-ry", "0deg");
  siteIntro.style.setProperty("--intro-shift-x", "0px");
  siteIntro.style.setProperty("--intro-shift-y", "0px");
};

const finishIntro = () => {
  document.documentElement.classList.remove("intro-active");
  siteIntro?.remove();
};

const dismissIntro = () => {
  if (!siteIntro || introDismissed) return;
  introDismissed = true;
  siteIntro.classList.add("is-leaving");
  siteIntro.setAttribute("aria-hidden", "true");
  siteIntro.addEventListener("transitionend", (event) => {
    if (event.target === siteIntro && event.propertyName === "transform") finishIntro();
  });
  window.setTimeout(finishIntro, 1050);
};

if (siteIntro) {
  siteIntro.addEventListener("click", dismissIntro);
  siteIntro.addEventListener("pointermove", (event) => {
    if (event.pointerType !== "touch") setIntroMotion(event.clientX, event.clientY);
  }, { passive: true });
  siteIntro.addEventListener("pointerleave", resetIntroMotion);
  siteIntro.addEventListener("touchstart", (event) => {
    introTouchStartY = event.touches[0]?.clientY ?? null;
    const touch = event.touches[0];
    if (touch) setIntroMotion(touch.clientX, touch.clientY);
  }, { passive: true });
  siteIntro.addEventListener("touchmove", (event) => {
    const touch = event.touches[0];
    if (touch) setIntroMotion(touch.clientX, touch.clientY);
  }, { passive: true });
  siteIntro.addEventListener("touchend", (event) => {
    const endY = event.changedTouches[0]?.clientY;
    if (introTouchStartY !== null && Number.isFinite(endY) && introTouchStartY - endY > 28) {
      dismissIntro();
    }
    introTouchStartY = null;
  }, { passive: true });
  siteIntro.addEventListener("wheel", (event) => {
    if (Math.abs(event.deltaY) > 8) dismissIntro();
  }, { passive: true });
  requestAnimationFrame(() => siteIntro.focus({ preventScroll: true }));
} else {
  document.documentElement.classList.remove("intro-active");
}

const pageHeader = document.querySelector("[data-header]");
const year = document.querySelector("[data-year]");
const tabs = Array.from(document.querySelectorAll('[role="tab"]'));
const panels = Array.from(document.querySelectorAll('[role="tabpanel"]'));

if (year) {
  year.textContent = new Date().getFullYear();
}

const updateHeader = () => {
  pageHeader?.classList.toggle("is-scrolled", window.scrollY > 18);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

const selectTab = (tab, moveFocus = false) => {
  const panelId = tab.getAttribute("aria-controls");

  tabs.forEach((item) => {
    const isActive = item === tab;
    item.setAttribute("aria-selected", String(isActive));
    item.tabIndex = isActive ? 0 : -1;
  });

  panels.forEach((panel) => {
    panel.hidden = panel.id !== panelId;
  });

  if (moveFocus) {
    tab.focus();
  }
};

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => selectTab(tab));

  tab.addEventListener("keydown", (event) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) {
      return;
    }

    event.preventDefault();
    let nextIndex = index;

    if (event.key === "ArrowRight") nextIndex = (index + 1) % tabs.length;
    if (event.key === "ArrowLeft") nextIndex = (index - 1 + tabs.length) % tabs.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = tabs.length - 1;

    selectTab(tabs[nextIndex], true);
  });
});

document.querySelectorAll("[data-open-tab]").forEach((link) => {
  link.addEventListener("click", () => {
    const target = document.getElementById(link.dataset.openTab);
    if (target) selectTab(target);
  });
});

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -8%", threshold: 0.08 },
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}
