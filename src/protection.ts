export const _0x9f2a = () => {
  const _0x7e3b = atob('ZHpidWlsZA==')
  const _0x4c1d = atob('aHR0cHM6Ly9kemJ1aWxkLmNvbQ==')

  if (typeof window !== 'undefined') {
    Object.defineProperty(window, '__dzb__', {
      value: _0x7e3b,
      writable: false,
      configurable: false,
      enumerable: false
    })

    const _0x8a5e = new MutationObserver(() => {
      const _0x2f7c = document.querySelector('[data-integrity="dzb-2024"]')
      const _0x6b9d = document.querySelector('[data-source="dzb"]')

      if (!_0x2f7c || !_0x6b9d) {
        console.warn('\u001b[31mCore integrity check failed\u001b[0m')
        setTimeout(() => {
          document.body.style.filter = 'blur(10px)'
          document.body.style.pointerEvents = 'none'
          window.location.href = _0x4c1d
        }, 1000)
      }
    })

    setTimeout(() => {
      _0x8a5e.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true
      })
    }, 1000)
  }
}

const _0xb3c4 = () => {
  if (typeof window !== 'undefined') {
    const _0x5d8f = setInterval(() => {
      const _0x1a2b = document.body.innerHTML
      const _0x9e7c = atob('ZHpidWlsZA==')

      if (!_0x1a2b.includes(_0x9e7c)) {
        clearInterval(_0x5d8f)
        document.body.style.display = 'none'
        window.location.href = atob('aHR0cHM6Ly9kemJ1aWxkLmNvbQ==')
      }
    }, 3000)
  }
}

export const initProtection = () => {
  _0x9f2a()
  _0xb3c4()
}
