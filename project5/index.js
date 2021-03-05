console.log('This is my index.js')
// data is a array of object which contains information about the candidates
const data = [
    {
        name: 'Becca Siri',
        age: 18,
        city: 'London',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/women/75.jpg'
    },
    {
        name: 'Shubhami sharma',
        age: 20,
        city: 'kolkata',
        language: 'javascript',
        framework: 'React',
        image: 'https://randomuser.me/api/portraits/women/70.jpg'
    },
    {
        name: 'Aditi sharma',
        age: 23,
        city: 'Indore',
        language: 'Python',
        framework: 'PHP',
        image: 'https://randomuser.me/api/portraits/women/73.jpg'
    },
    {
        name: 'Raj Sitoliya',
        age: 18,
        city: 'London',
        language: 'javascript',
        framework: false,
        image: 'https://randomuser.me/api/portraits/men/75.jpg'
    },
    {
        name: 'Aryan Dubey',
        age: 18,
        city: 'London',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/79.jpg'
    },
    {
        name: 'Aditya sharma',
        age: 18,
        city: 'indore',
        language:'Go',
        framework: false,
        image: 'https://randomuser.me/api/portraits/men/80.jpg'
    },
]

function cvIterator(profiles){
    let nextIndex=0;
    return {
        next: function(){
            return nextIndex<profiles.length ?
            {value: profiles[nextIndex++], done: false} :
            {done: true}
        }
    };
}

const candidates = cvIterator(data);
nextCV()

const next = document.getElementById('next');
next.addEventListener('click', nextCV);

function nextCV(){
    const CurrentCandidate = candidates.next().value
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if(CurrentCandidate != undefined){
    image.innerHTML = `<img src='${CurrentCandidate.image}'>`
    profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">Name: ${CurrentCandidate.name}</li>
    <li class="list-group-item">Age: ${CurrentCandidate.age} Years Old</li>
    <li class="list-group-item">Lives in:  ${CurrentCandidate.city}</li>
    <li class="list-group-item">Primarily works on  ${CurrentCandidate.language}</li>
    <li class="list-group-item">Uses: ${CurrentCandidate.framework}</li>
  </ul>`
  
    }
    else{
        alert('End of candidate applications')
        window.location.reload();
    }
}