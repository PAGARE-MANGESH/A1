
AOS.init();



let UserInput = document.getElementById('UserInput')

let ImgsContainer = document.getElementById('OutPutContainer')

let submitBtn = document.getElementById('submitBtn')


submitBtn.addEventListener('click', async function (e) {
    e.preventDefault()


    const API_KEY = '42366435-a7ce29bcd9380ebc415619aef';

    // https://pixabay.com/api/?key=


    let format = confirm('Do you Want Videos')


    if (format == true) {

        format = 'videos'

    } else {
        format = ''
    }

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

                    let a

                    let Img

                    let allPriviewImges

                    let allHDImges

                    // for videos

                    let videoLink

                    let videoTag

                    let sourceTag


                    function SetHDAttri(el, attrs) {

                        for (let kye in attrs) {

                            el.setAttribute(kye, attrs[kye])

                        }
                    }

                    if (!URL.includes('videos')) {


                        allPriviewImges = element.previewURL    // Priview Imges 

                        allHDImges = element.largeImageURL  //     //HdImges


                        a = document.createElement('a')   // a 

                        Img = document.createElement('img')   //  img


                        // console.log(clearbtn)
                        // console.log(Img)
                        // console.log(a)

                        ImgsContainer.appendChild(a).appendChild(Img)

                        SetHDAttri(a, { 'href': allHDImges, 'target': 'blank', 'height': '50%', 'width': '50%', 'id': 'HdImg' })
                        SetHDAttri(Img, { 'src': allPriviewImges, 'height': '25px', 'data-aos': 'fade-up', 'data-aos-delay': '8000', 'alt': 'Input releted img' })

                    } else {


                        videoLink = element.videos.small.url


                        videoTag = document.createElement('video')

                        sourceTag = document.createElement('source')

                        ImgsContainer.appendChild(videoTag).append(sourceTag)

                        videoTag.load()

                        // console.log(videoTag)

                        SetHDAttri(videoTag, { 'height': '200', 'width': '300', 'controls': 'true', 'value': '1080', 'id': 'video' })
                        SetHDAttri(sourceTag, { 'src': videoLink, 'type': 'video/mp4' })

                    }

                });

            }

        }).catch((err) => console.log(err))

})


function clearAll() {

    ImgsContainer.innerHTML = ''
    document.getElementById('UserInput').value = ''


    console.log('click')

}











