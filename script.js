const menutoggle=document.getElementById('toggle');
const closebtn=document.getElementById('close');
const openbtn=document.getElementById('open');
const modal=document.getElementById('modal');

menutoggle.addEventListener('click', () => {
    document.body.classList.toggle('show-nav')
})
openbtn.addEventListener('click',() =>modal.classList.add('show-modal') )
closebtn.addEventListener('click',()=>modal.classList.remove('show-modal'))
window.addEventListener('click',e=>
    e.target==modal ? modal.classList.remove('show-modal'):false
)