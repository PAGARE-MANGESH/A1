
AOS.init();



let UserInput = document.getElementById('UserInput')

let ImgsContainer = document.getElementById('OutPutContainer')

let submitBtn = document.getElementById('submitBtn')


submitBtn.addEventListener('click', async function () {



    const API_KEY = '42366435-a7ce29bcd9380ebc415619aef';

    // https://pixabay.com/api/?key=


    let format = ''

    const URL = `https://pixabay.com/api/${format}/?key=` + API_KEY + '&q=' + `${UserInput.value}`   // api +

    console.log(URL)


    let p = await fetch(URL).then(async (response) => await response.json())


        .then((data) => {


            console.log(data)


            getImges = data.hits



            if (data.hits.length === 0) alert('Enter A Valid Word')


            else if (UserInput.value.trim().length == 0) alert('Enter A Word')


            else {


                getImges.forEach(element => {


                    // for Imges 

                    let allPriviewImges = element.previewURL    // Priview Imges 

                    let allHDImges = element.largeImageURL  //     //HdImges


                    let a = document.createElement('a')   // a 

                    let Img = document.createElement('img')     //  img

                    console.log(Img)
                    console.log(a)

                    ImgsContainer.appendChild(a).appendChild(Img)



                    // for videos 



                    // let videoLink = element.videos.tiny.url


                    // let videoTag = document.createElement('video')

                    // let sourceTag = document.createElement('source')

                    // ImgsContainer.appendChild(videoTag)

                    // videoTag.load()




                    function SetHDAttri(el, attrs) {

                        for (let kye in attrs) {

                            el.setAttribute(kye, attrs[kye])

                        }
                    }


                    // for Imges 

                    SetHDAttri(a, { 'href': allHDImges, 'target': 'blank', 'height': '50%', 'width': '50%', 'id': 'HdImg' })
                    SetHDAttri(Img, { 'src': allPriviewImges, 'height': '25px', 'data-aos': 'fade-up', 'data-aos-delay': '8000' })


                    // for videos 

                    // SetHDAttri(sourceTag, { 'src': videoLink })
                    // SetHDAttri(videoTag, { 'height': '300', 'width': '300', 'controls': 'true', 'value': '1080', 'id': 'video' })


                });

            }



        }).catch((err) => console.log(err))


})






















// 'https://pixabay.com/api/?key=42366435-a7ce29bcd9380ebc415619aef&q=yellow+flowers&image_type=photo'



// 'https://pixabay.com/api/videos/?key=42366435-a7ce29bcd9380ebc415619aef&q=yellow+flowers'





// for Video




// let url = ` https://pixabay.com/api/?key=42366435-a7ce29bcd9380ebc415619aef&q=yellow+flowers `


// let vContainer = document.getElementById('OutPutContainer')


// console.log(vContainer)

// let vidoeslinks





// fetch(url)
//     .then((response) => response.json())
//     .then((data) => {


//         let videoTag

//         let sourceTag

//         console.log(data)

//         // videos

//         data.hits.forEach(element => {

//             // vidoeslinks = element.videos.tiny.url


//             // console.log(vidoeslinks)

//             videoTag = document.createElement('video')

//             sourceTag = document.createElement('source')

//             vContainer.appendChild(videoTag)

//             // videoTag.load()

//             setATT(sourceTag, { 'src': vidoeslinks })
//             setATT(videoTag, { 'height': '300', 'width': '300', 'controls': 'true', 'value': '1080', 'id': 'video' })



//         });



//         function setATT(e, attrs) {
//             for (let kye in attrs) {

//                 e.setAttribute(kye, attrs[kye])
//             }
//         }





//     })
//     .catch((err) => console.log(err))



