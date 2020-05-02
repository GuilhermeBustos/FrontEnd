const modalOverlay = document.querySelector('.modal-overlay')
const courses = document.querySelectorAll ('.course')

for (let course of courses) {
    course.addEventListener('click', function(){
        const courseId = course.getAtribute('id')
        modalOverlay.classList.add('active')
        modalOverlay.querySelector('iframe').src = `https://rocketseat.com.br/${courseId}`
    })
}

document.querySelector('.close-modal').addEventListener('click', function(){
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector('iframe').src = ''
})
