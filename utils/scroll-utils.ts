export function scrollToElement(elementId: string): void {
  const element = document.getElementById(elementId)
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 100, // Offset for header
      behavior: "smooth",
    })
  }
}
