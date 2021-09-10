console.log('JS included'); 

//FETCING DATA FROM API 

let data, profiles; 

let xhr = new XMLHttpRequest(); 

xhr.open('GET', 'https://randomuser.me/api/?results=100', true); 

xhr.onload = function () {
    //200 is a http response code {404 is not found, 200 is status ok}
    if (this.status === 200) {
        // console.log(this.responseText); 
        data = this.responseText; 
        data = JSON.parse(data);  
        profiles = data['results']; 
        console.log(profiles);
        
        
        //CV iterator
        function cvIterator(profiles) { 
            let nextIndex = 0;  
            return { 
                next : function() { 
                    return nextIndex < profiles.length ? {value : profiles[nextIndex++], done : false} : {done : true};
                }
            }
        }   

        
        const cvp = cvIterator(profiles); 

        //Button Listener  
        const nextBtn = document.getElementById('next-btn'); 

        nextBtn.addEventListener('click', ()=> {  

            const currentProfile = cvp.next().value;  

            console.log(currentProfile);
            

            let left1 = document.getElementById('left1'); 
            
             left1.innerHTML = `<img src="${currentProfile.picture.large}" alt="" srcset=""> `; 

            let head = document.getElementById('head'); 

            head.innerHTML = `<h3 class="HeadingSecondary">${currentProfile.name.title} ${currentProfile.name.first } ${currentProfile.name.last}</h3>`; 

            let bio = document.getElementById('bio');  

            bio.innerHTML = `  <ol class="list-group list-group-numbered">
            <li class="list-group-item d-flex justify-content-between align-items-start">
              <div class="ms-2 me-auto">
                <div class="fw-bold">Gender</div>
                ${currentProfile.gender}
              </div>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
              <div class="ms-2 me-auto">
                <div class="fw-bold">DOB</div>
                ${currentProfile.dob.date} 
              </div>  

            <li class="list-group-item d-flex justify-content-between align-items-start">
              <div class="ms-2 me-auto">
                <div class="fw-bold">Age</div> ${currentProfile.dob.age}
              </div> 
              
            <li class="list-group-item d-flex justify-content-between align-items-start">
              <div class="ms-2 me-auto">
                <div class="fw-bold">Email</div>
                ${currentProfile.email}
              </div>

            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
              <div class="ms-2 me-auto">
                <div class="fw-bold">Phone</div>
                ${currentProfile.phone}
              </div>
              
            </li>
          </ol>
            `;

        });


    } else {
        console.log('error');
    }
}


//Send request 
xhr.send();   
 
 



//Cv iterator

//     CVIterator = (data)=> { 
//         let in
//     }
// }
