function initYouTubeExtension() {
  const observer = new MutationObserver(() => hideShorts());

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

  hideShorts();
}

initYouTubeExtension();

function hideShorts() {
  hideShortsButtonFromGuide();
  hideShortsButtonFromToolbar();
  hideShortsSection();
  hideShortsPreviews();
  hideShortsFromSearch();
  redirectFromShorts();
}

function hideShortsButtonFromGuide() {
  const guideEntries = document.querySelectorAll('ytd-guide-entry-renderer');
  guideEntries.forEach(entry => {
    const entryText = entry.textContent.toLowerCase();
    if (entryText.includes('shorts')) {
      entry.style.display = 'none';
    }
  });
}

function hideShortsButtonFromToolbar() {
  const tabs = document.querySelectorAll('tp-yt-app-toolbar tp-yt-paper-tabs yt-tab-group-shape yt-tab-shape');
  tabs.forEach(tab => {
    const tabText = tab.textContent.toLowerCase();
    if (tabText.includes('shorts')) {
      tab.style.display = 'none';
    }
  });
}

function hideShortsSection() {
  const sections = document.querySelectorAll('ytd-item-section-renderer');
  sections.forEach(section => {
    const titleElement = section.querySelector('ytd-reel-shelf-renderer #title');
    if (titleElement && titleElement.textContent.toLowerCase().includes('shorts')) {
      section.style.display = 'none';
    }
  });
}

function hideShortsPreviews() {
  const previews = document.querySelectorAll('ytm-shorts-lockup-view-model-v2', 'ytm-shorts-lockup-view-model');
  previews.forEach(preview => {
    preview.style.display = 'none';
  });
}

function hideShortsFromSearch() {
  const previews = document.querySelectorAll('ytd-video-renderer');
  previews.forEach(preview => {
    const hrefElement = preview.querySelector('ytd-thumbnail a');
    if (hrefElement && hrefElement.href.includes('/shorts/')) {
      preview.style.display = 'none';
    }
  });
}


function redirectFromShorts() {
  if (window.location.pathname === '/shorts' || window.location.pathname.startsWith('/shorts/')) {
    window.location.replace('https://www.youtube.com/');
  }
}

