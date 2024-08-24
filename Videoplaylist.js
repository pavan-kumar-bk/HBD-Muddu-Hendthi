const videosList = [
    {
        video: 'video/BirthDay.mp4',
        title: '3D helicopter animation'
    },
    {
        video: 'video/1.mp4',
        title: '3D helicopter animation'
    },
    {
        video: 'video/2.mp4',
        title: 'emoji falling animation'
    },
    {
        video: 'video/3.mp4',
        title: 'house flood animation'
    },
    {
        video: 'video/4.mp4',
        title: 'zoombie walking animation'
    },
    {
        video: 'video/5.mp4',
        title: '3D town animation'
    },
    {
        video: 'video/6.mp4',
        title: 'man chasing carrot animation'
    },
    {
        video: 'video/7.mp4',
        title: 'door hinge animation'
    },
    {
        video: 'video/8.mp4',
        title: 'poeple walking in town animation'
    },
    {
        video: 'video/9.mp4',
        title: 'knight chasing virus animation'
    },
    {
        video: 'video/10.mp4',
        title: 'knight chasing virus animation'
    },
    {
        video: 'video/11.mp4',
        title: '3D helicopter animation'
    },
    {
        video: 'video/12.mp4',
        title: 'emoji falling animation'
    },
    {
        video: 'video/13.mp4',
        title: 'house flood animation'
    },
    {
        video: 'video/14.mp4',
        title: 'zoombie walking animation'
    },
    {
        video: 'video/15.mp4',
        title: '3D town animation'
    },
    {
        video: 'video/16.mp4',
        title: 'man chasing carrot animation'
    },
    {
        video: 'video/17.mp4',
        title: 'door hinge animation'
    },
    {
        video: 'video/18.mp4',
        title: 'poeple walking in town animation'
    },
    {
        video: 'video/19.mp4',
        title: 'knight chasing virus animation'
    },
    {
        video: 'video/20.mp4',
        title: 'knight chasing virus animation'
    },
    {
        video: 'video/21.mp4',
        title: '3D helicopter animation'
    },
    {
        video: 'video/22.mp4',
        title: 'emoji falling animation'
    },
    {
        video: 'video/23.mp4',
        title: 'house flood animation'
    },
    {
        video: 'video/24.mp4',
        title: 'zoombie walking animation'
    },
    {
        video: 'video/25.mp4',
        title: '3D town animation'
    },
    {
        video: 'video/26.mp4',
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
    