window.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.tabs__btn').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {

      document.querySelectorAll('.tabs__item').forEach(function(tabsItem) {
        tabsItem.classList.remove('tabs__item--active')
      })
      event.target.parentNode.classList.add('tabs__item--active')

      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.tab-content').forEach(function(tabContent) {
        tabContent.classList.remove('tab-content--active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('tab-content--active')

    })
  })
})
