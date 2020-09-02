const subjects = [
    "Chinese Language SX",
    "Chinese Literature BLK-C",
    "English Language SX",
    "Mathematics SX",
    "Liberal Studies SX",
    "Biology BLK-A",
    "Biology BLK-B",
    "Biology BLK-C",
    "Biology BLK-D",
    "Chemistry BLK-A",
    "Chemistry BLK-B",
    "Chemistry BLK-C",
    "Chemistry BLK-D",
    "Physics BLK-B",
    "Physics BLK-C",
    "Physics BLC-D",
    "Economics BLK-A",
    "Economics BLK-B",
    "Economics BLK-C",
    "Economics BLK-D",
    "Geography BLK-A",
    "Geography BLK-C",
    "History BLK-B",
    "BAFS BLK-B",
    "BAFS BLK-D",
    "Psychology BLK-B",
    "Psychology BLK-D",
    "Musical Arts BLK-A",
    "Visual Arts BLK-A",
    "Religious Education SX",
    "Family Life Education SX",
    "ICT BLK-A",
    "ICT BLK-C",
    "ICT BLK-D",
    "Physical Education SX",
    "HRT SX"
]

const ids = [
    "8289613866",
    "7881060398",
    "8819190337",
    "9434163782",
    "3705452438",
    "2998367246",
    "9274869634",
    "2998367246",
    "9274869634",
    "6514174519",
    "9707531036",
    "9707531036",
    "6514174519",
    "3687978030",
    "8078045410",
    "3687978030",
    "2766467403",
    "4194724935",
    "4194724935",
    "2163878514",
    "8634365482",
    "8634365482",
    "8975709394",
    "2766467403",
    "2766467403",
    "7578549019",
    "7578549019",
    "5036327219",
    "4651622812",
    "4287727803",
    "5168805269",
    "4100811681",
    "5161823800",
    "4100811681",
    "7233088693",
    "8819190337"
]

let subjectidobj = {}

const dropdownbox = document.getElementById('subjects')
const joinbtn = document.getElementById('join')
const selection = document.getElementById('selection')
const ogvisibility = joinbtn.style.visibility

joinbtn.addEventListener('click', ()=>{
    const id = subjectidobj[selection.innerText.toString().toLowerCase()]
    if (id != undefined) {
        window.location.href = 'https://zoom.us/j/' + id
    } else {
        alert("Please select a subject")
    }
})

dropdownbox.innerHTML = ""
for (let i = 0; i < subjects.length; i++) {
    const subject = document.createElement('a')
    subject.className = 'dropdown-item'
    subject.href = '#'
    subject.innerText = subjects[i]
    dropdownbox.appendChild(subject)
    subjectidobj[subjects[i].toString().toLowerCase()] = ids[i]
}
const dropdownitems = document.getElementsByClassName('dropdown-item')
for (let i = 0; i < dropdownitems.length; i++) {
    dropdownitems.item(i).addEventListener('click', (event)=>{
        selection.innerText = event.target.innerText
    })
}
