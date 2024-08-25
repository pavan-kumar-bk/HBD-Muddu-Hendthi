const videosList = [
    {
        video: 'B2.mp4',
        title: '💛ಹುಟ್ಟುಹಬ್ಬದ ಶುಭಾಶಯಗಳು ಮುದ್ದು ಹೆಂಡತಿ💛'
    },
    {
        video: '1.mp4',
        title: ' #1 - Advance Happy birthday muddu hendthi😘'
    },
    {
        video: '2.mp4',
        title: ' #2 - Advance Happy birthday muddu hendthi😘'
    },
    {
        video: '3.mp4',
        title: ' #3 - Advance Happy birthday muddu hendthi😘'
    },
    {
        video: '4.mp4',
        title: ' #4 - Advance Happy birthday muddu hendthi😘'
    },
    {
        video: '5.mp4',
        title: ' #5 - Advance Happy birthday muddu hendthi😘'
    },
    {
        video: '6.mp4',
        title: ' #6 - Advance Happy birthday muddu hendthi😘'
    },
    {
        video: '7.mp4',
        title: ' #7 - Advance Happy birthday muddu hendthi😘'
    },
    {
        video: '8.mp4',
        title: ' #8 - Advance Happy birthday muddu hendthi😘'
    },
    {
        video: '9.mp4',
        title: ' #9 - Advance Happy birthday muddu hendthi😘'
    },
    {
        video: '10.mp4',
        title: ' #10 - Advance Happy birthday muddu hendthi😘'
    },
    {
        video: '11.mp4',
        title: ' #11 - Advance Happy birthday muddu hendthi😘'
    },
    {
        video: '12.mp4',
        title: ' #12 - Advance Happy birthday muddu hendthi😘'
    },
    {
        video: '13.mp4',
        title: ' #13 - Advance Happy birthday muddu hendthi😘'
    },
    {
        video: '14.mp4',
        title: ' #14 - Advance Happy birthday muddu hendthi😘'
    },
    {
        video: '15.mp4',
        title: ' #15 - Advance Happy birthday muddu hendthi😘'
    },
    {
        video: '16.mp4',
        title: ' #16 - Advance Happy birthday muddu hendthi😘'
    },
    {
        video: '17.mp4',
        title: ' #17 - Advance Happy birthday muddu hendthi😘'
    },
    {
        video: '18.mp4',
        title: ' #18 - Advance Happy birthday muddu hendthi😘'
    },
    {
        video: '19.mp4',
        title: ' #19 - Advance Happy birthday muddu hendthi😘'
    },
    {
        video: '20.mp4',
        title: ' #20 - Advance Happy birthday muddu hendthi😘'
    },
    {
        video: '21.mp4',
        title: ' #21 - Advance Happy birthday muddu hendthi😘'
    },
    {
        video: '22.mp4',
        title: ' #22 - Advance Happy birthday muddu hendthi😘'
    },
    {
        video: '23.mp4',
        title: ' #23 - Advance Happy birthday muddu hendthi😘'
    },
    {
        video: '24.mp4',
        title: ' #24 - Advance Happy birthday muddu hendthi😘'
    },
    {
        video: '25.mp4',
        title: ' #25 - Advance Happy birthday muddu hendthi😘'
    },
    {
        video: '26.mp4',
        title: ' #26 - ಜನ್ಮದಿನದ ಶುಭಾಶಯಗಳು, ಮುದ್ದು ಹೆಂಡತಿ💋😘'
    },
    
    ]
    
    
    const categories = [...new Set(videosList.map((item) => { return item }))]
    document.getElementById('videosList').innerHTML = categories.map((item) => {
        var { video, title } = item;
        return (
            `
            <div class="list active">
            <video src=${video} class="list-video"></video>
            <h3 class="list-title">${title}</h3>
            </div>`
            )
    }).join('')
    
    
    let videoList = document.querySelectorAll('.video-list-container .list');
    videoList.forEach(remove => { remove.classList.remove('active') });
    videoList.forEach(vid => {
        vid.onclick = () => {
            videoList.forEach(remove => { remove.classList.remove('active') });
            vid.classList.add('active');
            let src = vid.querySelector('.list-video').src;
            let title = vid.querySelector('.list-title').innerHTML;
            document.querySelector('.main-video-container .main-video').src = src;
            document.querySelector('.main-video-container .main-video').play();
            document.querySelector('.main-video-container .main-vid-title').innerHTML = title;
        };
    });
    
