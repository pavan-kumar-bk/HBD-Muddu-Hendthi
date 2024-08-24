const videosList = [
    {
        video: 'BirthDay.mp4',
        title: '3D helicopter animation'
    },
    {
        video: '1.mp4',
        title: '3D helicopter animation'
    },
    {
        video: '2.mp4',
        title: 'emoji falling animation'
    },
    {
        video: '3.mp4',
        title: 'house flood animation'
    },
    {
        video: '4.mp4',
        title: 'zoombie walking animation'
    },
    {
        video: '5.mp4',
        title: '3D town animation'
    },
    {
        video: '6.mp4',
        title: 'man chasing carrot animation'
    },
    {
        video: '7.mp4',
        title: 'door hinge animation'
    },
    {
        video: '8.mp4',
        title: 'poeple walking in town animation'
    },
    {
        video: '9.mp4',
        title: 'knight chasing virus animation'
    },
    {
        video: '10.mp4',
        title: 'knight chasing virus animation'
    },
    {
        video: '11.mp4',
        title: '3D helicopter animation'
    },
    {
        video: '12.mp4',
        title: 'emoji falling animation'
    },
    {
        video: '13.mp4',
        title: 'house flood animation'
    },
    {
        video: '14.mp4',
        title: 'zoombie walking animation'
    },
    {
        video: '15.mp4',
        title: '3D town animation'
    },
    {
        video: '16.mp4',
        title: 'man chasing carrot animation'
    },
    {
        video: '17.mp4',
        title: 'door hinge animation'
    },
    {
        video: '18.mp4',
        title: 'poeple walking in town animation'
    },
    {
        video: '19.mp4',
        title: 'knight chasing virus animation'
    },
    {
        video: '20.mp4',
        title: 'knight chasing virus animation'
    },
    {
        video: '21.mp4',
        title: '3D helicopter animation'
    },
    {
        video: '22.mp4',
        title: 'emoji falling animation'
    },
    {
        video: '23.mp4',
        title: 'house flood animation'
    },
    {
        video: '24.mp4',
        title: 'zoombie walking animation'
    },
    {
        video: '25.mp4',
        title: '3D town animation'
    },
    {
        video: '26.mp4',
        title: 'man chasing carrot animation'
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
    