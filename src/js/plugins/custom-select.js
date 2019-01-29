const Select = ($ => {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME = 'custom-select'
  const DATA_KEY = 'bs.custom-select'
  const VERSION = 'v4.0.0'
  const EVENT_KEY = `.${DATA_KEY}`
  const DATA_API_KEY = '.data-api'
  const JQUERY_NO_CONFLICT = $.fn[NAME]

  const Default = {}

  const Event = {
    LOAD_DATA_API: `load${EVENT_KEY}${DATA_API_KEY}`,
  }

  const Selector = {
    SELECT: '.custom-select',
  }

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Select {
    constructor(element) {
      this._elements = []
      this._element = element
      this._customElement = null
      this._isMultiple = false
      this._isSearchable = false
      this._optionsHover = false

      this._processImages()
    }

    // public

    dispose() {
      $(window).off(EVENT_KEY)
      $.removeData(this._element, DATA_KEY)

      this._elements = null
      this._element = null
      this._customElement = null
      this._isMultiple = false
      this._isSearchable = false
      this._optionsHover = false
    }

    // private

    _handleResize() {}

    _processImages() {
      var that = this
      const $select = $(this._element)
      const uniqueID = this._guid()

      var filterQuery = [],
        wrapper = $('<div class="select-wrapper"></div>'),
        selectChildren = $select.children('option, optgroup'),
        valuesSelected = []

      this._isMultiple = Boolean($select.attr('multiple'))
      this._isSearchable = Boolean($select.attr('searchable'))

      this._customElement = $(`
        <ul id="select-options-${uniqueID}" class="dropdown-menu ${
        this._isMultiple ? 'multiple-select-dropdown' : ''
      }"></ul>
      `)

      var label =
        $select.find('option:selected').html() ||
        $select.find('option:first').html() ||
        ''

      if ($select.data('select-id')) {
        const selectOptionsListElement = `ul#select-options-${$select.data(
          'select-id'
        )}`
        $select
          .parent()
          .find('span.caret, input')
          .remove()
          .unwrap()
        $(selectOptionsListElement).remove()
      }

      $select.data('select-id', uniqueID)

      //wrapper.addClass($select.attr('class'));

      if (this._isSearchable) {
        this._setSearchableOption(uniqueID)
      }

      if (selectChildren && selectChildren.length) {
        selectChildren.each(function() {
          const $this = $(this)

          if ($this.is('option')) {
            if (that._isMultiple) {
              that._appendOptionWithIcon($select, $this, 'multiple')
            } else {
              that._appendOptionWithIcon($select, $this)
            }
          } else if ($this.is('optgroup')) {
            that._customElement.append(
              $(`
              <li class="optgroup">
                <span>${$this.attr('label')}</span>
              </li>
            `)
            )

            $this.children('option').each(function() {
              that._appendOptionWithIcon($select, $(this), 'optgroup-option')
            })
          }
        })
      }

      this._customElement.find('li:not(.optgroup)').each(function(i) {
        const $this = $(this)
        $this.click(function(e) {
          if (!$this.hasClass('disabled') && !$this.hasClass('optgroup')) {
            var selected = true

            if (that._isMultiple) {
              $('input[type="checkbox"]', this).prop('checked', function(i, v) {
                return !v
              })
              var optgroup = $select.find('optgroup').length
              if (that._isSearchable) {
                if (optgroup) {
                  selected = that._toggleEntryFromArray(
                    valuesSelected,
                    $this.index() - $this.prevAll('.optgroup').length - 1,
                    $select
                  )
                } else {
                  selected = that._toggleEntryFromArray(
                    valuesSelected,
                    $this.index() - 1,
                    $select
                  )
                }
              } else if (optgroup) {
                selected = that._toggleEntryFromArray(
                  valuesSelected,
                  $this.index() - $this.prevAll('.optgroup').length,
                  $select
                )
              } else {
                selected = that._toggleEntryFromArray(
                  valuesSelected,
                  $this.index(),
                  $select
                )
              }
              $newSelect.trigger('focus')
            } else {
              that._customElement.find('li').removeClass('active')
              $this.toggleClass('active')
              $newSelect.val($this.text().trim())
            }

            that._activateOption(that._customElement, $this)
            $select
              .find('option')
              .eq(i)
              .prop('selected', selected)
            $select.trigger('change')
          }

          e.stopPropagation()
        })
      })

      $select.wrap(wrapper)

      var dropdownIcon = $(
        '<svg class="caret icon icon-xs icon-primary"><svg viewBox="0 0 32 32" id="expand" xmlns="http://www.w3.org/2000/svg"><path d="M3.733 6.133L0 9.866l16 16 16-16-3.733-3.733L16 18.4 3.733 6.133z"/></svg>\n</svg>'
      )
      if ($select.is(':disabled')) {
        dropdownIcon.addClass('disabled')
      }

      var sanitizedLabelHtml = label.replace(/"/g, '&quot;')

      const $newLabel = $(`
        <label class="sr-only" id="label-${uniqueID}">${sanitizedLabelHtml}</label>
      `)
      const $newSelect = $(`
        <input type="text" class="dropdown select-dropdown" aria-labelledby="label-${uniqueID}" data-toggle="dropdown" readonly="true" ${
        $select.is(':disabled') ? 'disabled' : ''
      } data-activates="select-options-${uniqueID}" value="${sanitizedLabelHtml}" />
      `)
      $select.before($newSelect)
      $newSelect
        .before(dropdownIcon)
        .addClass($select.attr('class').replace('custom-select', ''))
      $newSelect.before($newLabel)

      $newSelect.after(this._customElement)
      if (!$select.is(':disabled')) {
        $newSelect.dropdown({
          hover: false,
          closeOnClick: false,
        })
      }

      if ($select.attr('tabindex')) {
        $($newSelect[0]).attr('tabindex', $select.attr('tabindex'))
      }

      $select.addClass('initialized')

      if (!this._isMultiple && this._isSearchable) {
        this._customElement.find('li').on('click', function() {
          $newSelect.trigger('close')
        })
      }

      this._customElement.hover(
        function() {
          that._optionsHover = true
        },
        function() {
          that._optionsHover = false
        }
      )

      if (this._isMultiple) {
        $select.find('option:selected:not(:disabled)').each(function() {
          var index = $(this).index()

          that._toggleEntryFromArray(valuesSelected, index, $select)
          that._customElement
            .find('li')
            .eq(index)
            .find(':checkbox')
            .prop('checked', true)
        })
      }

      $newSelect.on({
        focus: function focus() {
          if (
            $('ul.select-dropdown')
              .not(that._customElement[0])
              .is(':visible')
          ) {
            $('input.select-dropdown').trigger('close')
          }
          if (!that._customElement.is(':visible')) {
            $(this).trigger('open', ['focus'])
            var _label = $(this).val()
            var selectedOption = that._customElement
              .find('li')
              .filter(function() {
                return (
                  $(this)
                    .text()
                    .toLowerCase() === _label.toLowerCase()
                )
              })[0]
            that._activateOption(that._customElement, selectedOption)
          }
        },
        click: function click(e) {
          e.stopPropagation()
        },
        blur: function blur() {
          if (!that._isMultiple && !that._isSearchable) {
            $(this).trigger('close')
          }
          that._customElement.find('li.selected').removeClass('selected')
        },
        keydown: function keydown(e) {
          // TAB
          if (e.which === 9) {
            $newSelect.trigger('close')
            return
          }

          // DOWN
          if (e.which === 40 && !that._customElement.is(':visible')) {
            $newSelect.trigger('open')
            return
          }

          // Enter
          if (e.which === 13 && !that._customElement.is(':visible')) {
            return
          }

          e.preventDefault()

          var letter = String.fromCharCode(e.which).toLowerCase(),
            nonLetters = [9, 13, 27, 38, 40]
          if (letter && nonLetters.indexOf(e.which) === -1) {
            filterQuery.push(letter)

            var string = filterQuery.join(''),
              newOption = that._customElement.find('li').filter(function() {
                return (
                  $(this)
                    .text()
                    .toLowerCase()
                    .indexOf(string) === 0
                )
              })[0]

            if (newOption) {
              that._activateOption(that._customElement, newOption)
            }
          }

          // Enter
          if (e.which === 13) {
            var activeOption = that._customElement.find(
              'li.selected:not(.disabled)'
            )[0]
            if (activeOption) {
              $(activeOption).trigger('click')
              if (!that._isMultiple) {
                $newSelect.trigger('close')
              }
            }
          }

          // DOWN
          if (e.which === 40) {
            newOption = that._customElement.find('li.selected').length
              ? that._customElement
                  .find('li.selected')
                  .next('li:not(.disabled)')[0]
              : that._customElement.find('li:not(.disabled)')[0]
            that._activateOption(that._customElement, newOption)
          }

          // Escape
          if (e.which === 27) {
            $newSelect.trigger('close')
          }

          // UP
          if (e.which === 38) {
            newOption = that._customElement
              .find('li.selected')
              .prev('li:not(.disabled)')[0]
            if (newOption) {
              that._activateOption(that._customElement, newOption)
            }
          }

          setTimeout(function() {
            filterQuery = []
          }, 1000)
        },
      })

      $(window).on('click', function() {
        ;(that._isMultiple || that._isSearchable) &&
          (that._optionsHover || $newSelect.trigger('close'))
      })
    }

    _activateOption(collection, newOption) {
      if (newOption) {
        collection.find('li.selected').removeClass('selected')
        var option = $(newOption)
        option.addClass('selected')
      }
    }

    _setSearchableOption(_uniqueID) {
      const $select = $(this._element)
      var element = $(`
        <span class="search-wrap">
          <label class="sr-only" id="label-search-${_uniqueID}">Cerca</label>
          <input type="text" aria-labelledby="label-search-${_uniqueID}" class="search select-dropdown-search" placeholder="${$select.attr(
        'searchable'
      )}">
        </span>
      `)
      this._customElement.append(element)
      element.find('.search').on('keyup', function() {
        const $this = $(this)
        var ul = $this.closest('ul')
        var searchValue = $this.val()

        ul.find('li')
          .find('span.filtrable')
          .each(function() {
            const $this = $(this)
            if (typeof this.outerText === 'string') {
              var liValue = this.outerText.toLowerCase()

              if (liValue.indexOf(searchValue.toLowerCase()) === -1) {
                $this.hide()
                $this.parent().hide()
              } else {
                $this.show()
                $this.parent().show()
              }
            }
          })
      })
    }

    _appendOptionWithIcon(select, option, type) {
      var disabledClass = option.is(':disabled') ? 'disabled ' : ''
      var optgroupClass = type === 'optgroup-option' ? 'optgroup-option ' : ''

      var icon_url = option.data('icon')
      var classes = option.attr('class')
      if (icon_url) {
        var classString = ''
        if (classes) {
          classString = ` class="${classes}"`
        }
        var listDOM = this._isMultiple
          ? `<li class="${disabledClass}">
                      <img alt="" src="${icon_url}" ${classString}>
                      <span class="filtrable">
                        <input type="checkbox" ${disabledClass} aria-label="${option.html()}"/>
                      </span>
                    </li>`
          : `<li class="${disabledClass} ${optgroupClass}">
                      <img alt="" src="${icon_url}" ${classString}>
                      <span class="filtrable">
                        ${option.html()}
                      </span>
                    </li>`
        this._customElement.append($(listDOM))
        return true
      }

      if (this._isMultiple) {
        this._customElement.append(
          $(`
          <li class="${disabledClass}">
            <span class="filtrable"><input type="checkbox"${disabledClass} aria-label="${option.html()}"/>${option.html()}</span>
          </li>
        `)
        )
      } else {
        this._customElement.append(
          $(`
          <li class="${disabledClass}${optgroupClass}">
            <span class="filtrable">${option.html()}</span>
          </li>
        `)
        )
      }
    }

    _toggleEntryFromArray(entriesArray, entryIndex, select) {
      var index = entriesArray.indexOf(entryIndex),
        notAdded = index === -1

      if (notAdded) {
        entriesArray.push(entryIndex)
      } else {
        entriesArray.splice(index, 1)
      }

      select
        .siblings('ul.dropdown-menu')
        .find('li:not(.optgroup)')
        .eq(entryIndex)
        .toggleClass('active')

      select
        .find('option')
        .eq(entryIndex)
        .prop('selected', notAdded)
      var value = ''

      for (var i = 0, count = entriesArray.length; i < count; i++) {
        var text = select
          .find('option')
          .eq(entriesArray[i])
          .text()

        i === 0 ? (value += text) : (value += `, ${text}`)
      }

      if (value === '') {
        value = select
          .find('option:disabled')
          .eq(0)
          .text()
      }

      select.siblings('.dropdown').val(value)

      return notAdded
    }

    _guid() {
      function S4() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
      }

      return `${S4()}${S4()}-${S4()}-4${S4().substr(
        0,
        3
      )}-${S4()}-${S4()}${S4()}${S4()}`.toLowerCase()
    }

    // static

    static _jQueryInterface() {
      return this.each(function() {
        var $this = $(this)
        var data = $this.data(DATA_KEY)
        var config = $.extend(
          {},
          Default,
          $this.data(),
          typeof config === 'object' && config
        )

        if (!data) $this.data(DATA_KEY, (data = new Select(this, config)))
        if (typeof config === 'string') data[config].call($this)
      })
    }
  }

  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(window).on(Event.LOAD_DATA_API, () => {
    const selects = $.makeArray($(Selector.SELECT))

    for (let i = selects.length; i--; ) {
      const $select = $(selects[i])
      Select._jQueryInterface.call($select, $select.data())
    }
  })

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Select._jQueryInterface
  $.fn[NAME].Constructor = Select
  $.fn[NAME].noConflict = function() {
    $.fn[NAME] = JQUERY_NO_CONFLICT
    return Select._jQueryInterface
  }

  return Select
})($)

export default Select
