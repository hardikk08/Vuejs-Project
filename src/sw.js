self.addEventListener('install', event => {
  console.log('install -> ', event)
})

self.addEventListener('activate', event => {
  console.log('activate -> ', event)
})
