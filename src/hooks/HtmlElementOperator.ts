export const useDockElement = (dock: HTMLElement | null, event: { clientX: number; clientY: number }) => {
  if (!dock) return 0
  const icons = dock?.getElementsByTagName('img') || []
  let widthSum = 0
  for (let i = 0; i < icons.length; i++) {
    const x = icons[i].offsetLeft + icons[i].offsetWidth / 2
    const y = icons[i].offsetTop + icons[i].offsetHeight / 2 + (dock?.offsetTop || 0)
    const a = event?.clientX - x
    const b = event?.clientY - y
    const c = Math.sqrt(a ** 2 + b ** 2)
    let scale = 1 - c / 300
    if (scale < 0.5) scale = 0.5
    icons[i].style.width = scale * 140 + 'px'
    icons[i].style.height = scale * 140 + 'px'
    widthSum += scale * 140
  }
  return widthSum
}

export const useDockBackgroundWidth = (dock: HTMLElement | null, width: number) => {
  if (!dock) return 0
  width = width ? width + 50 : width
  const backgrounds = dock?.getElementsByClassName('background') || []
  for (const background of backgrounds) {
    background.setAttribute('style', 'width: ' + width + 'px')
  }
}
