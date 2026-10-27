console.log('hello world')

const TestEl = document.getElementById('test-el')

TestEl.textContent = 'bye bye'

TestEl.addEventListener('click', ()=>{
    console.log('clicked')
    TestEl.innerHTML = "<b>clicked</b>"
})

TestEl.addEventListener('mouseover', ()=>{
    console.log('on')
  
})


TestEl.addEventListener('mouseout', ()=>{
    console.log('off')
  
})