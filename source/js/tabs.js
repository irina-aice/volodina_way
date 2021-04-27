(function() {
  const tablist = document.querySelector('.js-tab-list');
  const tabs = tablist.querySelectorAll('a');
  const panels = document.querySelectorAll('.js-tab-panel');

  const tabSelectedClass = 'countries__link--current';
  const panelHiddenClass = 'hidden';

  const switchTab = (oldTab, newTab) => {
    newTab.focus();
    newTab.removeAttribute('tabindex');
    newTab.setAttribute('aria-selected', 'true');
    newTab.classList.add(tabSelectedClass);

    oldTab.removeAttribute('aria-selected');
    oldTab.classList.remove(tabSelectedClass);
    oldTab.setAttribute('tabindex', '-1');
    let index = Array.prototype.indexOf.call(tabs, newTab);
    let oldIndex = Array.prototype.indexOf.call(tabs, oldTab);
    panels[oldIndex].hidden = true;
    panels[oldIndex].classList.add(panelHiddenClass);

    panels[index].hidden = false;
    panels[index].classList.remove(panelHiddenClass);
  }

  tablist.setAttribute('role', 'tablist');

  tabs.forEach( (tab, i) => {
    tab.setAttribute('role', 'tab');
    tab.setAttribute('id', 'tab' + (i + 1));
    tab.setAttribute('tabindex', '-1');
    tab.parentNode.setAttribute('role', 'presentation');

    tab.addEventListener('click', evt => {
      evt.preventDefault();
      let currentTab = tablist.querySelector('[aria-selected]');
      if (evt.currentTarget !== currentTab) {
        switchTab(currentTab, evt.currentTarget);
      }
    });

    tab.addEventListener('keydown', evt => {
      let index = Array.prototype.indexOf.call(tabs, evt.currentTarget);
      let dir = evt.which === 37 ? index - 1 : evt.which === 39 ? index + 1 : evt.which === 40 ? 'down' : null;
      if (dir !== null) {
        evt.preventDefault();
        dir === 'down' ? panels[i].focus() : tabs[dir] ? switchTab(evt.currentTarget, tabs[dir]) : void 0;
      }
    });
  });

  panels.forEach( (panel, i) => {
    panel.setAttribute('role', 'tabpanel');
    panel.setAttribute('tabindex', '-1');
    let id = panel.getAttribute('id');
    panel.setAttribute('aria-labelledby', tabs[i].id);
    panel.hidden = true;
    panel.classList.add(panelHiddenClass);
  });

  tabs[0].removeAttribute('tabindex');
  tabs[0].setAttribute('aria-selected', 'true');
  tabs[0].classList.add(tabSelectedClass);

  panels[0].hidden = false;
  panels[0].classList.remove(panelHiddenClass);

  window.addEventListener('hashchange', evt => {
    let tab = null;

    for (let i = 0; i < tabs.length; i++) {
      if (tabs[i].href === window.location.href) {
        tab = tabs[i];
        break;
      }
    }

    if (tab) {
      tab.click();
    }
  });
})();
