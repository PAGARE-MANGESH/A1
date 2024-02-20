
AOS.init();




let UserInput = document.getElementById('UserInput')


console.log(UserInput)


let ImgsContainer = document.getElementById('ImgsContainer')

// const UserInput = document.getElementById('UserInput').value.trim()     // userInput 


const submitBtn = document.getElementById('submitBtn')    // submitBtn 

// userInput 

submitBtn.addEventListener('click', function () {



    const API_KEY = '42366435-a7ce29bcd9380ebc415619aef';

    // https://pixabay.com/api/?key=

    const URL = 'https://pixabay.com/api/?key=' + API_KEY + '&q=' + `${UserInput.value}`   // api +

    console.log(URL)


    console.log(UserInput)

    let Render = document.getElementById('container')

    let imgs = document.getElementById('img')


    fetch(URL).then((response) => response.json())

        .then((data) => {

            console.log(data)


            getImges = data.hits


            if (data.hits.length === 0) alert('Enter A Valid Word')


            else if (UserInput.value.length == 0) alert('Enter A Valid Word')


            else {
                getImges.forEach(element => {


                    let allPriviewImges = element.previewURL    // Priview Imges 

                    let allHDImges = element.largeImageURL  //     //   HdImges



                    let HdImges = document.createElement('a')


                    function SetHDAttri(el, attrs) {

                        for (let kye in attrs) {

                            el.setAttribute(kye, attrs[kye])

                        }
                    }




                    SetHDAttri(HdImges, { 'href': allHDImges, 'target': 'blank', 'height': '100%', 'width': '100%', 'id': 'HdImg' })



                    // HdImges.setAttribute('href', allHDImges)
                    // HdImges.setAttribute('target', 'blank')
                    // HdImges.setAttribute('height', '100vh')
                    // HdImges.setAttribute('width', '100%')


                    // HdImges.style["width"] = "100%";



                    console.log(HdImges)



                    let Img = document.createElement('img')
                    let ImgDeletBtn = document.createElement('button')




                    function SetImgAttri(ele, attrs) {

                        for (let key in attrs) {

                            ele.setAttribute(key, attrs[key])

                            // .ele.

                        }

                    }



                    SetImgAttri(Img, { 'src': allPriviewImges, 'height': '25px', 'data-aos': 'fade-up', 'data-aos-delay': '8000' })



                    // Img.setAttribute('src', allPriviewImges)
                    // Img.setAttribute('height', '20px')
                    // Img.setAttribute('weidth', '20px')


                    let hdImg = ImgsContainer.appendChild(HdImges)

                    hdImg.appendChild(Img).appendChild(ImgDeletBtn)

                    console.log(Img)

                    console.log(allPriviewImges)

                });
            }
        })

        .catch((err) => console.log(err))


})






















// $.getJSON(URL, function (data) {
//     if (parseInt(data.totalHits) > 0)
//         $.each(data.hits, function (i, hit) { console.log(hit.pageURL); });
//     else
//         console.log('No hits');
// });





// 'https://pixabay.com/api/?key=42366435-a7ce29bcd9380ebc415619aef&q=yellow+flowers&image_type=photo'



// 'https://pixabay.com/api/videos/?key=42366435-a7ce29bcd9380ebc415619aef&q=yellow+flowers'






